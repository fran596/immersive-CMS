import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

import { ToastContainer, toast } from 'react-toastify';

import WizardStyles from './styles/wizard.css'
import HomeStyles from './styles/home.css'
import PageStyles from './styles/page.css'



/*App containers */
import LoginContainer from './LoginContainer.js/loginContainer'

import WizardWelcome from './WizardContainer/wizardWelcome'
import WizardForm from './WizardContainer/WizardForm/wizardForm'


import WizardRoute from './WizardContainer/wizardRoutes'

import HomeRoute from './HomeContainer/homeContainer'

import TemplateView from './Templates/pageTemplateContainer'

import addPageContainer from './HomeContainer/Page/AddPage/addPageContainer'

const App = () => {

    return (
      <div>
        <ToastContainer />
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginContainer} />
          <Route exact path="/template" component={TemplateView} />
          <Route path='/welcome' component={WizardWelcome} />
          <Route path='/setup' component={WizardForm} />
          <HomeRoute />    
          {/* <WizardRoute /> */}
        </Switch>
        </BrowserRouter>
      </div>
    );
}


export default App