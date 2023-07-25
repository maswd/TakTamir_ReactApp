import React, { useState } from "react";
import CustomerInfo from "./CustomerInfo";
import Subscription from "./Subscription";
import UsedCase from "./UsedCase";

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
    <div className="mt-1">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
          <div className="mb-3 mb-md-0 rounded text-dark  p-3 shadow-sm">
            <div className="text-center">
              <img
                className="img-responsive w-75 h-75"
                src="/img/undraw_savings_re_eq4w.svg"
                alt=""
              />
            </div>
            <label htmlFor="amount" className="form-label">
              مبلغ دریافتی:
            </label>
            <input
              type="number"
              className="form-control mt-2 "
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <div className="col-md-5">
        <CustomerInfo />
        </div>
      </div>
        
        <UsedCase
            handleItemChange={handleItemChange}
            items={items}
            handleAddItem={handleAddItem}
          />
      <div className="col-md-10 mt-3 py-1 mx-auto shadow-sm rounded">
        <Subscription />
        </div>
      <div className="col-md-10 mx-auto ">
        <div className=" mt-3 d-flex justify-content-evenly g-3 ">
          <button className="shadow-sm  btn w-50 btn-warning">افزودن عکس</button>
          <button className="shadow-sm  btn w-50 btn-primary">امضا مشتری</button>
        </div>
        <div className="text-center mt-3">
          <button className=" w-100 shadow-sm btn btn-success">
            ثبت و ارسال اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteWorks;
