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

    const query = `query ($username: String!, $password: String!) {
      authUserLogInInput(username: $username, password: $password)
    }`;

    const variables = {
      username,
      password,
    };

    try {
      const { data } = await UserService.authUser(query, variables);
      TokenService.saveAuthToken(data.authUserLogInInput);
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