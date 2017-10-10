var React       = require('react');
var queryString = require('query-string');
var api         = require('../utils/api');
let Photo       = require('../components/Photos');
var LightBox    = require('react-images');

function SelectPhotos(props){
  let gallery = ['All', 'Trending', 'Featured', 'New'];
  return(
      this.state.photos.map((photo, index) =>{
        return (
            <Photo
                key = {photo.id}
                index = {index}
                photo = {photo}
                onClick = {(e) => this.openLightBox(index, e)}
            />
        );
      })
  )
}

class Details extends React.Component {
  constructor(){
    super();
    this.state     = {
      containerWidth: 0,
      photos: null,
      currentImage: 0
    };
    this.getPhotos = this.getPhotos.bind(this);

    this.closeLightBox = this.closeLightBox.bind(this);
    this.openLightBox  = this.openLightBox.bind(this);
    this.gotoNext      = this.gotoNext.bind(this);
    this.gotoPrevious  = this.gotoPrevious.bind(this);
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
    let data = queryString.parse(this.props.location.search);
    this.setState(function(){
      return {
        photos: api.fetchPhotos(data)
      }
    })
  }

  componentWillMount(){
    this.getPhotos()
  }

  render(){
    return (
        <div className = "photos-container">
          {!this.state.photos
              ? <p>Loading</p>
              : this.state.photos.map((photo, index) =>{
                return (
                    <Photo
                        key = {photo.id}
                        index = {index}
                        photo = {photo}
                        onClick = {(e) => this.openLightBox(index, e)}
                    />
                );
              })
          }
          <LightBox
              images = {this.state.photos.map(x => ({...x, srcset: x.srcSet, caption: x.title}))}
              isOpen = {this.state.LightBoxIsOpen}
              onClickPrev = {this.gotoPrevious}
              onClickNext = {this.gotoNext}
              onClose = {this.closeLightBox}
              currentImage = {this.state.currentImage}
          />
        </div>
    );
  }
}

module.exports = Details;