import { useEffect, useState } from "react";
import Request from "../common/Request";
import logo from "/img/landin.png";
import { NavLink } from "react-router-dom";
function Header() {
  const [isSidebarToggled, setIsSidebarToggled] = useState(true);

  const handleToggle = () => {
      setIsSidebarToggled(!isSidebarToggled);
    
  };
  return (
    <div data-aos="fade-down" id="header">
      <section className="nav headerone__section right">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light navbar-light ">
                <div className="navbar-brand">
                  <img src={logo} alt="logo" />
                </div>
                <div className="d-flex d-lg-none">
                  <Request text={"d-flex"} stylesRe link={"/request"} />
                  <button
                    className={`navbar-toggler navbar-toggler-right }`}
                    onClick={handleToggle}
                  >
                    <div
                      className={`${
                        !isSidebarToggled
                          ? "icon-close animated--grow-in"
                          : "icon-open animated--fade-in"
                      }`}
                    >
                      {" "}
                    </div>
                  </button>
                </div>
                <div
                  className={`collapse  navbar-collapse animated--grow-in  ${
                    !isSidebarToggled ? "show" : " animated--fade-in"
                  }`}
                  id="navbar"
                >
                  <ul className="navbar-nav nav-right">
                    <li className="nav-item active">
                      <div className=" ">
                        <NavLink className="nav-link" to="/login">
                          ورود / ثبت نام
                        </NavLink>
                      </div>
                    </li>
                    <li className="nav-item active">
                      <a href="#features" type="button" className="nav-link">
                        درباره ما
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a href="#footer" type="button" className="nav-link">
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-none d-lg-block">
                  <Request text={"d-none mr-5"} link={"/request"} stylesRe />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
