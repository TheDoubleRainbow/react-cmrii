import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './index.scss';

import ResultView from './views/ResultView';
import HomeView from './views/HomeView';
import { itemsPack2, itemsPack1, itemsPack3 } from './items';

function App({items}) {  
  items = items || itemsPack1
  return (
    <div className="cmrii">
      <Router>
        <Switch>
          <Route path="/result">
            <ResultView items={items} />
          </Route>
          <Route path="/">
            <HomeView items={items} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
