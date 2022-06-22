import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';

import {Home} from './pages'

function App() {


  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/portfolio" exact component={Home} />
      </Switch>
    </Router>
    
  );
}

export default App;
