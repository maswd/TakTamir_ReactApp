import React from "react";
import User from "./User";
import StatusDropdown from "./StatusDropdown";

function Card(props) {
  return (
    <div className={`col-xl-4 col-md-6 col-lg-12 mb-4`}>
      <div className={`card border-left-${props.color} shadow h-100 py-2`}>
        <div className="card-body">
        <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>
                {props.status}
              </div>
          <div className="row no-gutters align-items-center">
            <div className="col ml-2">
             
              <User {...props.user} />
            </div>
            <div className="col-auto text-left">
              <StatusDropdown />
              <i className={`mt-5 d-block fas ${props.icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;