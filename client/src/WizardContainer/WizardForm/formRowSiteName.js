import React from 'react'
import PropTypes from 'prop-types'

const formRowSiteName = (props) => (
  <div className="form-group row">
    <label htmlFor="example-text-input" className="col-2 col-form-label font-weight-bold">Site name</label>
    <div className="col-sm-6">
      <input className="form-control" type="text" value={props.value} onChange={props.onSiteNameChange} />
    </div>
    <div className="col-sm-4">
      <p>The name of the site you want to use for your CMS</p>
    </div>
  </div>
)

formRowSiteName.propTypes = {
  value : PropTypes.string,
  onSiteNameChange: PropTypes.func
}

formRowSiteName.defaultProps = {
  value: '',
  onSiteNameChange: () => {}
}

export default formRowSiteName;