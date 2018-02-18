import React from 'react'
import PropTypes from 'prop-types'

const formRowPassword = (props) => (
  <div className="form-group row">
    <label htmlFor="example-password-input" className="col-2 col-form-label font-weight-bold">Password</label>
    <div className="col-sm-6">
      <input className="form-control" type="password" value={props.valueLink.value} autoComplete="on" onChange={e => props.valueLink.set(e.target.value)} />
      <div className="error-placeholder">
        {props.valueLink.error || ''}
      </div>
    </div>
    <div className="col-sm-4">
      <p>Your database password</p>
    </div>
  </div>
)

formRowPassword.propTypes = {
  valueLink : PropTypes.object
}

formRowPassword.defaultProps = {
  valueLink: null
}

export default formRowPassword;