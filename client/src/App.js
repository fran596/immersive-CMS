import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import WizardStyles from './styles/wizard.css'
import HomeStyles from './styles/home.css'

/*App containers */
import LoginContainer from './LoginContainer.js/loginContainer'

import WizardWelcome from './WizardContainer/wizardWelcome'
import WizardForm from './WizardContainer/WizardForm/wizardForm'


import WizardRoute from './WizardContainer/wizardRoutes'
import HomeRoute from './HomeContainer/homeContainer'


import addPageContainer from './HomeContainer/Page/AddPage/addPageContainer'

const App = () => {

    return (
      <div>
        <Switch>
          <Route exact path='/' component={LoginContainer} />
          <HomeRoute />    
          <WizardRoute />
        </Switch>
      </div>
    );
}


export default App