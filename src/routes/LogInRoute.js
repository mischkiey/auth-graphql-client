import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

export default function LoginRoute (props) {
  return (
    <>
      <LoginForm {...props}/>
    </>
  );
}