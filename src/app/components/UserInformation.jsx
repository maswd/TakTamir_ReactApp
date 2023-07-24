import React from "react";
import { Link } from "react-router-dom";

function UserInformation() {
  return (
    <>
     <div className="container">
        <div className="row justify-content-center ">
          <div className="col-xl-10 col-lg-12 col-md-9 ">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12  col-lg-6  d-block bg-login-image"></div>
                  <div className="col-12 col-lg-6 ">
                    <div className="px-5 my-lg-5">
                      <div className="text-center ">
                        <h1 className="h4 text-gray-900 mb-4">تکمیل اطلاعات  </h1>
                      </div>
                      <form className="user">
                        <div >
                            <label htmlFor="fullname" className="text-xs">نام و نام خانوادگی</label>
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="fullname"
                            aria-describedby="phoneHelp"
                            placeholder=" نام و نام خانوادگی خود را وارد کنید"
                          />
                        </div>
                        <div >
                        <label htmlFor="fullname" className="text-xs"> کدملی </label>

                          <input
            
                            className="form-control form-control-user"
                            id="number"
                            aria-describedby="phoneHelp"
                            placeholder=" کد ملی خود را وارد کنید"
                          />
                        </div>
                        <div >
                        <label htmlFor="fullname" className="text-xs"> ایمیل</label>
                          <input
                            type="email" 
                            className="form-control form-control-user"
                            id="phone"
                            aria-describedby="phoneHelp"
                            placeholder=" ایمیل خود را وارد کنید"
                          />
                        </div>
                        <div >
                        <label htmlFor="fullname" className="text-xs"> تخصص  </label>
                          <input
                            type="phone"
                            className="form-control form-control-user"
                            id="phone"
                            aria-describedby="phoneHelp"
                            placeholder="تخصص  خود را وارد کنید"
                          />
                        </div>
                        <hr />
                        <Link
                          to="/"
                          className="btn btn-warning btn-user btn-block mb-3"
                        >
                          ثبت اطلاعات
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

export default UserInformation;
