import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';

/*CSS Styling */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import 'antd/dist/antd.css';
import './styles/wizard.css'
import './styles/home.css'
import './styles/page.css'



/*App containers */
import LoginContainer from './LoginContainer.js/loginContainer'
import WizardWelcome from './WizardContainer/wizardWelcome'
import WizardForm from './WizardContainer/WizardForm/wizardForm'
import HomeRoute from './HomeContainer/homeContainer'
import TemplateView from './Templates/pageTemplateContainer'



const App = () => {
    return (
      <div>
        <ToastContainer />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LoginContainer} />
            <Route path="/template" component={TemplateView} />
            <Route path='/welcome' component={WizardWelcome} />
            <Route path='/setup' component={WizardForm} />
            <HomeRoute />    
          </Switch>
        </BrowserRouter>
      </div>
    );
}


export default App