import React, { Component } from 'react';
import {LoginForm} from 'react-form-login';

class Login extends React.Component {


  render() {
    return (
      

<LoginForm
  form={{ className: 'login-form' }}

  username={{
    placeholder: 'Custom username',
    className: 'input-username',
    containerClassName: 'input-container'
  }}

  password={{
    placeholder: 'Custom password',
    className: 'input-password',
    containerClassName: 'input-container'
  }}

  text={{
    rememberMe: 'Custom Remember Me',
    submitLabel: 'Custom Sign In'
  }}

  onSubmit={(username, password, isRemember) => {
    console.log(username, password, isRemember);
  }}
/>
    );
}}
export default Login;