import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DashboardContainer from './dashboardContainer'
import HeaderContainer from '../HeaderContainer/headerContainer'
import SideBarContainer from '../SideBarContainer/sideBarContainer'

const HomeContainer = () => (
  <div>
    <HeaderContainer />
    <div className="d-flex align-items-stretch">
      <SideBarContainer />
      <Switch>
        <Route path='/home' component={DashboardContainer} />
      </Switch>
    </div>
  </div>
)


export default HomeContainer;