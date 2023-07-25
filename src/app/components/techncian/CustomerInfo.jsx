import { useState } from "react";

function CustomerInfo() {
  const [nationalCode, setNationalCode] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleNationalCodeChange = (event) => {
    setNationalCode(event.target.value);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  return (
    <div className="mx-auto rounded text-dark  p-3 shadow-sm ">
      <div>
        <div className="order-0 pb-2 ">
            <label htmlFor="nationalCode" className="form-label">
              کد ملی
            </label>
            <input
              type="text"
              className="form-control"
              id="nationalCode"
              value={nationalCode}
              onChange={handleNationalCodeChange}
            />
            <label htmlFor="jobDescription" className="form-label">
              توضیحات کار انجام شده
            </label>
            <textarea
              className="form-control"
              id="jobDescription"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
            ></textarea>
        </div>
        <div className=" order-1 text-center">
          <img
            className="img-responsive w-75 h-75"
            src="/img/undraw_personal_info_re_ur1n.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
