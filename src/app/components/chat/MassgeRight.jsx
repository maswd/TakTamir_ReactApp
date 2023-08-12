import React from "react";
import { convertToPersianDate } from "../../../utils/convertor";

const MassgeRight = ({data,ref}) => {
  return (
    <div className="chat-message-right pb-4" ref={ref}>
      <div>
        <img
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          className="rounded-circle ml-1"
          alt="Chris Wood"
          width="40"
          height="40"
        />
        <div className="text-muted small text-nowrap mt-2">{convertToPersianDate(data.Timestamp).slice(17,25)}</div>
      </div>
      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
        <div className="font-weight-bold mb-1">{data.Text}</div> 
      </div>
    </div>
  );
};

export default MassgeRight;
