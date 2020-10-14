import React from 'react';
import { Switch } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import LoginRoute from '../../routes/LoginRoute';
import SignupRoute from '../../routes/SignupRoute';
import MockDashboardRoute from '../../routes/MockDashboardRoute';

// Utils
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';

// Style Sheets
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main
        className='App'
      >
        <Switch>
          <PublicOnlyRoute
            exact path={'/login'}
            comp={LoginRoute}
          />

          <PublicOnlyRoute
            exact path={'/signup'}
            comp={SignupRoute}
          />

          <PrivateRoute
            exact path={'/'}
            comp={MockDashboardRoute}
          />
        </Switch>
      </main>
    </>
  );
}

export default App;