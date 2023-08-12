import React from "react";

function User(props) {
  return (
    <>
      <div className="pb-2 d-flex g-3 font-weight-bold text-gray-800">
        <i className="fas fa-user  text-gray-500"></i>
        <p className="text-gray-900 small">{props.customer.fullNameCustomer}</p>
      </div>
      <div className="pb-2 d-flex g-3 font-weight-bold text-gray-800">
        <i className="fas fa-home  text-gray-500"></i>
        <p className="text-gray-900 small">{props.customer.address}</p>
      </div>
      <div className="pb-2 d-flex g-3 font-weight-bold text-gray-800">
        <i className="fas fa-exclamation-triangle  text-gray-500"></i>
        <p className="text-gray-900 small"></p>
      </div>
    </>
  );
}

export default User;
