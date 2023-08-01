import React from "react";
import logo from "/image 1.svg";
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
        <li className="nav-item ">
          <NavLink to="accept" className="nav-link">
            <i className="fa fa-check "></i>
            <span> تایید تکنسین </span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="requests" className="nav-link">
            <i className="fas fa-hand-paper"></i>
            <span> درخواست ها  </span>
          </NavLink>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
        <div className="text-center">
          <NavLink to="/logout" className="rounded-circle border-0 btn  bg-gradient-warning logout">
            <i className="fa fa-power-off  text-white"></i>
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default AdminSidebar;
