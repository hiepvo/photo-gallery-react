let React = require('react');

let Discover = require('./Discover');
let MainNav = require('./MainNav');
let Details = require('./Details');
let Home = require('./Home');
let Group = require('./Group');
let Buy = require('./Buy');
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
              <Route exact path="/"  component={Home}/>
              <Route exact path="/Group"  component={Group}/>
              <Route exact path="/Buy"  component={Buy}/>
              <Route exact path="/galleries"  component={Discover}/>
              <Route path="/galleries/details"  component={Details}/>
              <Route path="/marketplace"  component={Discover}/>
              <Route path="/fresh"  component={Discover}/>
              <Route path="/upcoming"  component={Discover}/>
              <Route path="/editor"  component={Discover}/>
              <Route path="/popular"  component={Discover}/>
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