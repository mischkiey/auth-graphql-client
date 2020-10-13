import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import LogInRoute from '../../routes/LogInRoute';
import SignUpRoute from '../../routes/SignUpRoute';
import MockDashboardRoute from '../../routes/MockDashboardRoute';

import './App.css';

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
            render={(props) => <LogInRoute {...props}/>}
          />

          <Route
            exact
            path={'/signup'}
            render={(props) => <SignUpRoute {...props}/>}
          />

          <Route
            path={'/dashboard'}
            render={(props) => <MockDashboardRoute {...props}/>}
          />

        </Switch>
      </main>
    </>
  );
}

export default App;