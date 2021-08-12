import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import PageRoute from './components/content/route';
import Main from './components/main';




function App() {

  const Content = <PageRoute/>;

  return (
    <Router>
      <Switch>

        <Route exact path={['/', '/route']}>
          <Switch>
            <Route exact path="/">
              <Main>
                {Content}
              </Main>
            </Route>

            <Route path="/route">
                <Main>
                    Xin chào mọi người
                </Main>
            </Route>
          </Switch>
        </Route>

        <Route path={'/hotline'}></Route>

      </Switch>
    </Router>
  );
}

export default App;