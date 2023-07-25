import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className=" mt-2 ">
        <div className=" col-lg-10 mx-auto mb-4 mb-lg-0">
          <div className="card shadow-lg" style={{ direction: "ltr" }}>
            <div className="row">
              <div className="col-12 col-md-4 ">
                <div
                  className="
                    text-center text-white "
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                    background:
                      "linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))",
                  }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar"
                    className="img-fluid my-5 "
                    style={{ width: "80px" }}
                  />
                  <p className="h5">اقای هاشمی</p>
                  <p className="pb-3 ">حساب ذخیره : 2,000,000</p>
                </div>
              </div>
              <div className="col-12 h-50 col-md-8 w-100">
                <div className="card-body p-4 w-100">
                  <div className="mb-3">
                    <span>5</span>{" "}
                    <span className="text-gray-900">: امتیاز شما (از 10)</span>
                  </div>
                  <hr className="mt-0 mb-4" />
                  <h6 className="mb-3 text-gray-900"> : تخصص ها </h6>
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
                  <hr className="mt-3" />
                  <h6 className="mt-4">
                    <span className="text-gray-900">کد تکنسین :</span> 5565465{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <div className="shadow w-100 btn text-light bg-gradient-warning my-2 ">
              <span className="text text-nowrap">قوانین </span>
            </div>
            <Link to="/" className="w-100">
              <div className="shadow w-100 btn text-light bg-gradient-danger ">
                <span className="text text-nowrap">خروج </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
