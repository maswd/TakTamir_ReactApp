import React from "react";

const CardRequests = ({ name, phoneNumber, specialties, status }) => {
  return (
    <div className="card  bg-transparent border-0 mb-3 col-12 col-md-6 col-lg-4 ">
      <div className="card-body rounded shadow-sm d-flex justify-content-between flex-column flex-wrap border">
        <div className="">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">شماره تماس: {phoneNumber}</p>
          <p className="card-text">تخصص ها: {specialties}</p>
        </div>
        <div className="mt-2 text-nowrap align-self-center btn-group mx-auto">
          <button
            className="btn p-2 px-4  btn-danger shadow-sm"
            style={{ borderRadius: "0 .35rem  .35rem 0" }}
          >
            رد کردن
          </button>
          <button
            className="btn  p-2 px-4 btn-light  shadow-sm border"
            style={{ borderRadius: ".35rem 0  0  .35rem" }}
          >
            تایید کردن
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRequests;
