import React from "react";
import { Link } from "react-router-dom";

const Request = ({ link, text, hide, stylesRe }) => {
  const iconStyle = stylesRe ? { background: "rgb(2, 195, 154)" } : {};

  return (
    <Link
      to={link}
      style={iconStyle}
      className={` hover nav-link d-flex text-white hover rounded-pill align-items-center ml-2 ${text} position-relative`}
    >
      <p
        className={`${hide ? "" : "pl-3"} `}
        style={{
          margin: "0 0px 0 13px",
        }}
      >
        {" "}
        درخواست تعمیرکار
      </p>
      <div
        className={`leadtwo__icon position-absolute text-dark ${
          hide ? "d-none" : ""
        }`}
        style={{
          width: "2.3em",
          height: "2.3em",
          left: 0,
          borderRadius: "50px",
        }}
      >
        <svg
          fill="#000"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M233.86621,28.7051a19.95058,19.95058,0,0,0-20.36328-3.459L28.94629,97.751a19.99924,19.99924,0,0,0,3.39062,38.22558L76,144.71V199.9844a19.99269,19.99269,0,0,0,34.14209,14.1416l23.28906-23.28882,36.55908,32.17261a19.834,19.834,0,0,0,13.14649,5.00195,20.20114,20.20114,0,0,0,6.2041-.9834,19.83327,19.83327,0,0,0,13.35645-14.5664L240.31055,48.32912A19.95249,19.95249,0,0,0,233.86621,28.7051ZM147.9126,76.79934,85.21826,122.07839l-34.82861-6.96606ZM100,190.32717V161.41726l15.37744,13.53247Zm80.80371,10.22754L107.21582,135.7969,213.18164,59.26613Z" />
        </svg>
      </div>
    </Link>
  );
};

export default Request;
