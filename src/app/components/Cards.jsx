import React from "react";

function Card() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-xl-4 col-md-6 col-lg-12 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col ml-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    حمل به کارگاه
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-user  text-gray-500"></i>
                    <p className="text-gray-900 small">احمدیان</p>
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-home  text-gray-500"></i>
                    <p className="text-gray-900 small">
                      مازندران -مازندران -ساری -میدان امام -بلئار پاسداران -خ
                      بهرامی -خ امام رضا 4
                    </p>
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-exclamation-triangle  text-gray-500"></i>
                    <p className="text-gray-900 small"></p>
                  </div>
                  <div className="d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-edit  text-gray-500"></i>
                    <p className="text-gray-900 small">
                      کل هزینه دریافتی 3,000,000
                    </p>
                    <p className="text-gray-900 small">جمع خرج کرد 2,800,000</p>
                  </div>
                </div>
                <div className="col-auto text-left">
                  <button className="mb-5 btn btn-dark p-1 text-xs">
                    تغییر وضعیت
                  </button>
                  <i className="mt-5 d-block fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col ml-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    در حال انجام
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-user  text-gray-500"></i>
                    <p className="text-gray-900 small">احمدیان</p>
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-home  text-gray-500"></i>
                    <p className="text-gray-900 small">
                      مازندران -مازندران -ساری -میدان امام -بلئار پاسداران -خ
                      بهرامی -خ امام رضا 4
                    </p>
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-exclamation-triangle  text-gray-500"></i>
                    <p className="text-gray-900 small"></p>
                  </div>
                  <div className="d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-edit  text-gray-500"></i>
                    <p className="text-gray-900 small">
                      کل هزینه دریافتی 3,000,000
                    </p>
                    <p className="text-gray-900 small">جمع خرج کرد 2,800,000</p>
                  </div>
                </div>
                <div className="col-auto text-left">
                  <button className="mb-5 btn btn-dark p-1 text-xs">
                    تغییر وضعیت
                  </button>
                  <i className="mt-5 d-block fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col ml-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    بسته
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                        <i className="fas fa-user  text-gray-500"></i>
                        <p className="text-gray-900 small">احمدیان</p>
                      </div>
                      <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                        <i className="fas fa-home  text-gray-500"></i>
                        <p className="text-gray-900 small">
                          مازندران -مازندران -ساری -میدان امام -بلئار پاسداران
                          -خ بهرامی -خ امام رضا 4
                        </p>
                      </div>
                      <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                        <i className="fas fa-exclamation-triangle  text-gray-500"></i>
                        <p className="text-gray-900 small"></p>
                      </div>
                      <div className="d-flex g-3 font-weight-bold text-gray-800">
                        <i className="fas fa-edit  text-gray-500"></i>
                        <p className="text-gray-900 small">
                          کل هزینه دریافتی 3,000,000
                        </p>
                        <p className="text-gray-900 small">
                          جمع خرج کرد 2,800,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto text-left">
                  <button className="mb-5 btn btn-dark p-1 text-xs">
                    تغییر وضعیت
                  </button>
                  <i className="mt-5 d-block fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col ml-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    کار زمان بالا
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-user  text-gray-500"></i>
                    <p className="text-gray-900 small">احمدیان</p>
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-home  text-gray-500"></i>
                    <p className="text-gray-900 small">
                      مازندران -مازندران -ساری -میدان امام -بلئار پاسداران -خ
                      بهرامی -خ امام رضا 4
                    </p>
                  </div>
                  <div className="mb-1 d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-exclamation-triangle  text-gray-500"></i>
                    <p className="text-gray-900 small"></p>
                  </div>
                  <div className="d-flex g-3 font-weight-bold text-gray-800">
                    <i className="fas fa-edit  text-gray-500"></i>
                    <p className="text-gray-900 small">
                      کل هزینه دریافتی 3,000,000
                    </p>
                    <p className="text-gray-900 small">جمع خرج کرد 2,800,000</p>
                  </div>
                </div>
                <div className="col-auto text-left">
                  <button className="mb-5 btn btn-dark p-1 text-xs">
                    تغییر وضعیت
                  </button>
                  <i className="mt-5 d-block fas fa-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
