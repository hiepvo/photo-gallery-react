let React = require('react');
let api   = require('../utils/api');

class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result: null,
      query: ''
    }
  }

  onSubmitHandler(event){
    event.preventDefault();
    this.setState(function(query){
      return {
        result: api.fetchSearchResult(query)
      }
    })
  }

  render(){
    return (
        <div className = "search-box">
          <div className = "search-icon">
            <img src = "../app/icons/ic_search.png"/>
          </div>
          <input className = "search-input" id = "search" type = "text" placeholder = "Search"/>
        </div>
    )
  }
}

module.exports = SearchBox;