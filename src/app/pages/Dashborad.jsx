import React, { useEffect } from "react";
import "../../assets/css/sb-admin-2.css";
import { initMyJQuery, remove } from "../../utils/script";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopNav from "../components/AdminTopNav";
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
        <div id="content">
          <AdminTopNav />
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i class="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashborad;
