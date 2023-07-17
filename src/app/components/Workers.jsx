import React from "react";
import "../../assets/css/dataTables.bootstrap4.css";
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
                    cellspacing="0"
                    role="grid"
                    aria-describedby="dataTable_info"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting table-bordered sorting_asc"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Name: activate to sort column descending"
                          aria-sort="ascending"
                          style={{ width: "57px" }}
                        >
                          نام
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Position: activate to sort column ascending"
                          style={{ width: "61px" }}
                        >
                          شماره تماس
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="Office: activate to sort column ascending"
                          style={{ width: "49px" }}
                        >
                          تخصص ها
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="dataTable"
                          rowspan="1"
                          colspan="1"
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
                            <span className="text d-md-block d-none">کار میگیرم</span>
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
                            <span className="text d-md-block d-none">کار نمیگیرم</span>
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
                            <span className="text d-md-block d-none">کار نمیگیرم</span>
                            <span className="icon text-white-50">
                              <i className="fas fa-times"></i>
                            </span>
                          </div>
                        </td>{" "}
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">Bradley Greer</td>
                        <td>London</td>
                        <td>dd</td>
                        <td>
                          <div className="btn btn-success btn-icon-split">
                            <span className="text d-md-block d-none">کار میگیرم</span>
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
              <div className="row">
                
                <div className="col-sm-12 col-md-7 mx-auto mt-2">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="dataTable_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="dataTable_previous"
                      >
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="0"
                          tabindex="0"
                          className="page-link"
                        >
                          برگشت
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="1"
                          tabindex="0"
                          className="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li className="paginate_button page-item active ">
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="2"
                          tabindex="0"
                          className="page-link"
                        >
                          2
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="3"
                          tabindex="0"
                          className="page-link"
                        >
                          3
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="4"
                          tabindex="0"
                          className="page-link"
                        >
                          4
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="5"
                          tabindex="0"
                          className="page-link"
                        >
                          5
                        </a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="6"
                          tabindex="0"
                          className="page-link"
                        >
                          6
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next"
                        id="dataTable_next"
                      >
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="7"
                          tabindex="0"
                          className="page-link"
                        >
                          بعدی
                        </a>
                      </li>
                    </ul>
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

export default Workers;
