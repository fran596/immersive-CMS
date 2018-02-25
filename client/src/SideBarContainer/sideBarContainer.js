import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {getPages} from '../HomeContainer/Page/AddPage/Actions/Creators/actionCreators'

class SideBarContainer extends React.Component {

  constructor(props) {
    super(props);

  }
  componentWillMount() {
    this.props.getPages()
  }

  render() {
    return (
      <div className="sidebar bg-dark">
        <ul className="list-unstyled">
          <li><Link to="/home"><i className="fa fa-fw fa-tachometer" /> Dashboard</Link></li>
          <li><Link to="/add"><i className="fa fa-fw fa-plus" /> Add Pages</Link></li>
          <li>
            <a href="#submenu1" data-toggle="collapse"><i className="fa fa-fw fa-file" /> Manage Pages</a>
            <ul id="submenu1" className="list-unstyled collapse">
              {
                this.props.pages.map(function (page) {
                    return <li key={page._id}><Link to="/manage">{page.title}</Link></li>
            })}
 
            </ul>
          </li>
          <li>
            <a href="#submenu2" data-toggle="collapse"><i className="fa fa-fw fa-address-card" /> Dropdown Link 2</a>
            <ul id="submenu2" className="list-unstyled collapse">
              <li><a href="#">Submenu Item</a></li>
              <li><a href="#">Submenu Item</a></li>
              <li><a href="#">Submenu Item</a></li>
            </ul>
          </li>
          <li><a href="#"><i className="fa fa-fw fa-link" /> Sidebar Link</a></li>
        </ul>
      </div>
    );
  }
}

SideBarContainer.propTypes = {
  pages: PropTypes.array,
  getPages: PropTypes.func,
  history: PropTypes.object
}

SideBarContainer.defaultProps = {
  pages: [],
  getPages: ()=>{},
  history: null
}

function mapStateToProps(state) {
  return {
    pages: state.page.pages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPages: () => dispatch(getPages())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);

