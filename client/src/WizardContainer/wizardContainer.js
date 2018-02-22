import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WizardWelcome from './wizardWelcome'
import WizardForm from './WizardForm/wizardForm'

class WizardContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div className="row" align="center">
              <div className="col-md-12 ">
                <h1 className="wizard-header">CMS WIZARD</h1>
              </div>
            </div>
            <div className="row wizard-container mx-auto">
              <div className="col-md-12">
                <form className="form-signin">
                  <h2 className="form-signin-heading">Please sign in</h2>
                  <label htmlFor="inputEmail" className="sr-only">Email address</label>
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                  <p><Link to="/welcome" >Don't have an account? Sign up here </Link></p>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

WizardContainer.propTypes = {
    // contacts: PropTypes.array,
    // loadData: PropTypes.func,
    // history: PropTypes.object
}

WizardContainer.defaultProps = {
    // contacts: [],
    // loadData: () => { },
    // history: null
}

function mapStateToProps(state) {
    return {
        wizard: state.wizard.wizard
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // loadData: () => {
        //     dispatch(fetchContact())
        // }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(WizardContainer);