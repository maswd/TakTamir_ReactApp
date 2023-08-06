import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/actions/admin";
import Acepts from "./Acepts";
import Pagination from "../common/pagination";
const AcceptTec = () => {
  const user = useSelector((state) => state.admin.users);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <>
      <div className=" card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            تایید حساب تکنسین ها
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
        <div className="row">
          <div className="col-sm-12">
            <Acepts />
          </div>
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default AcceptTec;
