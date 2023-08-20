import React, { useEffect } from "react";
import CardCompleted from "./cards/CardCompleted";
import { useDispatch, useSelector } from "react-redux";
import { getCompeletedOrders } from "../../redux/actions/admin";
import Pagination from "../common/Pagination";
import { errorMessage, successMessage } from "../../../utils/message";
import { paymentService } from "../../services/adminService";

const Money = () => {
  const dispatch = useDispatch();
  const works = useSelector((state) => state.admin.works);
  const pagination = useSelector((state) => state.admin.pagination);
  useEffect(() => {
    dispatch(getCompeletedOrders(1));
  }, []);
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
      dispatch(getCompeletedOrders(page));
    }
  };
  const handleConfirm = async (itemId, userId, taxPercentage) => {
    try {
      const { status } = await paymentService(itemId, userId, taxPercentage);
      if (status === 200) {
        dispatch(getCompeletedOrders(1));
        successMessage("تسویه انجام شد !");
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !");
    }
  };

  return (
    <>
      <div className=" card shadow mb-4 p-2">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">وضعیت مالی</h6>
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
            {works.map((item, index) =>
              item.orders.length !== 0 ? (
                <CardCompleted key={index} {...item} handle={handleConfirm} />
              ) : (
                <div key={index} className="alert alert-secondary w-100" role="alert">
                  <i className="fa fa-exclamation-triangle ml-2"></i>
                  اطلاعاتی وجود ندارد !
                </div>
              )
            )}
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

export default Money;
