var React = require('react');
var api         = require('../utils/api');
let PropTypes   = require('prop-types');


class Home extends React.Component{
  constructor(){
    super();
    this.state         = {
      photos: null
    };
  }


  componentDidMount(){

  }


  render(){
    return (
        <div>Under Construction</div>
    )
  }
}

Home.defaultProps = {
  columns: 4,
  margin: 0,
};

module.exports = Home;