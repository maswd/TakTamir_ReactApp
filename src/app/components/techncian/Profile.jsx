import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="  mt-2 ">
        <div className=" col-md-10 col-lg-12 mx-auto mb-4 mb-lg-0">
          <div className="card shadow-lg" style={{ direction: "ltr" }}>
            <div className="row">
              <div className="col-12 col-md-4 ">
                <div
                  className="
                    text-center text-white h-100 relative"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                    background:
                      "linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))",
                  }}
                >
                   <div className="mb-5 d-flex justify-content-start pl-3 pt-3 align-items-center ">
                    <Link to="/" className="mr-3">
                      <div className="shadow-sm border btn-circle text-light ">
                        <i className="fas fa-sign-out-alt "> </i>
                      </div>
                    </Link>
                    <div className="shadow bg-gradient-info btn-circle my-2 ">
                      <i className=" fas fa-info-circle  "> </i>
                    </div>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar"
                    className="img-fluid w-50"
                    
                  />
                 
                  <p className="h5 mt-3">اقای هاشمی</p>
                  <p className="h6 my-3">حساب ذخیره : 2,000,000</p>
                 
                </div>
                
              </div>
              <div className=" col-12 col-md-8 w-50 ">
                <div className="order-0 card-body p-4 w-100">
                  <div className="pb-3 border-bottom">
                    <span> 5 </span>
                    <span className="text-gray-900">: امتیاز شما (از 10)</span>
                  </div>
                  <h6 className="py-3  text-gray-900"> : تخصص ها </h6>
                  <div className="row pt-1" style={{ direction: "rtl" }}>
                    <div className="col-4 mb-3">
                      <p className="text-muted">یخچال</p>
                    </div>
                    <div className="col-4 mb-3">
                      <p className="d-block">تلویزیون</p>
                    </div>
                    <div className="col-4 mb-3">
                      <p className="text-muted">کولر گازی </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex border-top order-1 justify-content-around p-3">
                  <img
                    src="/img/undraw_profile_re_4a55.svg"
                    className="w-50 h-50 "
                    alt=""
                  />
                  <div className="text-right align-self-end">
                    <h5 className="h6 mt-4">
                      <span className="text-gray-900">کد تکنسین :</span> 5565465{" "}
                    </h5>
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

export default Profile;
