import React from 'react'
import PropTypes from 'prop-types'


const formRowPort = (props) => (
  <div className="form-group row">
    <label htmlFor="example-text-input" className="col-2 col-form-label font-weight-bold">Database port</label>
    <div className="col-sm-6">
      <input className="form-control" value={props.value} type="text" onChange={props.onPortChange} />
    </div>
    <div className="col-sm-4">
      <p>The port of the database for your CMS. Usually the default port is 27017</p>
    </div>
  </div>
)

formRowPort.propTypes = {
  value : PropTypes.string,
  onPortChange: PropTypes.func
}

formRowPort.defaultProps = {
  value: '',
  onPortChange: () => {}
}

export default formRowPort;