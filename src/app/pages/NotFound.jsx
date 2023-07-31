import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <div class="error mx-auto align-self-center" data-text="404">
        404
      </div>
      <p class="lead text-gray-800 mb-5">صفحه پیدا نشد</p>
      <p class="text-gray-500 mb-0">
        به نظر می‌رسد مسییر اشتباهی پیدا کرده‌اید...
      </p>
      <Link to="/">&larr; بازگشت به صفحه اصلی</Link>
    </div>
  );
};

export default NotFound;
