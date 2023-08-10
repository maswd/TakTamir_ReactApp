import React from "react";
import Slider from "react-slick";
import DynamicSlides from "./Slider";

const CardRequests = ({
  name,
  phoneNumber,
  specialtyDtos,
  fullNameUser,
  orders,
  handleAccept,
  handleReject,
}) => {
  const order = orders.map((i, index) => i.jobs.map((j, jj) => j));

  return (
    <div className="card  bg-transparent border-0 mb-3 col-12 col-md-8 col-lg-5 ">
      <div className="card-body rounded shadow-sm d-flex justify-content-between flex-column flex-wrap border">
        <h5 className="card-title">نام و نام خانوادگی : {fullNameUser}</h5>
        <p className="card-text">شماره تماس: {phoneNumber}</p>
        <p className="border-top my-2 pt-2 text-gray-900 text-lg fw-bolder"> تخصص ها : </p>
        <div className="card-text d-flex flex-wrap g-3 my-2 border-bottom ">
          {specialtyDtos.map((i, index) => (
            <p key={index} className="px-2 mb-2 border-right border-info ">
              {i.name}
            </p>
          ))}
        </div>
        <p className="text-gray-900 pt-2 text-lg fw-bolder">سفارش ها : </p>
        <DynamicSlides
          data={order}
          handleAccept={handleAccept}
          handleReject={handleReject}
        />
      </div>
    </div>
  );
};

export default CardRequests;
