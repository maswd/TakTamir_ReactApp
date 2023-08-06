import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequsets } from "../../redux/actions/admin";
import { useEffect } from "react";
import Pagination from "../common/pagination";
import RecC from "./ReqC";
const Requests = () => {
  const requests = useSelector((state) => state.admin.requests);
  console.log("requests", requests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRequsets());
  }, [dispatch]);

  return (
    <>
      <div className=" card shadow mb-4 p-2">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            درخواست تکنسین ها برای کار
          </h6>{" "}
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
       <div className="py-2">  <RecC /></div>
      </div>

      <Pagination />
    </>
  );
};

export default Requests;
