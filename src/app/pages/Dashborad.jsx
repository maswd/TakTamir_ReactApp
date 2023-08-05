import React, { useEffect } from "react";
import { initMyJQuery, remove } from "../../utils/script";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTopNav from "../components/admin/AdminTopNav";
import { Outlet } from "react-router-dom";
function Dashborad() {
  useEffect(() => {
    initMyJQuery();
    return () => {
      remove();
    };
  }, []);

  return (
    <div id="wrapper">
      <AdminSidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div   id="content">
          <AdminTopNav />
          <div className="container-fluid">
            {/* <div className="d-sm-flex align-items-center justify-content-between mb-4"> */}
                <Outlet/>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashborad;
