import React from 'react'
import PropTypes from 'prop-types'


const formRowDB = (props) => (
  <div className="form-group row">
    <label htmlFor="example-text-input" className="col-2 col-form-label font-weight-bold">Database name</label>
    <div className="col-sm-6">
      <input className="form-control" value={props.value} type="text" onChange={props.onDBchange} />
    </div>
    <div className="col-sm-4">
      <p>The name of the database you want to use for your CMS</p>
    </div>
  </div>
)

formRowDB.propTypes = {
  value : PropTypes.string,
  onDBchange: PropTypes.func
}

formRowDB.defaultProps = {
  value: '',
  onDBchange: () => {}
}

export default formRowDB;