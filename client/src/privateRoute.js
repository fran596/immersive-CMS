import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect, withRouter} from 'react-router-dom'

import { connect } from 'react-redux'

/*actions */
import {getUser, checkAuth} from './User/Actions/Creators/actionCreators'

class PrivateRoute extends React.Component{ 
    
    constructor(props) {
        super(props);
      }

      componentDidMount(){
         this.props.checkAuth()
      }

    render(){
       const { component: Component, user: User, ...rest } = this.props
        return (
            this.props.user.loading &&
            <Route
              {...rest} 
              render={(props) =>  
                  User.isValid === true
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                    />
    }
            />
  )}
}

PrivateRoute.propTypes = {
    getUser: PropTypes.func,
    checkAuth: PropTypes.func,
    user: PropTypes.object,
    component: PropTypes.func,
    history: PropTypes.object
  }
  
  PrivateRoute.defaultProps = {
    getUser: ()=>{},
    checkAuth: ()=> {},
    component: ()=> {},
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
      checkAuth: ()=> dispatch(checkAuth())
    }
  }
  
  
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));
