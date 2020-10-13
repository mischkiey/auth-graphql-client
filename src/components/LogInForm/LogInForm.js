import React, { useState } from 'react';
import TokenService from '../../services/token-service';
import UserService from '../../services/user-service';

export default function LogInForm(props) {
  const [ error, setError ] = useState(null);

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
      TokenService.saveAuthToken(data.login.token);
      props.history.push('/');
    } catch({ errors }) {
      setError(...errors);
    }
  }

  return (
    <>
      {error
        ? <p>
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