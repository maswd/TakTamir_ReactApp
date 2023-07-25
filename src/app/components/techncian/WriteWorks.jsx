import React, { useState } from "react";
import CustomerInfo from "./CustomerInfo";
import Subscription from "./Subscription";

function WriteWorks() {
  const [amount, setAmount] = useState("");
  const [items, setItems] = useState([{ name: "", price: "" }]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleItemChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...items];
    list[index][name] = value;
    setItems(list);
  };

  const handleAddItem = () => {
    const lastItem = items[items.length - 1];
    if (lastItem.name === "" || lastItem.price === "") {
      alert("لطفا نام و قیمت لوازم استفاده شده را وارد کنید.");
    } else {
      setItems([...items, { name: "", price: "" }]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              مبلغ دریافتی
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>لوازم استفاده شده</h2>
        </div>
      </div>
      {items.map((item, index) => (
        <div className="row" key={index}>
          <div className="col">
            <div className="mb-3">
              <label htmlFor={`item-name-${index}`} className="form-label">
                نام لوازم
              </label>
              <input
                type="text"
                className="form-control"
                id={`item-name-${index}`}
                value={item.name}
                onChange={(event) => handleItemChange(index, event)}
                name="name"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor={`item-price-${index}`} className="form-label">
                قیمت
              </label>
              <input
                type="number"
                className="form-control"
                id={`item-price-${index}`}
                value={item.price}
                onChange={(event) => handleItemChange(index, event)}
                name="price"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={handleAddItem}>
            + اضافه کردن لوازم جدید
          </button>
        </div>
      </div>
      <CustomerInfo />
      <Subscription />
      <div className="mt-3 d-flex justify-content-between ">
        <button className="shadow-lg btn btn-warning">افزودن عکس </button>
        <button className="shadow-lg btn btn-primary">امضا مشتری </button>
      </div>
      <div className="text-center mt-5">
      <button className=" shadow-lg btn btn-success">ثبت و ارسال اطلاعات  </button>

      </div>
    </div>
  );
}

export default WriteWorks;
