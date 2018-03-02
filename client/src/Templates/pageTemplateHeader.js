import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';



const pageTemplateHeader = (props) => (
  <div>
    <Menu
      theme="dark"
      mode="horizontal"
    >
      {
        props.pages.map(function (page) {
          if (page.home === true) {
            return (
              <Menu.Item key={page._id}>
                <Link to="/template" >
                  Home
                    </Link>
              </Menu.Item>
            )
          }
        })
      }
      {
        props.pages.map(function (page) {
          if (page.home !== true) {
            return (
              <Menu.Item key={page._id}>
                <Link to={`/template${page.url}`} >
                  {page.title}
                </Link>
              </Menu.Item>
            )
          }
        })
      }
    </Menu>
  </div>
)

pageTemplateHeader.propTypes = {
  pages: PropTypes.array
}

pageTemplateHeader.defaultProps = {
  pages: []
}

export default pageTemplateHeader;