import React, { useState } from "react";
import Slider from "react-slick";
import { getStatusClass, getStatusText } from "../../../../utils/convertor";
import { useEffect } from "react";
import {
  WorkConfirmationService,
  WorkRejectService,
} from "../../../services/adminService";
import {
  confirmMessage,
  errorMessage,
  successMessage,
} from "../../../../utils/message";
export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: -35,
        left: -5,
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: -35,
        left: 55,
      }}
      onClick={onClick}
    />
  );
}

const DynamicSlides = ({ data, handleReject, handleAccept }) => {
  console.log(data);
  const [slides, setSlides] = useState(data);
  useEffect(() => {
    setSlides(slides);
  }, [data]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const accept = async (id) => {
    try {
      const result = await confirmMessage("آیا برای تایید کردن مطمئن هستید ؟");
      if (result) {
        const { status } = await WorkConfirmationService(id);
        if (status === 200) {
          handleAccept(id);
        }
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !");
      console.log(error);
    }
  };
  const reject = async (id) => {
    try {
      const result = await confirmMessage("آیا برای رد کردن مطمئن هستید ؟");
      if (result) {
        const { status } = await WorkRejectService(id);
        if (status === 200) {
          handleReject(id);
        }
      }
    } catch (error) {
      errorMessage("مشکلی رخ داده است !");
      console.log(error);
    }
  };
  return (
    <div className="container mb-3 mt-3 ">
      <Slider {...settings}>
        {slides.map((i, jj) => (
          <div
            key={jj}
            className={`d-flex justify-content-between align-items-center"`}
          >
            <div
              className={`${
                handleAccept ? "d-flex" : "d-none"
              }  flex-column ml-2 align-self-center align-items-center `}
            >
              <button
                onClick={() => accept(i.id)}
                className={`btn  mb-3 btn-light  shadow-sm text-nowrap  border ${
                  handleAccept ? "d-block" : "d-none"
                }`}
              >
                تایید کردن
              </button>
              <button
                onClick={() => reject(i.id)}
                className={`btn btn-danger shadow-sm  ${
                  handleReject ? "d-block" : "d-none"
                }`}
              >
                رد کردن
              </button>
            </div>

            {i.jobs.map((i) => (
              <div
                key={i.id}
                className={` text-right justify-content-between d-flex align-items-center  px-2 mb-2 mr-1 ${
                  handleAccept ? "" : "w-100"
                }  rounded border-bottom border-${getStatusClass(
                  i.statusJob
                )} `}
                style={{ direction: "rtl" }}
              >
                <div className="">
                  <p> نام دستگاه : {i.name_Device}</p>
                  <p> مشکل : {i.problems}</p>
                  <p> نام مشتری : {i.customer.fullNameCustomer}</p>
                  <p> شماره همراه : {i.customer.phoneNumber}</p>
                  <p> شماره ثابت : {i.customer.phone}</p>
                  <p className="text-right">آدرس : {i.customer.address}</p>
                </div>
                {!handleAccept && !handleReject && (
                  <button
                    className={`btn text-nowrap btn-${getStatusClass(
                      i.statusJob
                    )} align-self-center`}
                  >
                    {getStatusText(i.statusJob)}
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DynamicSlides;
