import React from "react";
import job from "/img/undraw_helpful_sign_re_8ms5.svg";
function Jobs() {
  return (
    <>
      <section className=" mt-2">
        <div className="">
          <div className="row justify-content-center align-items-center textthree-row textthree-position-right">
            <div className="col-md-12 col-lg-7 textthree-texts">
              <div
                className="textthree-texts__wrapper"
                style={{ width: "100%" }}
              >
                <div className="">
                  <img src="/img/dots-pattern.svg" />
                  <p className="d-inline-block mr-4 h5"> کارتو اینجا پیدا کن</p>
                </div>

                <table
                  className="table table-bordered dataTable"
                  cellspacing="0"
                  aria-describedby="dataTable_info"
                  style={{ width: "100%", direction: "rtl",textAlign:"center" }}
                >
                  <thead>
                    <tr role="row" >
                      <th
                        className="p-3 bg-white  text-gray-900"
                        tabindex="0"
                        aria-controls="dataTable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Name: activate to sort column descending"
                        aria-sort="ascending"
                      >
                        عنوان کار
                      </th>
                      <th
                        className="p-3 bg-white text-gray-900"
                        tabindex="0"
                        aria-controls="dataTable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Position: activate to sort column ascending"
                      >
                        نام مشتری
                      </th>
                      <th
                        className="p-3 bg-white text-gray-900"
                        tabindex="0"
                        aria-controls="dataTable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Age: activate to sort column ascending"
                      >
                        وضعیت
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr  className="border-white">
                      <td className="">Airi Satou</td>
                      <td>Accountant</td>
                      <td>
                        <div className="btn btn-success btn-icon-split">
                          <span className="text d-md-block d-none">
                            رزرو کردن
                          </span>
                          <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="">Angelica Ramos</td>
                      <td>Chief Executive Officer (CEO)</td>
                      <td>
                        <div className="btn btn-danger btn-icon-split">
                          <span className="text d-md-block d-none">
                           
                            رزرو شده
                          </span>
                          <span className="icon text-white-50">
                            <i className="fas fa-times"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="">Ashton Cox</td>
                      <td>San Francisco</td>
                      <td>
                        <div className="btn btn-danger btn-icon-split">
                          <span className="text d-md-block d-none">
                            رزرو شده
                          </span>
                          <span className="icon text-white-50">
                            <i className="fas fa-times"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="">Bradley Greer</td>
                      <td>London</td>
                      <td>
                        <div className="btn btn-success btn-icon-split">
                          <span className="text d-md-block d-none">
                            رزرو کردن
                          </span>
                          <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="">Bradley Greer</td>
                      <td>London</td>
                      <td>
                        <div className="btn btn-success btn-icon-split">
                          <span className="text d-md-block d-none">
                            رزرو کردن
                          </span>
                          <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="">Bradley Greer</td>
                      <td>London</td>
                      <td>
                        <div className="btn btn-success btn-icon-split">
                          <span className="text d-md-block d-none">
                            رزرو کردن
                          </span>
                          <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="">Bradley Greer</td>
                      <td>London</td>
                      <td>
                        <div className="btn btn-success btn-icon-split">
                          <span className="text d-md-block d-none">
                            رزرو کردن
                          </span>
                          <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-2 col-lg-4 textthree-img">
              <div
                className="textthree-img__wrapper"
                style={{ transform: "scale(1)" }}
              >
                <div className="textthree-img__bg">
                  <img src={job} />
                </div>
              </div>
            </div>
            <div className="textthree-bgBox"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jobs;
