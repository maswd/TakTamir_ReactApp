import React, { useEffect } from "react";
import Pagination from "../common/Pagination";
import CardWorkers from "./cards/CardWorkers";
import { useDispatch, useSelector } from "react-redux";
import { getAllTechncian } from "../../redux/actions/admin";
function Workers() {
  const users = useSelector((state) => state.admin.users);
  const pagination = useSelector((state) => state.admin.pagination);
  const dispatch = useDispatch(1);
  useEffect(() => {
    dispatch(getAllTechncian(1));
  }, [dispatch]);
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
        dispatch(getAllJobs(page));
      }
    }
  return (
    <>
      <div className=" card shadow mb-4 p-2">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">وضعیت تکنسین ها</h6>
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
          <div className="d-flex flex-wrap">
            {users.map((item, index) => (
              <CardWorkers key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Pagination totalItems={pagination?.totalPages}
        pageSize={10}
        onPageChange={onPageChange} />
    </>
  );
}

export default Workers;
