let React     = require('react');
let PropTypes = require('prop-types');
let api       = require('../utils/api');
let Link      = require('react-router-dom').Link;
import Lazyload from 'react-lazyload';

function SelectGallery(props){
  let gallery = ['All', 'Trending', 'Featured', 'New'];
  return (
      <ul className = "gallery">
        {gallery.map(function(g){
          return (
              <li
                  className = {g === props.selectedGallery ? 'active' : null}
                  key = {g}
                  onClick = {props.onSelect.bind(null, g)}
              >
                {g}
              </li>
          )
        })}
      </ul>
  )
}

function GalleryGrid(props){
  return (

      <ul className = "grid">
        {props.gallery.map(function(gal, index){
          return (
              <Lazyload throttle = {200} height = {100} key = {gal.gallery_id}>
                <li key = {gal.gallery_id} className = "grid-item">
                  <Link
                      className = 'link-wrap'
                      to = {{
                        pathname: '/galleries/details',
                        search: '?usr=' + gal.created_by + '&gallery_id=' + gal.gallery_id
                      }}>
                  </Link>
                  <ul className = "space-list-item">
                    <li>
                      <div className="photo" style ={ { backgroundImage: "url('"+gal.bg_image+"')" } }>
                      </div>
                    </li>
                    <li>
                      <Link className = "gallery-name"
                            to = {'/' + gal.created_by + '/galleries/' + gal.gallery_name}>{gal.gallery_name}</Link>
                    </li>
                    <li>
                      {!gal.photo_by
                          ? <div><span className = "photo-by">Curated by </span><Link
                              to = {'/' + gal.created_by}>{gal.curated_by}</Link></div>
                          : <div><span className = "photo-by">Photos by </span><Link
                              to = {'/' + gal.created_by}>{gal.photo_by}</Link></div>}
                    </li>
                    <li>
                      <Link
                          to = {'/' + gal.created_by}>
                        <img
                            className = "avatar"
                            src = {gal.avatar}/>
                      </Link>
                    </li>
                  </ul>
                </li>
              </Lazyload>
          )
        })}
      </ul>
  )
}

GalleryGrid.propTypes = {
  gallery: PropTypes.array.isRequired,
};

SelectGallery.PropTypes = {
  selectedGallery: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Galleries extends React.Component {
  constructor(props){
    super(props);
    this.state      = {
      selectedGallery: 'all',
      gallery: null
    };
    this.getGallery = this.getGallery.bind(this);
  }

  componentDidMount(){
    this.getGallery();
  }

  getGallery(){
    this.setState(function(){
      return {
        gallery: api.fetchGallery()
      }
    });
  }

  render(){
    return (
        <div>
          {!this.state.gallery
              ? <p>Loading</p>
              : <GalleryGrid gallery = {this.state.gallery}/>}
        </div>
    )
  }
}

module.exports = Galleries;
