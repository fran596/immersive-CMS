import React from 'react'
import PropTypes from 'prop-types'


const manageSection = (props) => (
  <div className="row">
    <div className="col-sm-12">
      <h4>Section #{props.number}</h4>
      <h6>Text</h6>
      <input type="text" onChange={(ev)=>props.onTxtChange((props.number -1), ev.target.value)} />
    </div>
  </div>
)

manageSection.propTypes = {
  valueLink : PropTypes.object
}

manageSection.defaultProps = {
  valueLink: null
}

export default manageSection;