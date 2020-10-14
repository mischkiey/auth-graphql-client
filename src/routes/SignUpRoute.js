import React from 'react';
import SignupForm from '../components/SignupForm/SignupForm';

export default function SignupRoute (props) {
  return (
    <>
      <SignupForm {...props}/>
    </>
  );
}