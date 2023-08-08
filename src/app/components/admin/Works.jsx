import React, { useEffect } from "react";
import Pagination from "../common/pagination";
import TableToCards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/actions/jobs";

function Works() {
  const dispatch=useDispatch()
  const jobs =useSelector(state=>state.jobs.jobs)
  useEffect(() => {
    dispatch(getAllJobs())
  }, [])
  
  return (
    <>
      <div className=" card shadow mb-4 p-2">
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
        <div className="py-2">
      <TableToCards jobs={jobs} />
          </div>
      </div>
      <Pagination />
    </>
  );
}

export default Works;
