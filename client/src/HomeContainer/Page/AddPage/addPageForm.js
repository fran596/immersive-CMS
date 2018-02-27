import React from 'react'
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types'

/*Other container dependencies */
import InputField from '../validatedInputField'

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.url) {
    errors.url = 'Required';
  }

  return errors;
};

const addPageForm = ({ handleSubmit, submitting}) => (
  <form  id="form1">
    <div className="form-group row">
      <label htmlFor="title" className="col-2 col-form-label font-weight-bold">Page title</label>
      <div className="col-sm-6">
        <Field name="title" type="text" component={InputField} className="form-control" />
      </div>
      <div className="col-sm-4">
        <p>The name of the page</p>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="url" className="col-2 col-form-label font-weight-bold">Page url</label>
      <div className="col-sm-6">
        <Field name="url" type="text" component={InputField} className="form-control" />
      </div>
      <div className="col-sm-4">
        <p>The url to get to this new page</p>
      </div>
    </div>
    <button type="button" onClick={handleSubmit} disabled={submitting} className="btn btn-primary wizard-btn" >Submit</button>
  </form>
)

addPageForm.propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool.isRequired
}

addPageForm.defaultProps = {
    handleSubmit: ()=>{}
}

export default reduxForm({
    form: 'addPage',
    validate: validate
  })(addPageForm)
  
