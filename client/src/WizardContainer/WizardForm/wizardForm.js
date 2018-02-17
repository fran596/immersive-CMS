import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {setupUser} from '../Actions/Creators/actionCreators'

import React from 'react'

/*Form containers */
import FormRowDB from './formRowDB'
import FormRowPort from './formRowPort'
import FormRowSiteName from './formRowSiteName'
import FormRowUserName from './formRowUsername'
import FormRowPassword from './formRowPassword'

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
    this.onDBchange = this.onDBchange.bind(this);
    this.onPortChange = this.onPortChange.bind(this);
    this.onSiteNameChange = this.onSiteNameChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDBchange(ev){
    this.setState({ db: ev.target.value });
  }

  onPortChange(ev){
    this.setState({ port: ev.target.value });
  }

  onSiteNameChange(ev){
    this.setState({ site: ev.target.value })
  }

  onUsernameChange(ev){
    this.setState({ username: ev.target.value })
  }

  onPasswordChange(ev){
    this.setState({ password: ev.target.value })
  }

  handleSubmit(){
    console.log(this.state);
    this.props.setupUser(this.state);
  }

  render() {
    return (
      <div className="row wizard-container mx-auto">
        <div className="col-sm-12 ">
          <p className="text-center">Please enter the information below to proceed</p>
          <form className=" wizard-form " autoComplete="on">
            <FormRowDB onDBchange={this.onDBchange} value={this.state.db} />
            <FormRowPort onPortChange={this.onPortChange} value={this.state.port} />
            <FormRowSiteName onSiteNameChange={this.onSiteNameChange} value={this.state.site} />
            <FormRowUserName onUsernameChange={this.onUsernameChange} value={this.state.username} />
            <FormRowPassword onPasswordChange={this.onPasswordChange} value={this.state.password} />
            <button type="button" className="btn btn-primary wizard-btn" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

wizardForm.propTypes = {
  // companies: PropTypes.array,
  setupUser: PropTypes.func,
  // history: PropTypes.object
}

wizardForm.defaultProps = {
  // companies: [],
  setupUser: () => { },
  // history: null
}

function mapStateToProps(state) {
  return {
    wizard: state.wizard.wizard
  }
}

function mapDispatchToProps(dispatch) {
  return {
      setupUser: (formData) => dispatch(setupUser(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(wizardForm);
