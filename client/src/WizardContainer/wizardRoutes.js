import React from 'react'
import { Route } from 'react-router-dom'

import WizardWelcome from './wizardWelcome'
import WizardForm from './WizardForm/wizardForm'

const wizardRoutes = () => (
  <div>
    <Route exact path='/welcome' component={WizardWelcome} />
    <Route exact path='/setup' component={WizardForm} />
  </div>
)



export default wizardRoutes;