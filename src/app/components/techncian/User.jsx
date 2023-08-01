import React from "react";

function User(props) {
  return (
    <>
      <div className="pb-2 d-flex g-3 font-weight-bold text-gray-800">
        <i className="fas fa-user  text-gray-500"></i>
        <p className="text-gray-900 small">{props.name}</p>
      </div>
      <div className="pb-2 d-flex g-3 font-weight-bold text-gray-800">
        <i className="fas fa-home  text-gray-500"></i>
        <p className="text-gray-900 small">{props.address}</p>
      </div>
      <div className="pb-2 d-flex g-3 font-weight-bold text-gray-800">
        <i className="fas fa-exclamation-triangle  text-gray-500"></i>
        <p className="text-gray-900 small"></p>
      </div>
      <div className="pt-2 d-flex g-3 font-weight-bold text-gray-800">
        <i className="fas fa-edit  text-gray-500"></i>
       <div className="d-flex justify-content-ev w-">
       <div className="text-gray-900 small">
          کل هزینه دریافتی <div>{props.totalIncome}</div>
        </div>
        <div className="text-gray-900 small">جمع خرج کرد <div >{props.totalExpense}</div></div>
       </div>
      </div>
    </>
  );
}

export default User;
