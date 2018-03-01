import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';



const pageTemplate = (props) => (
  <div>
    {/* <Menu
      theme="dark"
      mode="horizontal"
    >
      <Menu.Item key="mail">
        <Link to="/template" >
        Home
        </Link>
      </Menu.Item>

    </Menu> */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 " />
        <div dangerouslySetInnerHTML={{__html: props.content}} />
      </div>
    </div>
  </div>
)

pageTemplate.propTypes = {
    content : PropTypes.string
}

pageTemplate.defaultProps = {
    content: ''
}

export default pageTemplate;