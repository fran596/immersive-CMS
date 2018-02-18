
import React from 'react'
import Link from 'valuelink'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setupUser } from '../Actions/Creators/actionCreators'

/*Form containers */
import FormRowDB from './formRowDB'
import FormRowPort from './formRowPort'
import FormRowSiteName from './formRowSiteName'
import FormRowUserName from './formRowUsername'
import FormRowPassword from './formRowPassword'


/* Validation regex for the port input */
var numberRegexPattern = new RegExp('^[0-9]+$');

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
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onUsernameChange(ev) {
    this.setState({ username: ev.target.value })
  }

  onPasswordChange(ev) {
    this.setState({ password: ev.target.value })
  }

  handleSubmit() {
    console.log(this.state);
    // this.props.setupUser(this.state);
  }



  render() {

    const dbNameLink = Link.state(this, 'db')
      .check(x => x, 'Database name is required')
      .check(x => x.indexOf(' ') < 0, "The database name shouldn't contain spaces");

    const portLink = Link.state(this, 'port')
      .check(x => x.match(numberRegexPattern), 'The port must be a number')

    const siteNameLink = Link.state(this, 'site')
      .check(x => x, "A site name is required")

    const usernameLink = Link.state(this, 'username')
      .check(x => x, "A username is required")

    const passwordLink = Link.state(this, 'password')
      .check(x => x, "A password is required")

    return (
      <div className="row wizard-container mx-auto">
        <div className="col-sm-12 ">
          <p className="text-center">Please enter the information below to proceed</p>
          <form className=" wizard-form " autoComplete="on">
            <FormRowDB valueLink={dbNameLink} />
            <FormRowPort valueLink={portLink} />
            <FormRowSiteName valueLink={siteNameLink} />
            <FormRowUserName valueLink={usernameLink} />
            <FormRowPassword valueLink={passwordLink} />
            <button
              type="button" 
              disabled={dbNameLink.error || portLink.error || siteNameLink.error || usernameLink.error || passwordLink.error} 
              className="btn btn-primary wizard-btn"
              onClick={this.handleSubmit}
            >Submit
            </button>
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
