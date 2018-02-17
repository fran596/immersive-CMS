import { Link } from 'react-router-dom'
import React from 'react'

const wizardWelcome = () => (
  <div className="row">
    <div className="col-md-12">
      <p>Welcome to the CMS wizard</p>
      <p>For starters, you will need the following to create a CMS:</p>
      <div className="btn btn-success"><Link to="/form">Next</Link></div>
    </div>
  </div>
)

export default wizardWelcome;