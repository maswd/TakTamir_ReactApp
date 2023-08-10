import React, { useState } from "react";

const Pagination = ({ totalItems, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem('page', page);
    onPageChange(page, currentPage);
  };


  const renderPageLinks = () => {
    const pageLinks = [];
    for (let page = 1; page <= totalPages; page++) {
      pageLinks.push(
        <li
          key={page}
          className={`paginate_button page-item ${
            page === currentPage ? "active" : ""
          }`}
        >
          <button
            type="button"
            aria-controls="dataTable"
            tabIndex="0"
            className="page-link"
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        </li>
      );
    }
    return pageLinks;
  };

  return (
    <ul
      className="mt-2 mb-3 pagination shadow-sm justify-content-center"
      style={{ direction: "ltr" }}
    >
      <li
        className="paginate_button text-center w-100 page-item previous disabled"
        id="dataTable_previous"
      >
        <button
          type="button"
          aria-controls="dataTable"
          data-dt-idx="0"
          tabIndex="0"
          className="page-link w-100"
        >
          برگشت
        </button>
      </li>
      {renderPageLinks()}
      <li
        className="w-100 text-center paginate_button page-item next"
        id="dataTable_next"
      >
        <button
          type="button"
          aria-controls="dataTable"
          data-dt-idx="7"
          tabIndex="0"
          className="page-link w-100"
        >
          بعدی
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
