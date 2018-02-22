import React from 'react'
import { Route } from 'react-router-dom'

import HomeContainer from './homeContainer'
import HeaderContainer from '../HeaderContainer/headerContainer'
import SideBarContainer from '../SideBarContainer/sideBarContainer'

const homeRoutes = () => (
  <div>
    <Route exact path='/home' component={HomeContainer} />
  </div>
)



export default homeRoutes;