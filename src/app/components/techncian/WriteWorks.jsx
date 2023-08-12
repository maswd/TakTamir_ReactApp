import React, { useState } from "react";
import CustomerInfo from "./componentsTech/CustomerInfo";
import Subscription from "./componentsTech/Subscription";
import UsedCase from "./componentsTech/UsedCase";
import { endJobService } from "../../services/jobsService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { successMessage } from "../../../utils/message";

function WriteWorks() {
  const [amount, setAmount] = useState();
  const [items, setItems] = useState([{ name: "", price: "" }]);
  const [nationalCode, setNationalCode] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [hasSubscription, setHasSubscription] = useState(false);
  const orderID = localStorage.getItem("orderid");
  const name_Device = localStorage.getItem("name_Device");
  const customer = localStorage.getItem("customer");
  const navigate = useNavigate();
  useEffect(() => {
    if (!orderID || !name_Device || !customer) {
      navigate("/technician/orders", { replace: true });
    }
  }, [navigate, orderID, name_Device, customer]);

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
    setHasSubscription(event);
  };
  const handleSubmit = async () => {
    const state = {
      descriptionOrder: jobDescription,
      spent: parseInt(amount),
      name_Device: name_Device,
      usedTokcet: hasSubscription,
      suppliessDtos: items,
      CodemeliiCustomer:nationalCode
    };
    try {
      const { status } = await endJobService(orderID, state);
      if (status === 200) {
        localStorage.removeItem("name_Device");
        localStorage.removeItem("orderid");
        localStorage.removeItem("customer");
        successMessage("ثبت کار با موفقیت انجام شد !")
        navigate("/technician/orders", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-1">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <p className="my-4 text-gray-900 font-weight-bold text__title-medium">
          نام مشتری : {name_Device}
          <p className="d-inline-block mr-3"> نام دستگاه :‌ {customer}</p>
        </p>

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
          <button
            onClick={handleSubmit}
            className=" w-100 shadow-sm btn btn-success"
          >
            ثبت و ارسال اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteWorks;
