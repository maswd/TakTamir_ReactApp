import logo from "/image 1.svg"
import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <div data-aos="fade-down"  id="header">
            <section className="nav headerone__section right" >
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light navbar-light forPadding" >
                                <div className="navbar-brand"><img src={logo} alt="logo" /></div>
                                <button className="navbar-toggler navbar-toggler-right" data-toggle="collapse"
                                    data-target="#navbar" aria-controls="navbar" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <div className="icon-open"></div>
                                </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav nav-right">
                                        <li className="nav-item active"><a className="nav-link" href="#"
                                        >صفحه اصلی</a></li>
                                        <li className="nav-item active"><a className="nav-link" href="#"
                                        >درباره ما</a></li>
                                        <li className="nav-item active"><a className="nav-link" href="#"
                                        >تماس با ما</a></li>
                                        <li className="nav-item active">
                                            <div className=" " >
                                                <NavLink  className="nav-link"  to="/login" >ورود به حساب </NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item active">
                                            <div className=" " >
                                                <NavLink  className="nav-link"  to="/dashboard" >داشبورد ادمین   </NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item active">
                                            <div className=" " >
                                                <NavLink  className="nav-link"  to="/technician" >داشبورد تکنسین   </NavLink>
                                            </div>
                                        </li>

                                    </ul>
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