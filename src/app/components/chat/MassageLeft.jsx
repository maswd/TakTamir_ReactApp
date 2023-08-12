import React from "react";
import { convertToPersianDate } from "../../../utils/convertor";

const MassageLeft = ({data}) => {
  return (
    <div className="chat-message-left pb-4">
      <div>
        <img
          src="https://bootdey.com/img/Content/avatar/avatar3.png"
          className="rounded-circle ml-1"
          alt="Sharon Lessman"
          width="40"
          height="40"
        />
        <div className="text-muted small text-nowrap mt-2">{convertToPersianDate(data.Timestamp).slice(17,25)}</div>
      </div>
      <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
        <div className="font-weight-bold mb-1">{data.Text}</div> 
      </div>
    </div>
  );
};

export default MassageLeft;
