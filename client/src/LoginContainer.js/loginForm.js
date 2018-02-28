import React from 'react'
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types'

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
  <form className="form-signin">
    <label htmlFor="username" className="font-weight-bold text-left">Username</label>
    <Field name="username" type="text" component={InputField} className="form-control" />
    <label htmlFor="password" className="col-form-label text-left font-weight-bold">Password</label>
    <Field name="password" type="password" component={InputField} className="form-control" />
    
    <button type="button" onClick={handleSubmit} disabled={submitting} className="btn btn-lg btn-primary btn-block btn-login" >Login</button>
  </form>
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
  
