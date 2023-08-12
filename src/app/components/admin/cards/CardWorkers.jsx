import React from "react";
import { convertToPersianDate } from "../../../../utils/convertor";

const CardWorkers = ({
  firstname,
  lastName,
  specialties,
  phoneNumber,
  isActive,
  create_at,
  statusAccount,
  id,
  handleAdmin,
}) => {
  return (
    <div className="card  bg-transparent border-0 mb-3 col-12  col-lg-6">
      <div
        className={`card-body rounded shadow-sm d-flex justify-content-between border border-left-${
          isActive ? "success" : "danger"
        }`}
      >
        <div className="">
        <p className="card-text">
            {statusAccount === "Account is Verified" ? (
              <p className="text-success"> حساب تایید شده است !</p>
            ) : (
              <p className="text-danger">حساب تایید نشده است !</p>
            )}
          </p>
          <h5 className="card-title">
            {" "}
            نام :{firstname} {lastName}
          </h5>
          <p className="card-text">شماره تماس: {phoneNumber}</p>
          <div className="card-text d-flex flex-wrap g-3 my-2 ">
            تخصص ها:
            {specialties.map((i, index) => (
              <p key={index} className="px-2 mb-2 border-right border-dark ">
                {i.name}
              </p>
            ))}
          </div>
          <p className="card-text">
            تاریخ ثبت نام: {convertToPersianDate(create_at).slice(0, 10)}
          </p>{" "}
         
        </div>

        <div className="d-flex flex-column justify-content-between align-items-end">
          <span className="icon text-gray-300 fa-2x ml-2">
            <i className={`fas ${isActive ? "fa-check" : "fa-times"}`}></i>
          </span>

          <button
            className={`btn py-2 d-flex justify-content-center text-nowrap align-self-center align-items-center rounded text-xs  btn-${
              isActive ? "success" : "danger"
            } `}
          >
            <span> {isActive ? "کار میگیرم" : "کار نمیگیرم"}</span>
          </button>
          <button
            onClick={() => handleAdmin(id)}
            className=" ml-2 btn text-nowrap btn-primary text-xs"
          >
            ارتقاء حساب
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardWorkers;
