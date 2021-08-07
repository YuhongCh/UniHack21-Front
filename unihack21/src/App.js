import Signin from './gateway/signin'
import Signup from './gateway/signup'
import Square from './square/index'
import User from './user'
import Room from './room'

import {Route} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import {Redirect, Switch} from "react-router";
import Map from "./map";
import Home from "./home";
import Mentor from "./mentor";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Square}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/square' component={Square}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/room' component={Room}/>
        <Route exact path='/user' component={User}/>
        <Route exact path='/data_map' component={Map}/>
        <Route exact path='/mentor' component={Mentor}/>
        <Route component={<Redirect to="/square"/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
