import React from "react";
import {Link} from 'react-router-dom'

const Pagination = () => {
  return (
    <ul
      className=" pagination shadow-sm justify-content-center "
      style={{ direction: "ltr" }}
    >
      <li
        className="paginate_button text-center w-100 page-item previous disabled"
        id="dataTable_previous"
      >
        <button
          aria-controls="dataTable"
          data-dt-idx="0"
          tabIndex="0"
          className="page-link w-100"
        >
          برگشت
        </button>
      </li>
      <li className="paginate_button page-item ">
        <Link
          
          aria-controls="dataTable"
          data-dt-idx="1"
          tabIndex="0"
          className="page-link"
        >
          1
        </Link>
      </li>
      <li className="paginate_button page-item active ">
        <Link
          
          aria-controls="dataTable"
          data-dt-idx="2"
          tabIndex="0"
          className="page-link"
        >
          2
        </Link>
      </li>
      <li className="paginate_button page-item ">
        <Link
          
          aria-controls="dataTable"
          data-dt-idx="3"
          tabIndex="0"
          className="page-link"
        >
          3
        </Link>
      </li>
      <li className="paginate_button page-item ">
        <Link
          
          aria-controls="dataTable"
          data-dt-idx="4"
          tabIndex="0"
          className="page-link"
        >
          4
        </Link>
      </li>
      <li className="paginate_button page-item ">
        <Link
          
          aria-controls="dataTable"
          data-dt-idx="5"
          tabIndex="0"
          className="page-link"
        >
          5
        </Link>
      </li>
      <li className="paginate_button page-item ">
        <Link
          
          aria-controls="dataTable"
          data-dt-idx="6"
          tabIndex="0"
          className="page-link"
        >
          6
        </Link>
      </li>
      <li
        className="w-100 text-center paginate_button page-item next"
        id="dataTable_next"
      >
        <Link
          
          aria-controls="dataTable"
          data-dt-idx="7"
          tabIndex="0"
          className="page-link"
        >
          بعدی
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
