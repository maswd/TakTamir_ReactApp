import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/actions/admin";
import Pagination from "../common/Pagination";
import CardAcceptTec from "./cards/CardAcceptTec";
import { confirmMessage, errorMessage, successMessage } from "../../../utils/message";
import { RejectAccountUserService, VerifyAccountUserService } from "../../services/adminService";
const AcceptTec = () => {
  const user = useSelector((state) => state.admin.users);
  const pagination = useSelector((state) => state.admin.pagination);
  const dispatch = useDispatch(1);
  useEffect(() => {
    dispatch(getAllUser(1));
  }, [dispatch]);
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
        dispatch(getAllJobs(page));
    }
  };
  const handleAccept = async (id) => {
    try {
      const result = await confirmMessage("آیا برای تایید کردن مطمئن هستید ؟");
      if (result) {
        const { status } = await VerifyAccountUserService(id);
        if (status === 200) {
          successMessage("حساب کاربر با موفقیت تایید شد !")
          dispatch(getAllUser(1));
        }
      }
    } catch (error) {
      if(error.response){
        errorMessage("مشکلی رخ داده است !")
      }
    }
  };
  const handleReject = async (id) => {
    try {
      const result = await confirmMessage("آیا برای رد کردن مطمئن هستید ؟");
      if (result) {
        const { status } = await RejectAccountUserService(id);
        if (status === 200) {
          successMessage("حساب کاربر باموفقیت رد شد !")
          dispatch(getAllUser(1));
        }
      }
    } catch (error) {
      if(error.response){
        errorMessage("مشکلی رخ داده است !")
      }
    }
  };
  return (
    <>
      <div className=" card shadow mb-4 p-2">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            تایید حساب تکنسین ها
          </h6>
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
          {user.length === 0 && (
               <div className="alert alert-secondary w-100" role="alert">
               <i className="fa fa-exclamation-triangle ml-2"></i>
               اطلاعاتی وجود ندارد !
             </div>
            )}
            {user.map((item, index) => (
              <CardAcceptTec
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

export default AcceptTec;
