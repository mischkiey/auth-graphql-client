import React, { useState } from 'react';
import TokenService from '../../services/token-service';
import UserService from '../../services/user-service';

export default function SignUpForm (props) {
  const [ error, setError ] = useState(null);

  const handleSubmitSignUpForm = async(e) => {    
    e.preventDefault();
    setError(null);

    const firstName = e.target['first_name'].value;
    const lastName = e.target['last_name'].value;
    const email = e.target['email'].value;
    const username = e.target['username'].value;
    const password = e.target['password'].value;

    const mutation = `mutation ($input: SignupInput) {
      signup(input: $input) {
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
      input: {
        firstName,
        lastName,
        email,
        username,
        password,
      }
    };

    try {
      const { data } = await UserService.signup(mutation, variables);
      TokenService.saveAuthToken(data.signup.token);
      props.history.push('/')
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
          handleSubmitSignUpForm(e)
        }
      >
        <input
          aria-label='first name'
          placeholder='first name'
          className='formInput'
          id='first_name'
          type='text'
          required
        />
    
        <input
          aria-label='last name'
          placeholder='last name'
          id='last_name'
          type='text'
          required
        />

        <input
          aria-label='email'
          placeholder='email'
          id='email'
          type='text'
          required
        />

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
          SIGNUP
        </button>
        <p>
          Already have an account?
        </p>
        <a href='/login'>
          Log In
        </a>
    </form>
    </>
  );
}