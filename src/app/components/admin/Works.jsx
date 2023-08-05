import React from "react";
import Pagination from "../commen/pagination";

function Works() {
  return (
    <>
      <div className=" card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">وضعیت کار ها </h6>
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
                    style={{ width: "100%", direction: "rtl" }}
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
                          عنوان کار
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
                          وضعیت
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
                          تکنسین
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
                          توضیحات
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="odd">
                        <td className="sorting_1">Airi Satou</td>
                        <td>
                          <div className="btn btn-success btn-icon-split">
                            <span className="text text-nowrap">انجام شده </span>
                          </div>
                        </td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">Angelica Ramos</td>
                        <td>
                          <div className="btn btn-danger btn-icon-split">
                            <span className="text text-nowrap">کنسل شده </span>
                          </div>
                        </td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>London</td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">Ashton Cox</td>
                        <td>
                          <div className="btn btn-primary btn-icon-split">
                            <span className="text text-nowrap">
                              حمل به کارگاه
                            </span>
                          </div>
                        </td>
                        <td>San Francisco</td>
                        <td>66</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">Bradley Greer</td>
                        <td>
                          <div className="btn btn-warning btn-icon-split">
                            <span className="text text-nowrap">
                              کار زمان بالا
                            </span>
                          </div>
                        </td>
                        <td>London</td>
                        <td>dd</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">Bradley Greer</td>
                        <td>
                          <div className="btn btn-info btn-icon-split">
                            <span className="text text-nowrap">
                              در حال انجام
                            </span>
                          </div>
                        </td>
                        <td>London</td>
                        <td>dd</td>
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

export default Works;
