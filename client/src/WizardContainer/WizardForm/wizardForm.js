
import React from 'react'
import Link from 'valuelink'

import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { setupUser, checkDB, otherCheck } from '../Actions/Creators/actionCreators'
import { Card } from 'antd';



/*Form containers */
import WizardFormContent from './wizardFormContent'


/* Validation  for the form */
import wizardValidator from './wizardValidator'

class wizardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      db: '',
      port: '27017',
      site: '',
      username: '',
      password: ''
    },
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.checkDB()
  }


  onInputChange(ev, name) {
    if (name === 'dbName') {
      this.props.otherCheck(ev.target.value)
      this.setState({ db: ev.target.value })
    }
    else if (name === 'dbPort') {
      this.setState({ port: ev.target.value })
    }
    else if (name === 'siteName') {
      this.setState({ site: ev.target.value })
    }
    else if (name === 'username') {
      this.setState({ username: ev.target.value })
    }
    else if (name === 'password') {
      this.setState({ password: ev.target.value })
    }

  }


  handleSubmit() {
    let values = this.props.form.values;
    let syncErrors = this.props.form.syncErrors;
    let asycnErrors = this.props.form.asyncErrors
    if (!syncErrors && asycnErrors.dbName === "") {
       this.props.setupUser(this.state, this.props.history)
    }
    else {
      if (typeof values === 'undefined') {
        toast.error("Please complete this form", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
      else {
        toast.error("Please correct the errors on this form", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <div className="row  mx-auto">
          <div className="col-sm-12 center wizard-container ">
            <Card title="CMS WIZARD SETUP">
              <WizardFormContent
                state={this.state}
                onInputChange={this.onInputChange}
                handleSubmit={this.handleSubmit}
              />
              <button
                type="submit"
                className="btn btn-primary wizard-btn"
                onClick={this.handleSubmit}
              >Submit
              </button>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

wizardForm.propTypes = {
  setupUser: PropTypes.func,
  checkDB: PropTypes.func
}

wizardForm.defaultProps = {
  setupUser: () => { },
  checkDB: () => { }
}

function mapStateToProps(state) {
  return {
    dbs: state.wizard.dbs,
    userAdded: state.wizard.userAdded,
    form: state.form.setup
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setupUser: (formData, history) => dispatch(setupUser(formData, history)),
    checkDB: () => dispatch(checkDB()),
    otherCheck: (name) => dispatch(otherCheck(name))
  }
}


export default reduxForm({
  form: 'setup',
  validate: wizardValidator,
  syncErrors: wizardValidator,
  enableReinitialize: true
})(connect(mapStateToProps, mapDispatchToProps)(wizardForm))
