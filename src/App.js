import './App.css'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'
import Explore from './components/Explore'
import Notifications from './components/Notifications'
import Messages from './components/Messages'
import Bookmarks from './components/Bookmarks'
import Trending from './components/Trending'
import Lists from './components/Lists'
import User from './components/User'
import Search from './components/Search'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-1 col-md-3">
              <Navbar/>
          </div>
          <div className="col">
              <Switch>
                <Route exact path="/" component={Timeline}/>
                <Route exact path="/explore" component={Explore}/>
                <Route exact path="/notifications" component={Notifications}/>
                <Route exact path="/messages" component={Messages}/>
                <Route exact path="/bookmarks" component={Bookmarks}/>
                <Route exact path="/lists" component={Lists}/>
                <Route exact path="/user" component={User}/>
              </Switch>
          </div>
          <div className="col-md-3">
              <Switch>
                <Route exact path="/">
                  <Search/>
                  <Trending/>
                </Route>
                <Route exact path="/explore" component={Trending}/>
                <Route exact path="/notifications">
                  <Search/>
                  <Trending/>
                </Route>
                <Route exact path="/bookmarks">
                  <Search/>
                  <Trending/>
                </Route>
                <Route exact path="/lists">
                  <Search/>
                  <Trending/>
                </Route>
                <Route exact path="/user">
                  <Search/>
                  <p>Fotos</p>
                  <Trending/>
                </Route>
              </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
