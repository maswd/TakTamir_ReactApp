import React from "react";

function UsedCase({ items, handleItemChange, handleAddItem }) {
  return (
    <div className="mt-3 mx-auto col-md-10 shadow-sm p-3 rounded">
      <div className="text-center ">
        <img
          className="img-responsive w-50 h-50 "
          src="/img/undraw_logistics_x-4-dc.svg"
          alt=""
        />
      </div>
      <h2>لوازم استفاده شده : </h2>
      {items.map((item, index) => (
        <div className="animated--grow-in" key={index}>
          <div className="d-flex g-3">
            <div className="w-50">
              <label
                htmlFor={`item-name-${index}`}
                className="form-label text-xs"
              >
                نام
              </label>
              <input
                type="text"
                className="form-control text-xs"
                id={`item-name-${index}`}
                value={item.name}
                onChange={(event) => handleItemChange(index, event)}
                name="name"
              />
            </div>
            <div className="w-50">
              <label
                htmlFor={`item-price-${index}`}
                className="form-label text-xs"
              >
                قیمت
              </label>
              <input
                type="number"
                className="form-control text-xs"
                id={`item-price-${index}`}
                value={item.price}
                onChange={(event) => handleItemChange(index, event)}
                name="price"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        className="btn btn-sm btn-circle shadow-sm mt-3"
        onClick={handleAddItem}
      >
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
}

export default UsedCase;
