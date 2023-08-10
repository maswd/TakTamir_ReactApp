import React from "react";
import { getStatusText } from "../../../../utils/convertor";
import { useState } from "react";

const CardWorks = ({
  fullNameUser,
  phoneNumber,
  orders,
}) => {
  const getStatusClass = (statusJob) => {
    switch (statusJob) {
      case "Completed":
        return "success";
      case "Cancel":
        return "danger";
      case "Carry_off":
        return "primary";
      case "High_time":
        return "warning";
      case "Doing":
        return "info";
      case "waiting":
        return "danger";
      default:
        return "";
    }
  };

  const jobs = orders.map((i) => i.jobs);
  console.log(jobs)
  const status = jobs.map((i) => i.map((j) => j.statusJob));
  const customer = jobs.map((i) => i.map((j) => j));
  console.log(customer)
  let statusJob;
  for (let i = 0; i < status.length; i++) {
    const arrayContent = status[i];
    statusJob = arrayContent[0];
  }
  console.log(statusJob);
  return (
    <div
      className={`card bg-transparent mb-3 col-12 col-md-6 col-lg-4 col-xl-3 border-0`}
    >
      <div
        className={`card-body rounded-top shadow-sm border border-${getStatusClass(
          statusJob
        )}`}
      >
        <h5 className="card-title">نام تکنسین : {fullNameUser}</h5>
        <h5 className="card-title">شماره تکنسین : {phoneNumber}</h5>
        <p className="card-text">تکنسین: {jobs.customer}</p>
        <p className="card-text">توضیحات: </p>
      </div>
      <div
        className={`btn w-100 btn-${getStatusClass(statusJob)}`}
        style={{ borderRadius: "0 0  0.35rem  0.35rem " }}
      >
        <span className="text text-nowrap">{getStatusText(statusJob)}</span>
      </div>
    </div>
  );
};

export default CardWorks;
