import React from 'react'
import PropTypes from 'prop-types'

const addPageInputField = ({input, type, meta: { touched, error, warning }}) =>(
  <div>

    <div>
      <input className="form-control" {...input} type={type} />
    </div>
    {touched &&
        error &&
        <div className="error-placeholder">
          {error}
        </div>}
  </div>
  )

addPageInputField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.object,
    type: PropTypes.string,
    meta: PropTypes.object,
}

addPageInputField.defaultProps = {
    input: null,
    label: null,
    type: '',
    meta: null
}

export default addPageInputField;