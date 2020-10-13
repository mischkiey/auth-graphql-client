import React from 'react';
import TokenService from '../../config';
import UserService from '../../services/user-service';

export default function LogInForm(props) {
  const handleSubmitLogInForm = async (e) => {
    e.preventDefault();

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
      console.log(data)
      TokenService.saveAuthToken(data.postUserSignUpInput);
      props.history.push('/dashboard');
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
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
        />

        <input
          aria-label='password'
          placeholder='password'
          id='password'
          type='password'
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