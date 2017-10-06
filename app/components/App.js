let React = require('react');

let Discover = require('./Discover');
let MainNav = require('./MainNav');
let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;

class App extends React.Component{
  render(){
    return(
        <Router>
          <div className="container">
            <MainNav />
            <Switch>
              <Route path="/discover/galleries"  component={Discover}/>
              <Route path="/discover/marketplace"  component={Discover}/>
              <Route path="/discover/fresh"  component={Discover}/>
              <Route path="/discover/upcoming"  component={Discover}/>
              <Route path="/discover/editor"  component={Discover}/>
              <Route path="/discover/popular"  component={Discover}/>
              <Route render={function(){
                return(
                    <p>Page Not Found</p>
                )
              }}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

module.exports = App;