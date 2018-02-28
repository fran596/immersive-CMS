import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';

/*actions */
import {authUser} from '../User/Actions/Creators/actionCreators'

import LogInForm from './loginForm'

class loginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
      
      let values = this.props.form.values;
      console.log(values)
      let errors = this.props.form.syncErrors;
      if(!errors){
        
          this.props.authUser(values, this.props.history)
      }
      else{
        if(typeof values === 'undefined'){
          toast.error("Please complete this form",{
            position: toast.POSITION.TOP_RIGHT
          });
        }
        else{
          toast.error("Please correct the errors on this form",{
            position: toast.POSITION.TOP_RIGHT
          });
        }
        
          
      }
  }

    render() {
        return (
          <div className="container-fluid margin-login">
            <ToastContainer />
            <div className="row wizard-container mx-auto" >
              <div className="col-md-12 ">
                <LogInForm handleSubmit={this.handleSubmit} />
              </div>
            </div>
          </div>
        );
    }
}

loginContainer.propTypes = {
    // contacts: PropTypes.array,
    authUser: PropTypes.func,
    // history: PropTypes.object
    form: PropTypes.object,
    history: PropTypes.object
}

loginContainer.defaultProps = {
    // contacts: [],
    authUser: () => { },
    // history: null
    form: null,
    history: null
}

function mapStateToProps(state) {
    return {
        wizard: state.wizard.wizard,
        user: state.user,
        form: state.form.login,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      authUser: (user, history) => dispatch(authUser(user, history))
        // loadData: () => {
        //     dispatch(fetchContact())
        // }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(loginContainer);