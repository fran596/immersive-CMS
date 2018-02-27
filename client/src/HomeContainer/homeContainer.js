import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import DashboardContainer from './dashboardContainer'
import AddPageContainer from './Page/AddPage/addPageContainer'
import ManagePageContainer from './Page/ManagePage/managePageContainer'
import HeaderContainer from '../HeaderContainer/headerContainer'
import SideBarContainer from '../SideBarContainer/sideBarContainer'

const HomeContainer = () => (
  <div>
    <HeaderContainer />
    <div className="d-flex align-items-stretch">
      <SideBarContainer />
      <ToastContainer />
      <Switch>
        <Route path='/home' component={DashboardContainer} />
        <Route path='/add' component={AddPageContainer} />
        <Route path='/manage' component={ManagePageContainer} />
      </Switch>
    </div>
  </div>
)


export default HomeContainer;