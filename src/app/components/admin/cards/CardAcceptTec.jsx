import React from "react";
import { convertToPersianDate } from "../../../../utils/convertor";

const CardAcceptTec = ({
  name,
  phoneNumber,
  specialties,
  create_at,
  lastName,
  firstname,
  id,
  handleAccept,
  handleReject,
}) => {
  return (
    <div className="card  bg-transparent border-0 mb-3 col-12 col-md-6 col-lg-4 ">
      <div className="card-body rounded shadow-sm d-flex justify-content-between flex-column flex-wrap border">
        <div className="">
          <h5 className="card-title">
            نام و نام خانوادگی : {firstname} {lastName}
          </h5>
          <p className="card-text my-2">شماره تماس: {phoneNumber}</p>
          <div className="card-text d-flex flex-wrap g-3 my-2 ">
            تخصص ها:
            {specialties.map((i, index) => (
              <p key={index} className="px-2 mb-2 border-right border-info ">
                {i.name}
              </p>
            ))}
          </div>
          <p className="card-text">
            تاریخ ثبت نام: {convertToPersianDate(create_at)}
          </p>
        </div>
        <div className="mt-2 text-nowrap align-self-center btn-group mx-auto">
          <button
            className="btn p-2 px-4  btn-danger shadow-sm"
            style={{ borderRadius: "0 .35rem  .35rem 0" }}
            onClick={() => handleReject(id)}
          >
            رد کردن
          </button>
          <button
            className="btn  p-2 px-4 btn-light  shadow-sm border"
            style={{ borderRadius: ".35rem 0  0  .35rem" }}
            onClick={() => handleAccept(id)}
          >
            تایید کردن
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAcceptTec;
