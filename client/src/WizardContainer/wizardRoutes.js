import React from 'react'
import { Route, Switch } from 'react-router-dom'

import WizardWelcome from './wizardWelcome'
import WizardForm from './WizardForm/wizardForm'

const wizardRoutes = () => (
  <div>
    <Switch>
      <Route path='/welcome' component={WizardWelcome} />
      <Route path='/setup' component={WizardForm} />
    </Switch>
  </div>
)



export default wizardRoutes;