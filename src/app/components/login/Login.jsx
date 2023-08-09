import React, { useContext } from "react";
import { context } from "../../context/context";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

function Login() {
  const LoginContext = useContext(context);
  const { phone, setPhone, handleLogin, validator } =
    LoginContext;
    const form =useSelector(state=>state.form)
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-xl-10 col-lg-12 col-md-9 ">
            <div className="card o-hidden border-0 my-2">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12  col-lg-6  d-block bg-login-image"></div>
                  <div className="col-12 col-lg-6 ">
                    <div className="p-3 my-lg-5">
                      <div className=" pb-lg-5">
                        <h1 className="h4 text-gray-900 text-center mb-4">
                          خوش آمدید
                        </h1>
                        <p className="text-gray-900">ورود / ثبت نام </p>
                      </div>
                      <form className="user mt-3" onSubmit={handleLogin}>
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

                        <button
                          type="submit"
                          className="btn btn-warning btn-user btn-block shadow-sm"
                          disabled={form.isSubmitting}
                        >
                          ورود
                        </button>
                      </form>
                      <hr />

                      <p className="text-xs fw-bold color-700 mt-4">
                        ورود شما به معنای پذیرش
                        <Link
                          className="mx-1 d-inline-block text-primray-700"
                          href="/page/terms/"
                        >
                          شرایط 
                        </Link>
                        و
                        <Link
                          className="mx-1 d-inline-block color-secondary-700"
                          href="/page/privacy/"
                        >
                          قوانین 
                        </Link>
                        تک تعمیر 
                        است.
                      </p>
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
