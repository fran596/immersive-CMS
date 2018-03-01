import { Link } from 'react-router-dom'
import { Card, Button, Icon } from 'antd';
import React from 'react'

const wizardWelcome = () => (
  <div>
    <div className="row center" >
      <div className="col-md-12 ">
        <Card
          title="CMS WIZARD" 
          extra={<Link to="/setup"> <Button type="primary"> Next<Icon type="right" /> </Button>  </Link>}
        >
          <p>Welcome to the CMS wizard</p>
          <p>For starters, you will need the following to create a CMS:</p>
          <ul>
            <li>NodeJS</li>
            <li>NPM or Yarn</li>
            <li>MongoDB</li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
  
)



         

         

export default wizardWelcome;