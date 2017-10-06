let React = require('react');
let PropTypes = require('prop-types');
let NavLink = require('react-router-dom').NavLink;
let Galleries = require('./Galleries');
function SelectDiscover(props){
  let discover = ['popular', 'editor', 'upcoming', 'fresh', 'marketplace', 'galleries'];
    return(
        <div id="sticky" className={"header-sticky " + props.sticky}>
        <ul className="discover-nav ">
          {discover.map(function(g){
            return (
                <li

                    className = {g === props.selectedDiscover ? "active" : null}
                    key = {g}
                    onClick = {props.onSelect.bind(null, g)}
                >
                  <NavLink to={"/discover/" +g}>{g.toUpperCase()}</NavLink>

                </li>
            )
          })}
        </ul>
        </div>
    )
}

SelectDiscover.PropTypes = {
  selectedDiscover: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Discover extends React.Component{
  constructor(props){
    super(props);
    this.state         = {
      selectedDiscover: 'galleries',
      discover: null,
      sticky: ''
    };
    this.updateDiscover = this.updateDiscover.bind(this);
  }
  componentDidMount(){
    this.updateDiscover(this.state.selectedDiscover);
    window.addEventListener('scroll', this.scrollPos.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollPos);
  }


  updateDiscover(nav){
    this.setState(function(){
      return {
        selectedDiscover: nav
      }
    });
  }

  scrollPos() {
    // Save the element we're wanting to scroll
    let el = document.querySelector("#sticky");
    let pageY = window.scrollY;
    //  If  we've scrolled past the height of the element, add a class

    if (el.getBoundingClientRect().bottom <= pageY) {
      this.setState(function(){
        return {
          sticky: 'sticky'
        }
      });
      //  If we've scrolled back up to  the top of the container, remove the class
    } else {
      this.setState(function(){
        return {
          sticky: ''
        }
      });
    }
  }

  render(){
    return(
        <div>
          <SelectDiscover
              selectedDiscover={this.state.selectedDiscover}
              onSelect={this.updateDiscover}
              sticky={this.state.sticky}/>
          {this.state.selectedDiscover === 'galleries' && <Galleries />}

        </div>
  )
  }
}

module.exports = Discover;