import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import LogInRoute from '../../routes/LogInRoute';
import SignUpRoute from '../../routes/SignUpRoute';
import MockDashboardRoute from '../../routes/MockDashboardRoute';

function App() {
  return (
    <>
      <Header />
      <main
        className='App'
      >
        <Switch>
          <Route
            exact
            path={'/login'}
            component={LogInRoute}
          />

          <Route
            exact
            path={'/signup'}
            component={SignUpRoute}
          />

          <Route
            path={'/dashboard'}
            component={MockDashboardRoute}
          />

        </Switch>
      </main>
    </>
  );
}

export default App;