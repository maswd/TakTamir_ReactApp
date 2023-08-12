import Request from "../common/Request";
import logo from "/img/logo.png";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div data-aos="fade-down" id="header">
      <section className="nav headerone__section right">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light navbar-light forPadding">
                <div className="navbar-brand">
                  <img src={logo} alt="logo" />
                </div>
                <div className="d-flex d-lg-none">
                  <Request text={"d-flex"} stylesRe link={"/request"} />
                  <button
                    className="navbar-toggler navbar-toggler-right"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <div className="icon-open"></div>
                  </button>
                </div>
                <div className="collapse  navbar-collapse" id="navbar">
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
