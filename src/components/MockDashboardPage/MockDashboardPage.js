import React from 'react';
import TokenService from '../../services/token-service';

export default function MockDashboardPage ({history}) {
  return (
    <>
      <button
        onClick={() => {
          TokenService.clearAuthToken();
          history.push('/signup');
        }}
      >
        LOGOUT
      </button>
    </>
  );
}