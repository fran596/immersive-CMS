import React from 'react'
import PropTypes from 'prop-types'

const formRowPassword = (props) => (
        <div className="form-group row">
          <label htmlFor="example-password-input" className="col-2 col-form-label font-weight-bold">Password</label>
          <div className="col-sm-6">
            <input className="form-control" type="password" value={props.value} autoComplete="on" onChange={props.onPasswordChange} />
          </div>
          <div className="col-sm-4">
            <p>Your database password</p>
          </div>
        </div>
)

formRowPassword.propTypes = {
  value : PropTypes.string,
  onPasswordChange: PropTypes.func
}

formRowPassword.defaultProps = {
  value: '',
  onPasswordChange: () => {}
}

export default formRowPassword;