import React from 'react'
import PropTypes from 'prop-types'

const formRowUsername = (props) => (
  <div className="form-group row">
    <label htmlFor="example-search-input" className="col-2 col-form-label font-weight-bold">Username</label>
    <div className="col-sm-6">
      <input className="form-control" type="search" autoComplete="on" value={props.valueLink.value} onChange={(e) => props.onUsernameChange( e, props.valueLink)} />
      <div className="error-placeholder">
        {props.valueLink.error || ''}
      </div>
    </div>
    <div className="col-sm-4">
      <p>Your database username</p>
    </div>
  </div>
)

formRowUsername.propTypes = {
  valueLink : PropTypes.object
}

formRowUsername.defaultProps = {
  valueLink: null
}

export default formRowUsername;