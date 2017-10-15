let React       = require('react');
let queryString = require('query-string');
let PropTypes   = require('prop-types');
let api         = require('../utils/api');
let Photo       = require('../components/Photos');
let LightBox    = require('react-images');
import Lazyload from 'react-lazyload';

function SelectPhotos(props){
  const width   = props.containerWidth - 1;
  const columns = props.columns;
  const margin  = props.margin;
  const photos  = props.photos;
  const thumbs  = api.computeSizes({width, columns, margin, photos});
  return (
      <div className = "parallax">
        <div className = "parallax_layer parallax_layer_back bg-image "style = {{backgroundImage: 'url(\'' + photos[0].src + '\')'}}>

        </div>
        <div className = "parallax_layer parallax_layer_base">
          <div className = "parallax-content">
            {thumbs.map((photo, index) =>{
              return (
                  <Lazyload throttle = {200} height = {5} key = {photo.id}>
                    <div>
                      <Photo
                          key = {photo.id}
                          index = {index}
                          photo = {photo}
                          margin = {margin}
                          onClick = {(e) => props.openLightBox(index, e)}
                      />
                    </div>
                  </Lazyload>
              );
            })}
          </div>
        </div>
      </div>
  )
}

SelectPhotos.PropTypes = {
  containerWidth: PropTypes.number.isRequired,
  onImageClick: PropTypes.func.isRequired
};

class Details extends React.Component {
  constructor(){
    super();
    this.state         = {
      containerWidth: 0,
      photos: null,
      currentImage: 0,
      loading: true
    };
    this.getPhotos     = this.getPhotos.bind(this);
    this.closeLightBox = this.closeLightBox.bind(this);
    this.openLightBox  = this.openLightBox.bind(this);
    this.gotoNext      = this.gotoNext.bind(this);
    this.gotoPrevious  = this.gotoPrevious.bind(this);
    this.handleResize  = this.handleResize.bind(this);

  }

  openLightBox(index, event){
    event.preventDefault();
    this.setState({
      currentImage: index,
      LightBoxIsOpen: true,
    });
  }

  closeLightBox(){
    this.setState({
      currentImage: 0,
      LightBoxIsOpen: false,
    });
  }

  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext(){
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  getPhotos(){
    if(this.props.location){
      let data = queryString.parse(this.props.location.search);
      this.setState(function(){
        return {
          photos: api.fetchPhotos(data),
          loading: false
        }
      })
    }
  }

  async componentDidMount(){
    localStorage.setItem('details', JSON.stringify('details'));

    await this.getPhotos();
    this.setState({containerWidth: Math.floor(this.gallery.clientWidth), loading: false});
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(){
    if(this.gallery.clientWidth !== this.state.containerWidth){
      this.setState({
        containerWidth: Math.floor(this.gallery.clientWidth)
      });
    }
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize, false);
    localStorage.clear();
  }

  handleResize(e){
    this.setState({containerWidth: Math.floor(this.gallery.clientWidth)});
  }

  render(){
    return (
        <div>
          <div className = "photos-container" ref = {c => (this.gallery = c)}>
            {this.state.loading
                ? <p>Loading</p>
                : <div>
                  <SelectPhotos
                      photos = {this.state.photos}
                      containerWidth = {this.state.containerWidth}
                      columns = {this.props.columns}
                      margin = {this.props.margin}
                      openLightBox = {this.openLightBox}
                  />
                    <LightBox
                        images = {this.state.photos.map(x => ({src: x.src, caption: x.name}))}
                        isOpen = {this.state.LightBoxIsOpen}
                        onClickPrev = {this.gotoPrevious}
                        onClickNext = {this.gotoNext}
                        onClose = {this.closeLightBox}
                        currentImage = {this.state.currentImage}
                    />
                </div>
            }
            <div style = {{content: '', display: 'table', clear: 'both'}}></div>
          </div>
        </div>
    );
  }
}

module.exports = Details;

Details.defaultProps = {
  columns: 4,
  margin: 1,
};
