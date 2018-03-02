import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

/*actions */
import {getUser, logout} from '../User/Actions/Creators/actionCreators'

class HeaderContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this)
    this.onLogoClick = this.onLogoClick.bind(this)
  }

  componentWillMount() {
    this.props.getUser()
  }

  onLogout(){
    let session = {
      session: this.props.user.session
    }
    this.props.logout(this.props.history, session)
  }

  onLogoClick(){
    document.getElementById('sidebar-fixed').classList.toggle('toggled')
  }

  render(){
    return (
      this.props.user.loading &&
      <nav className="navbar navbar-expand navbar-dark nav-bg" id="header">
        <a onClick={this.onLogoClick} className="sidebar-toggle text-light mr-3"><i className="fa fa-bars" /></a>
        <a className="navbar-brand" href="/home"><i className="fa fa-code-branch" /> CMS</a>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                <i className="fa fa-user" /> {this.props.user.username}
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <button className="dropdown-item" onClick={this.onLogout} >Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );}
}

HeaderContainer.propTypes = {
  logout: PropTypes.func,
  getUser: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object
}

HeaderContainer.defaultProps = {
  logout: ()=>{},
  getUser: ()=>{},
  user: null,
  history: null
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser()),
    logout: (history, session) => dispatch(logout(history, session))
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));