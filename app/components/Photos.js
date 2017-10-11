let React     = require('react');
let Link      = require('react-router-dom').Link;
let PropTypes = require('prop-types');

import Lazyload from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

  renderSpinner(){
    if(!this.state.loading){
      return null;
    }
    return (
        <span className = "spinner"/>
    );
  }

  render(){
    const {photo, onClick} = this.props;
    return (
        <Lazyload throttle = {200} height = {300}>

          <div className = "photo-thumbnail" ref = "thumbnail">
            <img
                src = {photo.src}
                onClick = {onClick ? this.handleClick : null}
            />
            <span className = "info-overlay">
            <Link to = "/galleries" className = "info-title">{photo.name}</Link>
          </span>
          </div>
        </Lazyload>
    )
  }
}

Photos.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func
};

module.exports = Photos;