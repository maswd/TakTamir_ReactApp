import React from "react";
import User from "./User";
import StatusDropdown from "./StatusDropdown";
import { getStatusClass, getStatusIcon, getStatusText } from "../../../../utils/convertor";

function Card(props) {
  return (
    <div className={`col-xl-4 col-md-6 col-lg-12 mb-4`}>
      <div
        className={`card border-left-${getStatusClass(
          props.jobsOrder[0].statusJob
        )} shadow h-100 py-2`}
      >
        <div className="card-body">
          <div
            className={`text-xs font-weight-bold text-${getStatusClass(
              props.jobsOrder[0].statusJob
            )} text-uppercase mb-1`}
          >
            {getStatusText(props.jobsOrder[0].statusJob)}
          </div>
          <div className="row no-gutters align-items-center">
            <div className="col ml-2">
              <User {...props.jobsOrder[0]} />
              <div className="pt-2 d-flex g-3 font-weight-bold text-gray-800">
                <i className="fas fa-edit  text-gray-500"></i>
                <div className="d-flex justify-content-evenly w-100">
                  <div className="text-gray-900 small">
                    کل هزینه دریافتی{" "}
                    <div className="text-center">{props.total}</div>
                  </div>
                  <div className="text-gray-900 small">
                    جمع خرج کرد <div className="text-center">{props.spent}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto text-left">
              {props.jobsOrder[0].statusJob !== "Completed" && props.jobsOrder[0].statusJob !== "waiting" && props.jobsOrder[0].statusJob !== "Cancel" && (
                <StatusDropdown
                  id={props.id}
                  stat={props.jobsOrder[0].statusJob}
                  name_Device={props.jobsOrder[0].name_Device}
                  customer={props.jobsOrder[0].customer.fullNameCustomer}
                />
              )}
              <i
                className={`mt-5 d-block fas ${getStatusIcon(
                  props.jobsOrder[0].statusJob
                )} fa-2x text-gray-300`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
