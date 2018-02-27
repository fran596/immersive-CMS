import React from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const manageSection = (props) => (
  <div className="row">
    <div className="col-sm-12 ">
      <div className="manage-title">
        <h4>Section text</h4>
      </div>
      <Editor
        editorState={props.editorState}
        onEditorStateChange={(editorState)=>props.editorChange(editorState)}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class draft-bg"
        toolbarClassName="toolbar-class"
      />
    </div>
  </div>
)

manageSection.propTypes = {
  editorState : PropTypes.object,
  editorChange: PropTypes.func
}

manageSection.defaultProps = {
  editorState: null,
  editorChange: ()=>{}
}

export default manageSection;