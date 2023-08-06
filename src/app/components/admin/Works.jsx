import React from "react";
import Pagination from "../common/pagination";
import TableToCards from "./Cards";

function Works() {
  return (
    <>
      <div className=" card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">وضعیت کار ها </h6>
        </div>
        <div className="">
          <div className="col-sm-12 col-md-6">
              <label>
                جستجو:
                <input
                  type="search"
                  className="form-control form-control-sm mr-1"
                  placeholder=""
                  aria-controls="dataTable"
                />
              </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <TableToCards />
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
}

export default Works;
