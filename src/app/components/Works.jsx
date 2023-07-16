import React from "react";

function Works() {
  return (
    <div>
    
      <div className=" card shadow mb-4" >
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">وضعیت  کار ها </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6"></div>
                <div className="col-sm-12 col-md-6">
                  <div id="dataTable_filter" className="dataTables_filter">
                    <label>
                      <input
                        type="search"
                        className="form-control form-control-sm mr-1"
                        placeholder=""
                        aria-controls="dataTable"
                      />
                      :جستجو
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
                    style={{ width: "100%", direction: "rtl" }}
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
                          عنوان کار
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
                        وضعیت
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
                      تکنسین 
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
                            <span className="text text-nowrap">حمل به کارگاه </span>
  
                          </div>
                        </td>
                        <td>San Francisco</td>
                        <td>66</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">Bradley Greer</td>
                        <td>
                          <div className="btn btn-warning btn-icon-split">
                            <span className="text text-nowrap">کار زمان بالا </span>
                            
                          </div>
                        </td>
                        <td>London</td>
                        <td>dd</td>
                        
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">Bradley Greer</td>
                        <td>
                          <div className="btn btn-info btn-icon-split">
                            <span className="text text-nowrap">در حال انجام</span>
                            
                          </div>
                        </td>
                        <td>London</td>
                        <td>dd</td>
                        
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
                        className="paginate_button  page-item previous"
                        id="dataTable_next"
                      >
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="7"
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
                        className="paginate_button page-item next disabled"
                        id="dataTable_previous"
                      >
                        <a
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx="0"
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
    </div>
  );
}

export default Works;
