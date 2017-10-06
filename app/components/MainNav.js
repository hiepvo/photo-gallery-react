let React = require('react');
let NavLink = require('react-router-dom').NavLink;
let SearchBox = require('./SearchBox');

function MainNav(){
  return(
      <ul className="main-nav">
        <li>
          <img className="icons" src="../app/icons/ic_home.png" />
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <img className="icons" src="../app/icons/ic_photos.png" />
          <NavLink exact activeClassName="active" to="/discover/galleries">Discover</NavLink>
        </li>
        <li>
          <img className="icons" src="../app/icons/ic_group.png" />
          <NavLink to="/group">Group</NavLink>
        </li>
        <li>
          <img className="icons" src="../app/icons/ic_add_shopping_cart.png" />
          <NavLink to="/buy">Buy</NavLink>
        </li>
        <li>
          <SearchBox/>
        </li>
        <li>
          <img className="avatar" src="../app/avatars/3.jpg" />
          <NavLink to="/user">kdobbin</NavLink>
        </li>
        <li>
          <img className="upload" src="../app/icons/ic_upload.png" />
          <NavLink to="/upload">Upload</NavLink>
        </li>
      </ul>
  )
}

module.exports = MainNav;