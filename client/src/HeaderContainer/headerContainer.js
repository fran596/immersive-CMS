import React from 'react'

const HeaderContainer = () => (
  <nav className="navbar navbar-expand navbar-dark bg-primary">
    <a className="sidebar-toggle text-light mr-3"><i className="fa fa-bars" /></a>

    <a className="navbar-brand" href="#"><i className="fa fa-code-branch" /> Navbar</a>

    <div className="navbar-collapse collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
            <i className="fa fa-user" /> Username
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

)


export default HeaderContainer;