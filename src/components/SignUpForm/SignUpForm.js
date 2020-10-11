import React from 'react';
import UserService from '../../services/user-service';

export default function SignUpForm (props) {
  const handleSubmitSignUpForm = async(e) => {
    e.preventDefault();

    const firstName = e.target['first_name'].value;
    const lastName = e.target['last_name'].value;
    const email = e.target['email'].value;
    const username = e.target['username'].value;
    const password = e.target['password'].value;

    const mutation = `mutation ($input: SignUpInput) {
      postUserSignUpInput(input: $input)
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

    console.log(variables)

    try {
      const response = await UserService.postUser(mutation, variables);
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }

  return (
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
        type='text'
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
  );
}