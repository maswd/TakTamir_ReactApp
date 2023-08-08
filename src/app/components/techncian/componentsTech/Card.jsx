import React from "react";
import User from "./User";
import StatusDropdown from "./StatusDropdown";

function Card(props) {
  console.log("props");
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
  const getStatusText = (statusJob) => {
    switch (statusJob) {
      case 'Completed':
        return 'انجام شده';
      case 'Cancel':
        return 'لغو شده';
      case 'Carry_off':
        return 'حمل به کارگاه ';
      case 'High_time':
        return 'کار زمان بالا ';
      case 'Doing':
        return 'در حال انجام ';
      case 'waiting':
        return 'در انتظار تایید';
      default:
        return '';
    }
  };
  const getStatusIcon = (statusJob) => {
    switch (statusJob) {
      case 'Completed':
        return 'fa-truck-loading';
      case 'Cancel':
        return 'fa-times';
      case 'Carry_off':
        return 'fa-truck';
      case "High_time":
        return 'fa-clock';
      case 'Doing':
        return 'fa-clipboard-list';
      case 'waiting':
        return 'در انتظار تایید';
      default:
        return '';
    }
  };
  return (
    <div className={`col-xl-4 col-md-6 col-lg-12 mb-4`}>
      <div className={`card border-left-${getStatusClass(props.jobsOrder[0].statusJob)} shadow h-100 py-2`}>
        <div className="card-body">
          <div
            className={`text-xs font-weight-bold text-${getStatusClass(props.jobsOrder[0].statusJob)} text-uppercase mb-1`}
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
                    کل هزینه دریافتی <div  className="text-center">{props.total}</div>
                  </div>
                  <div className="text-gray-900 small">
                    جمع خرج کرد <div className="text-center">{props.spent}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto text-left">
              <StatusDropdown id={props.id} stat={props.jobsOrder[0].statusJob}  />
              <i
                className={`mt-5 d-block fas ${getStatusIcon(props.jobsOrder[0].statusJob)} fa-2x text-gray-300`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
