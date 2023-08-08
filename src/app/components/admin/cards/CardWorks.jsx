import React from "react";

const CardWorks = ({ customer, statusJob, technician, description }) => {
  const getStatusClass = (statusJob) => {
    switch (statusJob) {
      case 'Completed':
        return 'success';
      case 'Cancel':
        return 'danger';
      case 'Carry_off':
        return 'primary';
      case 'High_time':
        return 'warning';
      case 'Doing':
        return 'info';
      case 'waiting':
        return 'danger';
      default:
        return '';
    }
  };


  return (
    <div className={`card bg-transparent mb-3 col-12 col-md-6 col-lg-4 col-xl-3 border-0`}>
      <div
        className={`card-body rounded-top shadow-sm border border-${getStatusClass(
          statusJob
        )}`}
      >
        <h5 className="card-title">{customer.fullNameCustomer}</h5>
        <p className="card-text">تکنسین: {technician}</p>
        <p className="card-text">توضیحات: {description}</p>
      </div>
      <div
        className={`btn w-100 btn-${getStatusClass(statusJob)}`}
        style={{ borderRadius: "0 0  0.35rem  0.35rem " }}
      >
        <span className="text text-nowrap">{statusJob}</span>
      </div>
    </div>
  );
};

export default CardWorks;
