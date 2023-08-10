import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequsets } from "../../redux/actions/admin";
import { useEffect } from "react";
import Pagination from "../common/Pagination";
import CardRequests from "./cards/CardRequests";

import {
  confirmMessage,
  errorMessage,
  successMessage,
} from "../../../utils/message";
import {
  WorkConfirmationService,
  WorkRejectService,
} from "../../services/adminService";
import Slider from "react-slick";
import DynamicSlides from "./cards/Slider";

const Requests = () => {
  const requests = useSelector((state) => state.admin.requests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRequsets(1));
  }, [dispatch]);
  const data = [
    { id: 1, title: "مورچه", description: "یک حشره کوچک" },
    { id: 2, title: "پرنده", description: "یک حیوان هوازی" },
    { id: 3, title: "مار", description: "یک جانور خزنده" },
    { id: 4, title: "خرگوش", description: "یک جانور پستاندار" },
    { id: 5, title: "ماهی", description: "یک حیوان آبزی" },
  ];
  const handleAccept = async (id) => {
    console.log(id);
    try {
      const result = await confirmMessage();
      console.log(result);
      if (result) {
        const { status } = await WorkConfirmationService(id);
        console.log(status);
        if (status === 200) {
          successMessage(" کار تکنسین با موفقیت تایید شد !");
          dispatch(getAllRequsets(1));
        }
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !");
      console.log(error);
    }
  };
  const handleReject = async (id) => {
    console.log(id);

    try {
      const result = await confirmMessage();
      console.log(result);
      if (result) {
        const { status } = await WorkRejectService(id);
        if (status === 200) {
          successMessage("کار با موفیقت رد شد  !");
          dispatch(getAllRequsets(1));
        }
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !");
      console.log(error);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" card shadow mb-4 p-2">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            درخواست تکنسین ها برای کار
          </h6>{" "}
        </div>
        <div className="">
          <div className="col-sm-12 col-md-6">
            <label>
              جستجو:
              <input
                type="search"
                className="form-control form-control-sm mr-1"
                placeholder=""
                aria-controls="dataTable"
              />
            </label>
          </div>
        </div>
        <div className="py-2">
          <div className="d-flex flex-wrap">
            {requests.map((item, index) => (
              <CardRequests
                key={index}
                {...item}
                handleAccept={handleAccept}
                handleReject={handleReject}
              />
            ))}
          </div>
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default Requests;
