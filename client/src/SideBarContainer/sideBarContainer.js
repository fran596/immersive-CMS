import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

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
                    return (<li key={page._id}>
                      <Link to={{
                      pathname: '/manage',
                      search: `${page.title}`,
                      hash: '',
                      state: { page: page }
                    }}
                      >
                        {page.title}
                      </Link>
                    </li>)
            })}
 
            </ul>
          </li>
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBarContainer));

