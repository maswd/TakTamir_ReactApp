import React from "react";

const CardWorks = ({ name, status, technician, description }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "انجام شده":
        return "success";
      case "کنسل شده":
        return "danger";
      case "حمل به کارگاه":
        return "primary";
      case "کار زمان بالا":
        return "warning";
      case "در حال انجام":
        return "info";
      default:
        return "";
    }
  };

  return (
    <div className={`card bg-transparent mt-3 col-12 col-md-6 col-lg-4 col-xl-3 border-0`}>
      <div
        className={`card-body rounded-top shadow-sm border border-${getStatusClass(
          status
        )}`}
      >
        <h5 className="card-title">{name}</h5>
        <p className="card-text">تکنسین: {technician}</p>
        <p className="card-text">توضیحات: {description}</p>
      </div>
      <div
        className={`btn w-100 btn-${getStatusClass(status)}`}
        style={{ borderRadius: "0 0  0.35rem  0.35rem " }}
      >
        <span className="text text-nowrap">{status}</span>
      </div>
    </div>
  );
};

export default CardWorks;
