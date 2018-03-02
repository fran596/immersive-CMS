import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form';
// import { Input } from 'antd';

import wizardValidator from './wizardValidator'
import InputField from '../../validatedInputField'

const formRowPort = (props) => (
  <div className="form-group row">
    <label htmlFor="example-text-input" className="col-2 col-form-label font-weight-bold">{props.label}</label>
    <div className="col-sm-6">
      <Field 
        name={props.name} 
        type={props.type} 
        component={InputField} 
        options={{
          defaultValue: props.value,
          onInputChange: props.onInputChange
      }}
        className="form-control"
      />
    </div>
    <div className="col-sm-4">
      <p>{props.text}</p>
    </div>
  </div>
)

formRowPort.propTypes = {
  valueLink : PropTypes.object,
}

formRowPort.defaultProps = {
  valueLink: null,
}

export default formRowPort;
