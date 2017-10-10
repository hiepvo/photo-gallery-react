let React     = require('react');
let Link      = require('react-router-dom').Link;
let PropTypes = require('prop-types');
import LazyLoad from 'react-lazyload';

class Photos extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const {onClick, index, photo} = this.props;
    onClick(event, {photo, index});
  }

  render(){
    const {photo, onClick} = this.props;
    return (
        <div className = "photo-thumbnail">
          <LazyLoad throttle = {200} height={200}>
              <img
                  src = {photo.src}
                  onClick = {onClick ? this.handleClick : null}
              />
          </LazyLoad>
          <span className = "info-overlay">
            <Link to = "/galleries" className = "info-title">{photo.name}</Link>
          </span>
          <div className="clearFix" ></div>
        </div>

    )
  }
}

Photos.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func
};

module.exports = Photos;