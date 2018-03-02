import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Form } from 'antd';

/*Other container dependencies */
import InputField from '../validatedInputField'

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const loginForm = ({ handleSubmit, submitting}) => (
  <Form className="form-signin login-content">
    <label htmlFor="username" className="font-weight-bold text-left">Username</label>
    <Field 
      name="username" 
      type="text" 
      component={InputField} 
      className="form-control"
    />
    <label htmlFor="password" className="col-form-label text-left font-weight-bold">Password</label>
    <Field name="password" type="password" component={InputField} className="form-control" />
    
    <Button type="primary" onClick={handleSubmit} disabled={submitting} className="btn btn-lg btn-primary btn-block btn-login" >Login</Button>

    <Link to="/welcome">Don't have an installation? Click to install the CMS </Link>
  </Form>
)

loginForm.propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool.isRequired
}

loginForm.defaultProps = {
    handleSubmit: ()=>{}
}

export default reduxForm({
    form: 'login',
    validate: validate
  })(loginForm)
  
