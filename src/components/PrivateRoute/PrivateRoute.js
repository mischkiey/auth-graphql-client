import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenService from '../../services/token-service';

const PrivateRoute = (props) => {
  const { path: currentPath, comp: Component } = props;

  return (
    <Route
      {...props}
      render={(props) => 
        (TokenService.hasAuthToken())
          ? <Component
              {...props}
            />
          : (
              <Redirect
                to={{
                  pathname: '/signup',
                  state: { from: currentPath },
                }}
              />
            )
      }
    />
  );
}

export default PrivateRoute;