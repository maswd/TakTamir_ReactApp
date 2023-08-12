import React, { useEffect } from "react";
import { initMyJQuery, remove } from "../../utils/script";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTopNav from "../components/admin/AdminTopNav";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Dashborad() {
  const role = useSelector((state) => state.user.role);
  const history = useNavigate();
  useEffect(() => {
    if (role !== "Admin") {
      history("/", { replace: true });
    }
    initMyJQuery();
    return () => {
      remove();
    };
  }, [history]);

  return (
    <div id="wrapper">
      <AdminSidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <AdminTopNav />
          <div className="container-fluid">
            {/* <div className="d-sm-flex align-items-center justify-content-between mb-4"> */}
            <Outlet />
            {/* </div> */}
            <div className="tem2-tag text-nowrap text-xs text-center">
              ساخته شده توسط سافت کد
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashborad;
