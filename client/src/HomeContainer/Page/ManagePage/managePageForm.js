import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Select } from 'antd'
import PropTypes from 'prop-types'

import validate from './managePagevalidation'

/*Other container dependencies */
import InputField from '../../../validatedInputField'


const managePageForm = ({ title, url, home, onInputChange, onDeletePage, onSelectChange}) => (
  <div>
    <div className="row mx-auto">
    <label htmlFor="select" className="font-weight-bold  ">Home page</label>
    </div>
    <div className="row mx-auto">
    
      <Select value={home} style={{ width: 120 }} onChange={onSelectChange}>
        <Select.Option value="true">Yes</Select.Option>
        <Select.Option value="false">No</Select.Option>
      </Select>
    </div>
    <form className="row mx-auto">
      <div className="col-5-md">
        <label htmlFor="title" className="font-weight-bold col-form-label ">Page title</label>
        <Field 
          name="title" 
          type="text"
          component={InputField} 
          options={{
                     defaultValue: title,
                     onInputChange: onInputChange
                 }}
          className="form-control"
        />
      </div>
      <div className="col-5-md">
        <label htmlFor="url" className="font-weight-bold col-form-label ">Page url</label>
        <Field
          name="url"
          type="text"
          component={InputField}
          options={{
                    defaultValue: url,
                     onInputChange: onInputChange
                }}
          className="form-control"
        />
      </div>
      <div className="col-2-md manage-btn">
        <button type="button" className="btn btn-danger" onClick={onDeletePage}>Delete Page</button>
      </div>
    </form>
  </div>
)

managePageForm.propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool.isRequired
}

managePageForm.defaultProps = {
    handleSubmit: ()=>{}
}

export default reduxForm({
    form: 'managePage',
    validate: validate,
    enableReinitialize: true
  })(managePageForm)
  
