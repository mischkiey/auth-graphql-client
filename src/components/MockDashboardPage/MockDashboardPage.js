import React, { useContext, useEffect } from 'react';
import TokenService from '../../services/token-service';
import { UserContext } from '../../contexts/UserContext';
import UserService from '../../services/user-service';

export default function MockDashboardPage ({history}) {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const query = `query {
      user {
        firstName,
        lastName,
        username
      }
    }`;

    const getUser = async() => {
      try {
        const { data } =  await UserService.user(query);
        setUser(data.user);

      } catch({errors}) {
        console.log(...errors)
      }
    }
    getUser();
  }, [setUser]);

  return (
    <>
      <h3>
        Hello, {user.firstName}!
      </h3>
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