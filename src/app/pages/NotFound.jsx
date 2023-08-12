import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const history =useNavigate()
  useEffect(() => {
    
    history("/",{replace: true})
    
  }, [])
  
  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="error mx-auto align-self-center" data-text="404">
        404
      </div>
      <p className="lead text-gray-800 mb-5">صفحه پیدا نشد</p>
      <p className="text-gray-500 mb-0">
        به نظر می‌رسد مسییر اشتباهی پیدا کرده‌اید...
      </p>
      <Link to="/">&larr; بازگشت به صفحه اصلی</Link>
    </div>
  );
};

export default NotFound;
