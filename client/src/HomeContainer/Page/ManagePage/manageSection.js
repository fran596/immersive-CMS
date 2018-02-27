import React from 'react'
import PropTypes from 'prop-types'
import CKEditor from "react-ckeditor-component";



const manageSection = (props) => (
  <div className="row">
    <div className="col-sm-12">
      <h4>Section #{props.number}</h4>
      <div dangerouslySetInnerHTML={{__html: 
        props.other}}
       />
      {/* <h6>Text</h6>
      <input type="text" onChange={(ev)=>props.onTxtChange((props.number -1), ev.target.value)} /> */}
      <CKEditor 
        activeClass="p10" 
        content={props.other} 
        events={{
                "change": (ev)=>props.onTxtChange((props.number -1), ev)
              }}
       
      />
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