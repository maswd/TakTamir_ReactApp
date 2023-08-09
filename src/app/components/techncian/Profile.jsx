import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { activeService, getProfile } from "../../services/userService";
import Swal from "sweetalert2";
import { addUser } from "../../redux/actions/user";
import profile from '/img/user.jpg'
function Profile() {
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("access_token");
  const dispatch = useDispatch();
  const handleActive = async (e) => {
    const result = await Swal.fire({
      title: "!",
      text: "ایا مطمئن هستید ؟",
      showCancelButton: true,
      confirmButtonText: "بله ",
      cancelButtonText: "لغو",
    });
    if (result.isConfirmed) {
      const { status } = await activeService({ isActive: e });
      console.log(status)
      if (status === 200) {
        const {data,status} = await getProfile(token);
        if (status === 200) {
          dispatch(addUser(data));
        }
      }
    }
  };
  return (
    <>
      <div className="mt-2 ">
        <div className=" col-md-10 col-lg-12 mx-auto mb-4 mb-lg-0">
          <div className="card shadow-lg" style={{ direction: "ltr" }}>
            <form>
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
                    <div className="mb-5 d-flex justify-content-between px-3 pt-3 align-items-center ">
                      <div className="">
                        <Link to="/logout" className="mr-3">
                          <div className="shadow-sm border btn-circle text-light ">
                            <i className="fas fa-sign-out-alt "> </i>
                          </div>
                        </Link>
                        <div className="shadow bg-gradient-info btn-circle my-2 ">
                          <i className=" fas fa-info-circle  "> </i>
                        </div>
                      </div>
                      <BootstrapSwitchButton
                        size="sm"
                        checked={user.isActive}
                        onstyle="info"
                        onlabel="کارمیگیرم"
                        offlabel="کارنمیگیرم"
                        style="rounded-pill"
                        width={120}
                        onChange={(e) => handleActive(e)}
                      />
                    </div>
                    <img
                      src={profile}
                      alt="avatar"
                      className="img-fluid w-50 rounded-circle"
                    />

                    <div className="h5 mt-3">
                      <>
                        {user?.firstname} {user?.lastName}
                      </>
                    </div>
                    <p className="h6 my-3">
                      حساب ذخیره : {user?.wallet?.balance}
                    </p>
                  </div>
                </div>
                <div className=" col-12 col-md-8 w-50 ">
                  <div className="order-0 card-body p-4 w-100">
                    <div className="pb-3 border-bottom">
                      <span> 5 </span>
                      <span className="text-gray-900">
                        : امتیاز شما (از 10)
                      </span>
                    </div>
                    <h6 className="py-3  text-gray-900"> : تخصص ها </h6>
                    <div className="row pt-1 " style={{ direction: "rtl" }}>
                      {user?.specialties?.map((item, index) => (
                        <div className="col-4 mb-3" key={index}>
                          <p className="text-muted border-left-warning p-2">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex border-top order-1 justify-content-around p-3">
                    <div className="text-left align-self-end">
                      <h5 className="h6 mt-4">
                        <span className="text-gray-900">کد تکنسین :</span>{" "}
                        {user?.id}
                      </h5>
                    </div>
                    <img
                      src="/img/undraw_profile_re_4a55.svg"
                      className="w-50 my-3"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
