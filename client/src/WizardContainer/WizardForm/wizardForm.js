
import React from 'react'
import Link from 'valuelink'

import {  reduxForm } from 'redux-form';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { setupUser, checkDB } from '../Actions/Creators/actionCreators'
import { Card } from 'antd';



/*Form containers */
import WizardFormContent from './wizardFormContent'


/* Validation  for the form */
import wizardValidator from './wizardValidator'
import wizardAsyncValidator from './wizardAsyncValidator'

var timer = 1;

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
      //this.onDBnameChange = this.onDBnameChange.bind.this(this)
    this.checkPrueba = this.checkPrueba.bind(this);
    this.onDBcheck = this.onDBcheck.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.checkDB()
  }

  onDBcheck(name) {
    let dbs = this.props.dbs;
    let res = true;
    for (let i = 0; i < dbs.length; ++i) {
      if (dbs[i] === name) {
        res = false;
        break;
      }
    }
    if (dbs.length > 0) {
      window.clearTimeout(timer)
    }
    return res;
  }

  onInputChange(ev, name) {
    if(name === 'dbName'){
      this.setState({ db: ev.target.value })
    }
    else if(name === 'dbPort'){
      this.setState({ port: ev.target.value })
    }
    else if(name === 'siteName'){
      this.setState({ site: ev.target.value })
    }
    else if(name === 'username'){
      this.setState({ username: ev.target.value })
    }
    else if(name === 'password'){
      this.setState({ password: ev.target.value })
    }
    
  }

 

  checkPrueba() {
    this.props.checkDB();
    let dbs = this.props.dbs;
    while (timer--) {
      window.clearTimeout(timer)
    }
  }



  handleSubmit() {
    let values = this.props.form.values;
    let errors = this.props.form.syncErrors;
    if(!errors){
      // this.props.setupUser(this.state, this.props.history)
      console.log(values)
      console.log(this.state)
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
    // this.props.setupUser(this.state, this.props.history)
  }



  render() {


    return (
      <div>
        <ToastContainer />
        <div className="row  mx-auto">
          <div className="col-sm-12 center ">
            <Card title="CMS WIZARD SETUP">
              <WizardFormContent
                state={this.state}
                onInputChange={this.onInputChange}
              />
              <button
                type="button"
                  // disabled={dbNameLink.error || portLink.error || siteNameLink.error || usernameLink.error || passwordLink.error}
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
    checkDB: () => dispatch(checkDB())
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(wizardForm);

export default reduxForm({
  form: 'setup',
  validate: wizardValidator,
  asyncValidate: wizardAsyncValidator,
  asyncBlurFields: [ 'dbName' ],
  syncErrors:wizardValidator,
  enableReinitialize: true
})(connect(mapStateToProps, mapDispatchToProps)(wizardForm))
