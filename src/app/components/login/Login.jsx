import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-xl-10 col-lg-12 col-md-9 ">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                <div  className="col-12  col-lg-6  d-block bg-login-image"></div>
                  <div className="col-12 col-lg-6 ">
                    <div className="p-5 my-lg-5">
                      <div className="text-center pb-lg-5">
                        <h1 className="h4 text-gray-900 mb-4">خوش آمدید</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="phone"
                            className="form-control form-control-user"
                            id="phone"
                            aria-describedby="phoneHelp"
                            placeholder="شماره تلفن خود را وارد کنید"
                          />
                        </div>
                        <hr />
                        <Link
                          to="/confirm"
                          className="btn btn-warning btn-user btn-block"
                        >
                          ورود
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
