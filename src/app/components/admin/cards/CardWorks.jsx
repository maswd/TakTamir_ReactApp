import React from "react";
import { getStatusText, getStatusClass } from "../../../../utils/convertor";
import { useState } from "react";
import DynamicSlides from "./Slider";
const CardWorks = ({ fullNameUser, phoneNumber, orders, specialtyDtos }) => {
  let order = orders.map((i) => i);
  let jobs = orders.map((i) => i.jobs.map((x) => x));

  return (
    <div
      className={`card   bg-transparent border-0 mb-3 col-12 col-md-8 col-lg-6`}
    >
      <div
        className={`card-body rounded-top shadow-sm border border-${getStatusClass()}`}
      >
        <h5 className="card-title">نام تکنسین : {fullNameUser}</h5>
        <h5 className="card-title">شماره تکنسین : {phoneNumber}</h5>
        <p className="border-top mt-2 pt-2 text-gray-900 text-lg fw-bolder">
          تخصص ها :
        </p>
        <div className="card-text d-flex flex-wrap g-3 border-bottom ">
          {specialtyDtos.map((i, index) => (
            <p key={index} className="px-2 mb-2 border-right border-info ">
              {i.name}
            </p>
          ))}
        </div>
        <p className="text-gray-900 pt-2 text-lg fw-bolder">سفارش ها : </p>
      <DynamicSlides data={order} />
      </div>

    </div>
  );
};

export default CardWorks;
