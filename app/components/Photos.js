let React     = require('react');
let Link      = require('react-router-dom').Link;
let PropTypes = require('prop-types');

function imagesLoaded(parentNode){
  const imgElements = parentNode.querySelectorAll('img');
  for(const img of imgElements){
    if(!img.complete){
      return false;
    }
  }
  return true;
}

class Photos extends React.Component {
  constructor(props){
    super(props);
    this.state       = {
      loading: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const {onClick, index, photo} = this.props;
    onClick(event, {photo, index});
  }

  handleImageChange(){
    const galleryElement = this.refs.thumbnail;
    this.setState({
      loading: !imagesLoaded(galleryElement),
    });
  }

  renderSpinder(){
    if(!this.state.loading){
      return null;
    }
    return (
        <div className = "spinner"></div>
    );
  }

  render(){
    const {photo, onClick, margin} = this.props;
    const imgStyle                 = {
      cursor: 'pointer',
      display: 'block',
      float: 'left',
      margin: margin,
      width: photo.width,
      height: photo.height
    };

    return (
        <div className = "photo-thumbnail" ref = "thumbnail" style = {{...imgStyle}}>
          {this.renderSpinder()}
          <img
              src = {photo.src}
              onClick = {onClick ? this.handleClick : null}
              style = {{...imgStyle}}
              onLoad = {this.handleImageChange.bind(this)}
              onError = {this.handleImageChange.bind(this)}

          />
          <span className = "info-overlay">
            <Link to = "/galleries" className = "info-title">{photo.name}</Link></span>
        </div>
    )
  }
}

Photos.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func
};

module.exports = Photos;