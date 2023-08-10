import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/actions/admin";
import Pagination from "../common/Pagination";
import CardAcceptTec from "./cards/CardAcceptTec";
import { confirmMessage, errorMessage, successMessage } from "../../../utils/message";
import { RejectAccountUserService, VerifyAccountUserService } from "../../services/adminService";
const AcceptTec = () => {
  const user = useSelector((state) => state.admin.users);
  const admin = useSelector((state) => state.admin);
  console.log(user);
  const dispatch = useDispatch(1);
  useEffect(() => {
    dispatch(getAllUser(1));
  }, [dispatch]);
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
      try {
        setLoading(true);
        dispatch(getAllJobs(page));
        // در اینجا منتظر بمانید تا درخواست جدید تکمیل شود
        setLoading(false);
      } catch (error) {
        // اگر خطا رخ دهد، می‌توانید اقدامات لازم را انجام دهید
        setLoading(false);
        console.error(error);
      }
    }
  };
  const handleAccept = async (id) => {
    console.log(id)
    try {
      const result = await confirmMessage();
      console.log(result);
      if (result) {
        const { status } = await VerifyAccountUserService(id);
        console.log(status)
        if (status === 200) {
          console.log("کابرب ساخت")
          successMessage("حساب کاربر با موفقیت تایید شد !")
          dispatch(getAllUser(1));
        }
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !")
      console.log(error)
    }
  };
  const handleReject = async (id) => {
    try {
      const result = await confirmMessage();
      console.log(result);
      if (result) {
        const { status } = await RejectAccountUserService(id);
        if (status === 200) {
          console.log("کابرب پاک")
          successMessage("حساب کاربر باموفقیت رد شد !")
          dispatch(getAllUser(1));
        }
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !")
      console.log(error)
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
        totalItems={admin?.pagination?.totalPages}
        pageSize={10}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default AcceptTec;
