import React from "react";
import Pagination from "../commen/pagination";
function Workers() {
  return (
    <>
      <div className=" card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">وضعیت تکنسین ها</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div id="dataTable_filter" className="dataTables_filter">
                    <label>
                      جستجو:
                      <input
                        type="search"
                        className="form-control form-control-sm mr-1"
                        placeholder=""
                        aria-controls="dataTable"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table
                    className="table table-bordered dataTable"
                    id="dataTable"
                    cellSpacing="0"
                    role="grid"
                    aria-describedby="dataTable_info"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting table-bordered sorting_asc"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Name: activate to sort column descending"
                          aria-sort="ascending"
                          style={{ width: "57px" }}
                        >
                          نام
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Position: activate to sort column ascending"
                          style={{ width: "61px" }}
                        >
                          شماره تماس
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Office: activate to sort column ascending"
                          style={{ width: "49px" }}
                        >
                          تخصص ها
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Age: activate to sort column ascending"
                          style={{ width: "31px" }}
                        >
                          وضعیت
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="odd">
                        <td className="sorting_1">Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>
                          <div className="btn btn-success btn-icon-split">
                            <span className="text d-md-block d-none">
                              کار میگیرم
                            </span>
                            <span className="icon text-white-50">
                              <i className="fas fa-check"></i>
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">Angelica Ramos</td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                        <td>
                          <div className="btn btn-danger btn-icon-split">
                            <span className="text d-md-block d-none">
                              کار نمیگیرم
                            </span>
                            <span className="icon text-white-50">
                              <i className="fas fa-times"></i>
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">Ashton Cox</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>
                          <div className="btn btn-danger btn-icon-split">
                            <span className="text d-md-block d-none">
                              کار نمیگیرم
                            </span>
                            <span className="icon text-white-50">
                              <i className="fas fa-times"></i>
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">Bradley Greer</td>
                        <td>London</td>
                        <td>dd</td>
                        <td>
                          <div className="btn btn-success btn-icon-split">
                            <span className="text d-md-block d-none">
                              کار میگیرم
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
            </div>
          </div>
        </div>
      </div>

   <Pagination/>
    </>
  );
}

export default Workers;
