import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WizardWelcome from './wizardWelcome'
import WizardForm from './WizardForm/wizardForm'

class WizardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.toWizardForm = this.toWizardForm.bind(this);
    }


    toWizardForm(){

    }


    render() {
        return (
          <div>
            <div className="row" align="center">
              <div className="col-md-12 ">
                <h1>CMS WIZARD</h1>
              </div>
            </div>
            <Switch>
              {/* <Route exact path='/' component={WizardWelcome} /> */}
              <Route exact path='/' component={WizardForm} />
            </Switch>
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