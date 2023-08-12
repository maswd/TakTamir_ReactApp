import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function TechnicianDash() {
  const name_Device = localStorage.getItem("name_Device");
  const orderid = localStorage.getItem("orderid");
  const [isLinkDisabled, setIsLinkDisabled] = useState(null);

  useEffect(() => {
    // Check if the required values are present in localStorage
    if (name_Device && orderid) {
      setIsLinkDisabled(false);
    } else {
      // Enable the link if any of the values is missing
      setIsLinkDisabled(true);
    }
  }, [name_Device, orderid]);
  const role = useSelector((state) => state.user.role);
  const history = useNavigate();
  useEffect(() => {
    if (role !== "Technician") {
      history("/", { replace: true });
    }
  }, [history]);

  const active = useSelector((state) => state.user.isActive);
  return (
    <div className="container-fluid" style={{ paddingBottom: "90px" }}>
      <Outlet />
      <nav className="navbar shadow-sm fixed-bottom  navbar-light bg-light">
        <div className="mx-auto ">
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
            <li
              className={`nav-item mx-2 text-center ${
                isLinkDisabled ? "disabled-link" : ""
              } `}
            >
              <NavLink
                to={isLinkDisabled ? "write" : "orders"}
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
            <li
              className={`nav-item mx-2 text-center ${
                !active && "disabled-link"
              } `}
            >
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
            <li
              className={`nav-item  mx-2  text-center ${
                !active && "disabled-link"
              } `}
            >
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
      </nav>
    </div>
  );
}

export default TechnicianDash;
