import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequsets } from "../../redux/actions/admin";
import { useEffect } from "react";
import Pagination from "../common/Pagination";
import CardRequests from "./cards/CardRequests";

import {
  confirmMessage,
  errorMessage,
  successMessage,
} from "../../../utils/message";
import {
  WorkConfirmationService,
  WorkRejectService,
} from "../../services/adminService";

const Requests = () => {
  const requests = useSelector((state) => state.admin.requests);
  const pagination = useSelector((state) => state.admin.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRequsets(1));
  }, [dispatch]);

  const handleAccept = async (id) => {
    console.log(id)
    try {
      const result = await confirmMessage("آیا برای تایید کردن مطمئن هستید ؟");
      if (result) {
        const { status } = await WorkConfirmationService(id);
        if (status === 200) {
          dispatch(getAllRequsets(1));
          successMessage(" کار تکنسین با موفقیت تایید شد !");
        }
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !");
      console.log(error);
    }
  };
  const handleReject = async (id) => {
    try {
      const result = await confirmMessage("آیا برای رد کردن مطمئن هستید ؟");
      if (result) {
        const { status } = await WorkRejectService(id);
        if (status === 200) {
          dispatch(getAllRequsets(1));
          successMessage("کار با موفیقت رد شد  !");
        }
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !");
      console.log(error);
    }
  };
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
      dispatch(getAllRequsets(page));
    }
  };
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
        <div className="py-2">
          <div className="d-flex flex-wrap">
            {requests.map((item, index) => (
              <CardRequests
                key={index}
                {...item}
                handleAccept={handleAccept}
                handleReject={handleReject}
              />
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
};

export default Requests;
