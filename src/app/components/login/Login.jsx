import React, { useContext } from "react";
import { context } from "../../context/context";

function Login() {
  const LoginContext = useContext(context);
  const { phone, setPhone, handleLogin,validator,formSubmitted } = LoginContext;
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-xl-10 col-lg-12 col-md-9 ">
            <div className="card o-hidden border-0 shadow-lg my-2">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12  col-lg-6  d-block bg-login-image"></div>
                  <div className="col-12 col-lg-6 ">
                    <div className="p-5 my-lg-5">
                      <div className="text-center pb-lg-5">
                        <h1 className="h4 text-gray-900 mb-4">خوش آمدید</h1>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input
                            type="phone"
                            className="form-control form-control-user mb-2"
                            id="phone"
                            aria-describedby="phoneHelp"
                            placeholder="شماره تلفن خود را همراه با صفر وارد کنید"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              validator.current.showMessageFor("phone");
                            }}
                          />
                          {validator.current.message(
                            "phone",
                            phone,
                            "required|regex:09|numeric|min:11|max:11"
                          )}
                        </div>
                        
                        <hr />
                        <button
                          type="submit"
                          className="btn btn-warning btn-user btn-block shadow-sm"
                          disabled={formSubmitted}
                        >
                          ورود
                        </button>
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
