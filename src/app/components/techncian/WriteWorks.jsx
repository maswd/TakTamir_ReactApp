import React, { useState } from "react";
import CustomerInfo from "./componentsTech/CustomerInfo";
import Subscription from "./componentsTech/Subscription";
import UsedCase from "./componentsTech/UsedCase";

function WriteWorks() {
  const [amount, setAmount] = useState("");
  const [items, setItems] = useState([{ name: "", price: "" }]);
  const [nationalCode, setNationalCode] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [hasSubscription, setHasSubscription] = useState(false);

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
 
  const handleNationalCodeChange = (event) => {
    setNationalCode(event.target.value);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setHasSubscription(event.target.checked);
  };
  const handleSubmit=()=>{

  }
  return (
    <div className="mt-1">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <div className="col-md-6">
          <div className=" mb-md-0 rounded text-dark p-3">
            <div className="w-100 text-center">
              <label htmlFor="amount" className="form-label text-right h4">
                مبلغ دریافتی:
              </label>
              <img
                className="img-responsive mx-2  w-75 h-75"
                src="/img/undraw_savings_re_eq4w.svg"
                alt=""
              />
              <input
                type="tel"
                className="form-control mt-2 shadow-sm w-100 "
                id="amount"
                placeholder="مبلغ دریافتی را وارد کنید "
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <CustomerInfo
            handler={{
              nationalCode,
              setNationalCode,
              jobDescription,
              setJobDescription,
              handleNationalCodeChange,
              handleJobDescriptionChange,
            }}
          />
        </div>
      </div>

      <UsedCase
        handleItemChange={handleItemChange}
        items={items}
        handleAddItem={handleAddItem}
      />
      <div className="col-md-12 mt-3 py-1 mx-auto  ">
        <Subscription handler={{ hasSubscription, handleCheckboxChange }} />
      </div>
      <div className="col-md-12 mx-auto ">
        {/* <div className=" mt-3 d-flex justify-content-evenly g-3 ">
          <button className="shadow-sm  btn w-50 btn-danger">افزودن عکس</button>
          <button className="shadow-sm  btn w-50 btn-primary">
            امضا مشتری
          </button>
        </div> */}
        <div className="text-center mt-3">
          <button onClick={handleSubmit} className=" w-100 shadow-sm btn btn-success">
            ثبت و ارسال اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteWorks;
