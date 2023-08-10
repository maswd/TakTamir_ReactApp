import React from "react";
import normalCircle from "/img/normal-circle.svg";
import ring from "/img/ring.svg";
import ten from "/img/khadamat.png";
import dotsPattern from "/img/dots-pattern.svg";
import Request from "../common/Request";
function Hero() {
  return (
    <div id="text">
      <section data-aos="fade-right" className="textthree__section forPadding">
        <div className="container">
          <div className="row justify-content-center align-items-center textthree-row textthree-position-right">
            <div className="col-md-10 col-lg-7 textthree-texts">
              <div className="textthree-texts__wrapper">
                <div className="textthree-texts__title">
                  با تک تعمیر ، بهترین شرکت تعمیر لوازم خانگی در منزل
                  <img src={dotsPattern} />
                </div>
                <div className="textthree-texts__desc color-links">
                  <p
                    data-aos="fade-zoom-in"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    آیا بارها تجربه کرده‌اید که لوازم خانگی شما مدت کوتاهی پس از
                    تعمیر، مجدداً خراب شوند و هزینه‌های تعمیرات را افزایش دهند؟
                    آیا می‌خواهید تعمیر لوازم خانگی را با نظارت کامل در منزل خود
                    انجام داده و از کیفیت قطعات استفاده شده مطمئن شوید؟ با تک
                    تعمیر، بهترین شرکت تعمیر لوازم خانگی در منزل، این امکان را
                    دارید.
                  </p>
                </div>
                <div className="textthree-texts__buttons">
                  <Request
                    text={
                      "w-100 textthree-texts__buttonOne "
                    }
                    link={"/request"}
                    hide
                  />
                  <div className="textthree-texts__buttonTwo">
                    <div>اطلاعات بیشتر</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-4 textthree-img">
              <div
                className="textthree-img__wrapper"
                style={{ transform: "scale(1)" }}
              >
                <div
                  className="textthree-img__bg"
                  style={{ background: "transparent" }}
                >
                  <img src={ten} />
                  <div className="textthree-img__shapes">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70.527"
                      height="57.153"
                      viewBox="0 0 70.527 57.153"
                    >
                      <g
                        id="Group_379"
                        data-name="Group 379"
                        transform="translate(-526.982 -550.932)"
                      >
                        <path
                          id="Path_9"
                          data-name="Path 9"
                          d="M8745.216,1299.993s12.319-9.654,20.437-9.032,10.119,2.97,13.314,5.4,10.623,9.352,24.639,3.635c.072.1,7.1-3.627,9.444-6.134"
                          transform="translate(-8217 -738)"
                          fill="none"
                          stroke="#d72829"
                          strokeWidth="4"
                        ></path>
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M8745.216,1299.993s12.319-9.654,20.437-9.032,10.119,2.97,13.314,5.4,10.623,9.352,24.639,3.635c.072.1,7.1-3.627,9.444-6.134"
                          transform="translate(-8217 -717)"
                          fill="none"
                          stroke="#d72829"
                          strokeWidth="4"
                        ></path>
                        <path
                          id="Path_11"
                          data-name="Path 11"
                          d="M8745.216,1299.993s12.319-9.654,20.437-9.032,10.119,2.97,13.314,5.4,10.623,9.352,24.639,3.635c.072.1,7.1-3.627,9.444-6.134"
                          transform="translate(-8217 -696)"
                          fill="none"
                          stroke="#d72829"
                          strokeWidth="4"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="textthree-bgBox"></div>
            <div className="textthree-up-circle">
              <img src={normalCircle} />
            </div>
            <div className="textthree-down-circle">
              <img src={normalCircle} />
            </div>
            <div className="textthree-down-ring">
              <img src={ring} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
