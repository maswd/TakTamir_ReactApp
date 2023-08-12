import React, { useEffect } from "react";
import Pagination from "../common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import CardWorks from './cards/CardWorks'
import { getAllWorks } from "../../redux/actions/admin";
function Works() {
  const dispatch = useDispatch();
  const works = useSelector((state) => state.admin.works);
  const pagination = useSelector((state) => state.admin.pagination);
  useEffect(() => {
    dispatch(getAllWorks(1));
  }, []);
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
      dispatch(getAllJobs(page));
    }
  };

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
          <div className="d-flex flex-wrap mx-auto">
            {works.map((item, index) => (
              <CardWorks key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Pagination
        totalItems={pagination?.totalPages}
        pageSize={10}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default Works;
