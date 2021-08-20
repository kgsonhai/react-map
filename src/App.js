import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Demo from './components/demo/demo';
import Layout from './components/layout/layout';
import { RouterConfig } from './config';




function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route exact path={RouterConfig.home}>
            Đây là trang home
          </Route>
          <Route path={RouterConfig.demo.home}>
            <Demo />
          </Route>
          <Route path={RouterConfig.hotline}>
            Đây là trang hotline
          </Route>
        </Switch>
      </Layout>

    </Router>
  );
}

export default App;