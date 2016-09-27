import React from 'react';
import {Router,Route,browserHistory, IndexRoute} from 'react-router';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Navigation from './components/navigation';

class Main extends React.Component{
  render(){
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Navigation}>
          <IndexRoute component={Home} />
          <Route path={"movie"} component={Movie}/>
        </Route>
      </Router>
    )
  }
}

export default Main;
