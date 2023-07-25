import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function ConfirmPhone() {
  const [remaining, setRemaining] = useState(60);
  const [countdownText, setCountdownText] = useState(`ارسال کد: 00 : 60`);

  const handleResendClick = () => {
    setRemaining(60);
    setCountdownText(`ارسال کد: 00 : 60`);
  };

  useEffect(() => {
    if (remaining > 0) {
      const timerId = setTimeout(() => {
        setRemaining((prevRemaining) => prevRemaining - 1);
        var m = Math.floor((remaining - 1) / 60);
        var s = (remaining - 1) % 60;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        setCountdownText(`ارسال کد: ${m} : ${s}`);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      setCountdownText(`کد را دریافت نکردید ؟ 
       `);
    }
  }, [remaining]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-xl-10 col-lg-12 col-md-9 ">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12  col-lg-6  d-block bg-login-image"></div>
                  <div className="col-12 col-lg-6 ">
                    <div className="p-5 my-lg-5">
                      <div className="text-center pb-lg-5">
                        <h1 className="h4 text-gray-900 mb-4">
                          تایید شماره تلفن
                        </h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="phone"
                            className="form-control form-control-user"
                            id="phone"
                            aria-describedby="phoneHelp"
                            placeholder="شماره تلفن خود را وارد کنید"
                          />
                        </div>
                        <span className="text-xs">{countdownText}</span>
                        {remaining === 0 && (
                          <button className="btn text-xs text-primary" onClick={handleResendClick}>ارسال کد</button>
                        )}

                        <hr />
                        <Link
                          to="/user-information"
                          className="btn btn-warning btn-user btn-block"
                        >
                          تایید
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmPhone;
