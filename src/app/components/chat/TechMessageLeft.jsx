import React from "react";

const TechMessageLeft = ({ data }) => {
  return (
    <div className="chat-message-right pb-4">
      <div>
        <img
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          className="rounded-circle ml-1"
          alt="Chris Wood"
          width="40"
          height="40"
        />
        <div className="text-muted small text-nowrap mt-2">2:33 am</div>
      </div>
      <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
        {data.Text}
      </div>
    </div>
  );
};

export default TechMessageLeft;
