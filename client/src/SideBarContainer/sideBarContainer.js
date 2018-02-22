import React from 'react'

const SideBarContainer = () => (
  
    <div className="sidebar bg-dark">
      <ul className="list-unstyled">
        <li><a href="#"><i className="fa fa-fw fa-tachometer" /> Dashboard</a></li>
        <li><a href="#"><i className="fa fa-fw fa-plus" /> Add Pages</a></li>
        {/* <li><a href="#"><i className="fa fa-fw fa-file" /> Manage Pages</a></li> */}
        <li>
          <a href="#submenu1" data-toggle="collapse"><i className="fa fa-fw fa-file" /> Manage Pages</a>
          <ul id="submenu1" className="list-unstyled collapse">
            <li><a href="#">Submenu Item</a></li>
            <li><a href="#">Submenu Item</a></li>
            <li><a href="#">Submenu Item</a></li>
          </ul>
        </li>
        <li>
          <a href="#submenu2" data-toggle="collapse"><i className="fa fa-fw fa-address-card" /> Dropdown Link 2</a>
          <ul id="submenu2" className="list-unstyled collapse">
            <li><a href="#">Submenu Item</a></li>
            <li><a href="#">Submenu Item</a></li>
            <li><a href="#">Submenu Item</a></li>
          </ul>
        </li>
        <li><a href="#"><i className="fa fa-fw fa-link" /> Sidebar Link</a></li>
      </ul>
    </div>

)


export default SideBarContainer;