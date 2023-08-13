import React from "react";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <section id="dv-createLandin">
      <div className="container w-100 py-5 my-5">
        <div className="row justify-content-center position-relative mt-5 ">
          <div
            className="w-100 dv-path d-none d-xl-inline-block"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src="/img/path.svg"
              style={{ filter: "hue-rotate(271deg)" }}
              className="img-fluid"
              alt="pic"
              draggable="false"
            />
          </div>
          <div className="col-11 col-md-12 ">
            <div className="d-flex align-items-start">
              <div className="d-flex">
                <h3 className="how-to__create text-nowrap">
                  چطور
                  <span
                    style={{ filter: "hue-rotate(271deg)" }}
                    className="highlight mx-1 "
                  >
                    تعمیرکار تک تعمیر
                  </span>
                  شوید ؟
                </h3>
              </div>
            </div>
          </div>
          <div
            className="col-9 col-sm-6 col-lg-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="card border-0 dv-createLandin dv-createLandin1">
              <img
                src="/img/step1.svg"
                style={{ filter: "hue-rotate(271deg)" }}
                className="img-fluid"
                alt="ثبت نام"
                draggable="false"
              />
              <div className="d-flex">
                <span>۱. </span> <h4>ثبت نام</h4>
              </div>
              <p>
                از طریق شماره همراه خود با ثبت یک ایمیل و نام و همچنین اطلاعات
                تخصص خود در عرض چند ثانیه در تک تعمیر اکانت بسازید.
              </p>
            </div>
          </div>

          <div
            className="col-9 col-sm-6 col-lg-4"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="card border-0 dv-createLandin dv-createLandin2">
              <img
                src="/img/create-landing-page.svg"
                style={{ filter: "hue-rotate(271deg)" }}
                className="img-fluid"
                alt="ساخت لندینگ پیج"
                draggable="false"
              />
              <div className="d-flex">
                <span>۲. </span> <h4> احراز هویت توسط ادمین</h4>
              </div>
              <p>
                پس از تایید شما از طرف ادمین میتوانید به حساب خود وارد شوید و در
                حوزه تخصص خود شغل انتخاب کنید .
              </p>
            </div>
          </div>
          <div
            className="col-9 col-sm-6 col-lg-4"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="card border-0 dv-createLandin dv-createLandin3">
              <img
                src="/img/step3.svg"
                className="img-fluid "
                style={{ filter: "hue-rotate(271deg)" }}
                alt="اتصال به سایر ابزارها"
                draggable="false"
              />
              <div className="d-flex">
                <span>۳.</span> <h4>درآمدزایی با تخصص مربوط به خودتان </h4>
              </div>
              <p>
                شغل دلخواه خود را انتخاب کرده و در صفحه سفارشات وضعیت سفارش خود
                را پیگیری کنید و همچنین شما قادر خواهید بود با پشتیبان مکالمه
                کنید و در نهایت درآمد کسب کنید
              </p>
            </div>
          </div>
        </div>
        <Link
          style={{ background: "rgb(2, 195, 154)", color: "fff"  }}
          className="btn btn-primary hover shadow border-0  mt-5  w-100 "
          to="/login"
        >
          همین الان تکنسین شو !
        </Link>
      </div>
    </section>
  );
};

export default Create;
