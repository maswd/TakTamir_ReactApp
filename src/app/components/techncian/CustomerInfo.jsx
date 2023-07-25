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
    <div>
      <div className="mb-3">
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
      </div>
      <div className="mb-3">
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
    </div>
  );
}

export default CustomerInfo;