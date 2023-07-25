import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function TechnicianDash() {
  return (
    <div className="container-fluid " style={{ paddingBottom: "90px" }}>
      <Outlet />
      <nav className="navbar shadow-lg fixed-bottom  navbar-light bg-light">
        <div className="container ">
          <div className="mx-auto">
            <ul className="navbar-nav flex-row ">
              <li className="nav-item mx-2 text-center ">
                <NavLink
                  to="support"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <div>
                    <i className="btn-circle btn-sm  bg-dark circle-1 text-light fa fa-headset text-light"></i>
                  </div>
                  <p className="small"> پشتیبانی</p>
                </NavLink>
              </li>
              <li className="nav-item mx-2 text-center ">
                <NavLink
                  to="write"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <div>
                    <i className="btn-circle btn-sm  bg-dark circle-1 text-light fa fa-pen text-light"></i>
                  </div>
                  <p className="small"> ثبت کار</p>
                </NavLink>
              </li>
              <li className="nav-item mx-2 text-center ">
                <NavLink
                  to="orders"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <div>
                    <i className="btn-circle btn-sm  bg-dark circle-1 text-light fa fa-shopping-cart text-light"></i>
                  </div>
                  <p className="small"> سفارشات</p>
                </NavLink>
              </li>
              <li className="nav-item  mx-2  text-center ">
                <NavLink
                  to="jobs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <div>
                    <i className="btn-circle btn-sm bg-dark circle-1  fa fa-hands-helping  text-light"></i>
                  </div>
                  <p className="small"> گرفتن کار</p>
                </NavLink>
              </li>

              <li className="nav-item mx-2  text-center ">
                <NavLink
                  to=""
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <div>
                    <i className="btn-circle btn-sm  bg-dark circle-1 fa fa-user text-light"></i>
                  </div>
                  <p className="small">پروفایل</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TechnicianDash;
