import React, { useState } from "react";
import Slider from "react-slick";
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

const DynamicSlides = ({ data, handleAccept, handleReject }) => {
  const [slides, setSlides] = useState(data);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container py-3 ">
      <Slider {...settings}>
        {slides.map((i, jj) => (
          <div
            key={jj}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex flex-column">
              <button
                onClick={() => handleAccept(i[0].id)}
                className="btn  mb-3 btn-light  shadow-sm  border "
              >
                تایید کردن
              </button>
              <button
                onClick={() => handleReject(i[0].id)}
                className="btn   btn-danger shadow-sm"
              >
                رد کردن
              </button>
            </div>
            <div
              className="border-right text-right border-info px-2 mb-2"
              style={{ direction: "rtl" }}
            >
              <p> نام دستگاه : {i[0].name_Device}</p>
              <p> مشکل : {i[0].problems}</p>
              <p> نام مشتری : {i[0].customer.fullNameCustomer}</p>
              <p> شماره همراه : {i[0].customer.phoneNumber}</p>
              <p> شماره ثابت : {i[0].customer.phone}</p>
              <p className="text-right"> آدرس : {i[0].customer.address}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DynamicSlides;
