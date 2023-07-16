import React from "react";
import logo from "../../assets/image 1.svg";
import { NavLink } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div className="main-menu ">
      <ul
        className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <img src={logo} alt="" />
          </div>
          <div className="sidebar-brand-text mx-3">پنل ادمین</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          end 
          to="/dashboard"
          >
            <i className="fas fa-fw fa-id-card"></i>
            <span>تکنسین ها </span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            to="works"
          >
            <i className="fas fa-briefcase"></i>
            <span>کار ها </span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="messages" className="nav-link">
            <i className="fas fa-fw fa-envelope"></i>
            <span>پیام ها</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">
                Colors
              </a>
              <a className="collapse-item" href="utilities-border.html">
                Borders
              </a>
              <a className="collapse-item" href="utilities-animation.html">
                Animations
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Other
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
        <div className="text-center">
          <button className="rounded-circle border-0  bg-gradient-warning logout">
            <i className="fa fa-power-off fa-sm fa-fw text-white"></i>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default AdminSidebar;
