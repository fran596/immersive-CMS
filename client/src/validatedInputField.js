import React from 'react'
import PropTypes from 'prop-types'

const validatedInputField = ({options, input, type, meta: { touched, error, warning }}, props) =>(
  <div>
    <div>{options && <input className="form-control" {...input} type={type} value={options.defaultValue || ''} onChange={(ev)=>options.onInputChange(ev,input.name)} /> }
      {!options && <input className="form-control" {...input} type={type}  />}
    </div>
    {touched &&
        error &&
        <div className="error-placeholder">
          {error}
        </div>}
  </div>
  )

validatedInputField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.object,
    type: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object
}

validatedInputField.defaultProps = {
    input: null,
    label: null,
    type: '',
    meta: null,
    options: null
}

export default validatedInputField;