import React from "react";

const CardWorkers = ({ name, position, location, isEmployed }) => {
  return (
    <div className="card  bg-transparent border-0 mb-3 col-12 col-md-6 col-lg-4">
      <div
        className={`card-body rounded shadow-sm d-flex justify-content-between border border-left-${
          isEmployed ? "success" : "danger"
        }`}
      >
        <div className="">
          <h5 className="card-title"> نام :{name}</h5>
          <p className="card-text">شماره تماس: {position}</p>
          <p className="card-text">ادرس: {location}</p>
          <p className="card-text">تخصص ها : {location}</p>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-end">
          <span className="icon text-gray-300 fa-2x ml-2">
            <i className={`fas ${isEmployed ? "fa-check" : "fa-times"}`}></i>
          </span>
          <button
            className={`btn py-2 d-flex justify-content-center text-nowrap align-self-center align-items-center rounded text-xs  btn-${
              isEmployed ? "success" : "danger"
            } `}
          >
            <span> {isEmployed ? "کار میگیرم" : "کار نمیگیرم"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardWorkers;
