import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';



const pageTemplate = (props) => (
  
  <div className="container-fluid home-container">
    <div className="row">
      <div className="col-sm-12">
        <h3>{props.title}</h3>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 " >
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  </div>
    )
    
pageTemplate.propTypes = {
      content : PropTypes.string,
    title : PropTypes.string
}

pageTemplate.defaultProps = {
      content: '',
    title: ''
}

export default pageTemplate;