import React from 'react'
import PropTypes from 'prop-types'
import FormRow from './formRow'

const wizardFormContent = (props) => (
  <div>
    <p className="text-center">Please enter the information below to proceed</p>
    <form className=" wizard-form " autoComplete="on">
      <FormRow
        label="Database Name"
        name="dbName"
        type="text"
        value={props.state.db}
        text="The name of the database you want to use for your CMS"
        onInputChange={props.onInputChange}
      />
      <FormRow
        label="Site name"
        name="siteName"
        type="text"
        value={props.state.site}
        text="The name of the site you want to use for your CMS"
        onInputChange={props.onInputChange}
      />
      <FormRow
        label="Username"
        name="username"
        type="text"
        value={props.state.username}
        text="Your CMS username"
        onInputChange={props.onInputChange}
      />
      <FormRow
        label="Password"
        name="password"
        type="password"
        value={props.state.password}
        text="Your CMS password"
        onInputChange={props.onInputChange}
      />
    </form>  
  </div>
)

export default wizardFormContent