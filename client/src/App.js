import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './styles/wizard.css'


/*App containers */
import WizardContainer from './WizardContainer/wizardContainer'

const App = () => {

    return (
      <div className="container-fluid" >
        <Switch>
          <Route exact path='/' component={WizardContainer} />
        </Switch>
      </div>
    );
}


export default App