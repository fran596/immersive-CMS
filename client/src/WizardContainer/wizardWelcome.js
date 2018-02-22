import { Link } from 'react-router-dom'
import React from 'react'

const wizardWelcome = () => (
  <div>
    <div className="row" align="center">
      <div className="col-md-12 ">
        <h1 className="wizard-header">CMS WIZARD</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p>Welcome to the CMS wizard</p>
        <p>For starters, you will need the following to create a CMS:</p>
        <div className="btn btn-success"><Link to="/setup">Next</Link></div>
      </div>
    </div>
  </div>
)

export default wizardWelcome;