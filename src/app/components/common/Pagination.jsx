import React from "react";

const Pagination = () => {
  return (
    <ul
      className="pagination shadow-sm justify-content-center"
      style={{ direction: "ltr" }}
    >
      <li
        className="paginate_button text-center w-100 page-item previous disabled"
        id="dataTable_previous"
      >
        <a
          href="#"
          aria-controls="dataTable"
          data-dt-idx="0"
          tabIndex="0"
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
          tabIndex="0"
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
          tabIndex="0"
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
          tabIndex="0"
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
          tabIndex="0"
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
          tabIndex="0"
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
          tabIndex="0"
          className="page-link"
        >
          6
        </a>
      </li>
      <li
        className="w-100 text-center paginate_button page-item next"
        id="dataTable_next"
      >
        <a
          href="#"
          aria-controls="dataTable"
          data-dt-idx="7"
          tabIndex="0"
          className="page-link"
        >
          بعدی
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
