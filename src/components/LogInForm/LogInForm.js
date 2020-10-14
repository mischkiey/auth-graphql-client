import React, { useState, useContext } from 'react';
import TokenService from '../../services/token-service';
import { UserContext } from '../../contexts/UserContext';
import UserService from '../../services/user-service';

export default function LoginForm(props) {
  const [ error, setError ] = useState(null);
  const { setUser } = useContext(UserContext);

  const handleSubmitLogInForm = async (e) => {
    e.preventDefault();
    setError(null);

    const username = e.target['username'].value;
    const password = e.target['password'].value;

    const mutation = `mutation ($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        user {
          id
          firstName
          lastName
          email
          username
        }
      }
    }`;

    const variables = {
      username,
      password,
    };

    try {
      const { data } = await UserService.login(mutation, variables);
      const { token, user } = data.login;

      TokenService.saveAuthToken(token);
      setUser(user);
      
      props.history.push('/');
    } catch({ errors }) {
      setError(...errors);
    }
  }

  return (
    <>
      {error
        ? <p
            className='error'
          >
            {error}
          </p>
        : ''
      }
      <form
        onSubmit={(e) =>
          handleSubmitLogInForm(e)
        }
      >
        <input
          aria-label='username'
          placeholder='username'
          id='username'
          type='text'
          required
        />

        <input
          aria-label='password'
          placeholder='password'
          id='password'
          type='password'
          required
        />

        <button
          className=''
          type='submit'
        >
          LOGIN
        </button>
        <p>
          Don't have an account?
        </p>
        <a href='/signup'>
          Sign Up
        </a>
    </form>
    </>
  );
}