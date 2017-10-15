let React     = require('react');
let NavLink   = require('react-router-dom').NavLink;
let SearchBox = require('./SearchBox');

function SelectMainNav(props){
  let detail = JSON.parse(localStorage.getItem('details'));
  return (
      <div id = "main-nav-sticky" className = {detail !== 'details' ? '' : 'header-sticky ' + props.sticky}>
        <div className = "main-nav">
          <ul>
            <li>
              <div className = "icon-container">
                <NavLink to = "/"><img className = "icons" src = "../app/icons/ic_home.png"/></NavLink>
                <NavLink exact to = "/">Home</NavLink>
              </div>
            </li>
            <li>
              <div className = "icon-container">
                <NavLink to = "/"><img className = "icons" src = "../app/icons/ic_photos.png"/></NavLink>
                <NavLink activeClassName = "active" to = "/galleries">Discover</NavLink>
              </div>
            </li>
            <li>
              <div className = "icon-container">
                <NavLink to = "/"><img className = "icons" src = "../app/icons/ic_group.png"/></NavLink>
                <NavLink to = "/group">Group</NavLink>
              </div>
            </li>
            <li>
              <div className = "icon-container">
                <NavLink to = "/"><img className = "icons" src = "../app/icons/ic_add_shopping_cart.png"/></NavLink>
                <NavLink to = "/buy">Buy</NavLink>
              </div>
            </li>
          </ul>
          <div className = "nav-right">
            <SearchBox/>
            <span>
              <img className = "avatar" src = "../app/avatars/3.jpg"/>
              <NavLink to = "/user">kdobbin</NavLink>
            </span>
            <span>
              <img className = "upload" src = "../app/icons/ic_upload.png"/>
              <NavLink to = "/upload">Upload</NavLink>
            </span>
          </div>
        </div>
      </div>
  )
}

class MainNav extends React.Component {
  constructor(){
    super();
    this.state = {
      sticky: ''
    };
  }

  componentDidMount(){
    document.addEventListener('scroll', this.scrollPos.bind(this));
  }

  componentWillUnmount(){
    document.removeEventListener('scroll', this.scrollPos);
    this.unmounted = true;
    localStorage.clear();
  }

  scrollPos(){
    // Save the element we're wanting to scroll
    let el    = document.querySelector('#main-nav-sticky');
    let pageY = window.scrollY;
    //  If  we've scrolled past the height of the element, add a class
    if(el !== null && el.getBoundingClientRect().bottom <= pageY){
      if(!this.unmounted){
        this.setState(function(){
          return {
            sticky: 'sticky'
          }
        });
      }
      //  If we've scrolled back up to  the top of the container, remove the class
    } else{
      if(!this.unmounted){
        this.setState(function(){
          return {
            sticky: ''
          }
        });
      }
    }
  }

  render(){
    return (
        <SelectMainNav sticky = {this.state.sticky}/>
    )
  }
}

module.exports = MainNav;