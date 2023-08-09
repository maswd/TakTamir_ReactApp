import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { successMessage } from "../../../utils/message";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "react-redux-loading-bar";

function Conect() {
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "• پر کردن این فیلد الزامی میباشد",
        min: "• کمتر از :min کارکتر نباید باشد ",
        numeric: "• شماره همراه صحیح نمی باشد",
        email: "• ایمیل وارد شده صحیح نمی باشد",
        phone: "• شماره وارد شده صحیح نمی باشد",
        regex: "• فرمت ورودی صحیح نمی باشد",
        max: "• حداکثر :max کارکتر باید باشد",
        integer: "• فرمت ورودی صحیح نمیباشد",
        alpha: "• فرمت ورودی صحیح نمی باشد",
      },
      element: (messages) => (
        <p
          style={{
            color: "red",
            fontSize: "13px",
            width: "100%",
            margin: "1rem 0",
          }}
        >
          {messages}
        </p>
      ),
    })
  );
  const [nameDevice, setNameDevice] = useState("");
  const [problems, setProblems] = useState("");
  const [description, setDescription] = useState("");
  const [, forceUpdate] = useState();
  const dispatch = useDispatch();
  const [customerDto, setCustomerDto] = useState({
    fullNameCustomer: "",
    phoneNumber: "",
    phone: "",
    address: "",
    identification_code: "",
  });
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      if (validator.current.allValid()) {
        const { status } = await axios.post(
          "https://taktamir.mohamadrezakiani.ir/api/Jobs",
          {
            name_Device: nameDevice,
            problems: problems,
            description: description,
            customerDto: customerDto,
          }
        );
        if (status === 201) {
          successMessage(" درخواست  شما با موفقیت ثبت شد !");
          setNameDevice("");
          setProblems("");
          setDescription("");
          setCustomerDto({
            fullNameCustomer: "",
            phoneNumber: "",
            phone: "",
            address: "",
            identification_code: "",
          });
          forceUpdate(0);
          dispatch(hideLoading());
          history("/", { replace: true });
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
        dispatch(hideLoading());
      }
    } catch (error) {
      dispatch(hideLoading());

      console.log(error);
    }
  };
  return (
    <section
      className="tem2-leadSec leadcapturetwo__section "
      style={{ overflowY: "scroll", height: "120vh", marginBottom: "3rem" }}
    >
      <img
        className="leadcapturetwo__bgdecoration"
        src="https://cdn.landin.ir/default/sections/images/leaf.svg"
      />
      <div className="container">
        <div className="row justify-content-md-center tem2-height-res">
          <div className="col-md-10">
            <div className="tem2-lead " style={{ padding: 0 }}>
              <div className="row">
                <div className="col-md-6">
                  <div className="tem2-title">
                    <h3 className="tem2-topic">همین حالا شروع کنید</h3>
                    <div className="tem2-desc color-links">
                      <p style={{ direction: "rtl" }}>
                        همین حالا درخواست مشاوره خود را ثبت کنید تا کارشناسان ما
                        در اسرع وقت با شما تماس بگیرند.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 leadcapturetwo__form-col">
                  <form
                    className="leadtwo-form lead__form"
                    onSubmit={handleSubmit}
                  >
                    <img
                      className="leadtwo__dots"
                      src="https://cdn.landin.ir/default/sections/images/dotsBig.svg"
                      alt=""
                    />
                    <svg
                      className="leadtwo__elipsis"
                      xmlns="http://www.w3.org/2000/svg"
                      width="294.306"
                      height="356.874"
                      viewBox="0 0 294.306 356.874"
                    >
                      <path
                        id="Shape"
                        className="cls-1"
                        d="M250.606,323.36c-63.245,87.387-137.236-17.393-197.174-73.074S-35.892,55.771,74.08,10.33c75.6-31.238,116.206,13.19,176.133,68.875S307.721,244.457,250.606,323.36Z"
                        transform="translate(0.002 0)"
                      ></path>
                    </svg>
                    <img
                      className="leadtwo__pattern"
                      src="https://cdn.landin.ir/default/sections/images/pattern2.svg"
                      alt=""
                    />
                    <div className="tem2-leadForm">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="field-text input-group">
                            <label className="text-nowrap text-xs">
                              نام دستگاه
                            </label>

                            <input
                              type="text"
                              value={nameDevice}
                              landin-type="text"
                              className="input text-right"
                              onChange={(e) => {
                                setNameDevice(e.target.value);
                                validator.current.showMessageFor("nameDevice");
                              }}
                            />
                          </div>
                          {validator.current.message(
                            "nameDevice",
                            nameDevice,
                            "required|alpha"
                          )}
                        </div>
                        <div className="col-md-12">
                          <div className="field-text input-group">
                            <label className="text-nowrap text-xs">
                              مشکل دستگاه
                            </label>
                            <input
                              type="text"
                              value={problems}
                              landin-type="text"
                              className="input text-right"
                              onChange={(e) => {
                                setProblems(e.target.value);
                                validator.current.showMessageFor("problems");
                              }}
                            />
                          </div>
                          {validator.current.message(
                            "problems",
                            problems,
                            "required|alpha|min:5"
                          )}
                        </div>
                        <div className="col-md-12">
                          <div className="field-text input-group">
                            <label className="text-nowrap text-xs">
                              توضیحات
                            </label>
                            <textarea
                              value={description}
                              type="text"
                              landin-type="text"
                              className="input text-right"
                              onChange={(e) => {
                                setDescription(e.target.value);
                                validator.current.showMessageFor("description");
                              }}
                            />
                          </div>
                          {validator.current.message(
                            "description",
                            description,
                            "required|alpha|min:10"
                          )}
                        </div>
                        <div className="col-md-12">
                          <div className="field-text input-group">
                            <label className="text-nowrap text-xs">
                              نام و نام خانوادگی
                            </label>
                            <input
                              value={customerDto.fullNameCustomer}
                              type="text"
                              landin-type="text"
                              className="input text-right"
                              onChange={(event) => {
                                setCustomerDto((prevCustomerDto) => ({
                                  ...prevCustomerDto,
                                  fullNameCustomer: event.target.value,
                                }));
                                validator.current.showMessageFor(
                                  "fullNameCustomer"
                                );
                              }}
                            />
                          </div>
                          {validator.current.message(
                            "fullNameCustomer",
                            customerDto.fullNameCustomer,
                            "required|alpha|min:5"
                          )}
                        </div>

                        <div className="col-md-12">
                          <div className="field-text input-group">
                            <label className="text-nowrap text-xs">
                              شماره ثابت
                            </label>
                            <input
                              value={customerDto.phone}
                              type="tel"
                              landin-type="tel"
                              className="input"
                              onChange={(event) => {
                                setCustomerDto((prevCustomerDto) => ({
                                  ...prevCustomerDto,
                                  phone: event.target.value,
                                }));
                                validator.current.showMessageFor("phone");
                              }}
                            />
                          </div>
                          {validator.current.message(
                            "phone",
                            customerDto.phone,
                            "required|integer|min:11|max:11"
                          )}
                        </div>
                        <div className="col-md-12">
                          <div className="field-text input-group">
                            <label className="text-nowrap text-xs">
                              شماره همراه
                            </label>
                            <input
                              value={customerDto.phoneNumber}
                              type="tel"
                              landin-type="tel"
                              className="input"
                              onChange={(event) => {
                                setCustomerDto((prevCustomerDto) => ({
                                  ...prevCustomerDto,
                                  phoneNumber: event.target.value,
                                }));
                                validator.current.showMessageFor("phone");
                              }}
                            />
                          </div>
                          {validator.current.message(
                            "phone",
                            customerDto.phoneNumber,
                            "required|regex:09|numeric|min:11|max:11"
                          )}
                        </div>
                        <div className="col-md-12">
                          <div className="field-text input-group">
                            <label className="text-nowrap text-xs">
                              کد ملی
                            </label>
                            <input
                              value={customerDto.identification_code}
                              type="tel"
                              landin-type="tel"
                              className="input"
                              onChange={(event) => {
                                setCustomerDto((prevCustomerDto) => ({
                                  ...prevCustomerDto,
                                  identification_code: event.target.value,
                                }));
                                validator.current.showMessageFor(
                                  "identification_code"
                                );
                              }}
                            />
                          </div>
                          {validator.current.message(
                            "identification_code",
                            customerDto.identification_code,
                            "required|numeric|min:10|max:10"
                          )}
                        </div>
                        <div className="col-md-12">
                          <div className="field-text input-group">
                            <label className="text-nowrap text-xs">ادرس </label>
                            <textarea
                              value={customerDto.address}
                              type="text"
                              className="input"
                              onChange={(event) => {
                                setCustomerDto((prevCustomerDto) => ({
                                  ...prevCustomerDto,
                                  address: event.target.value,
                                }));
                                validator.current.showMessageFor("address");
                              }}
                            />
                          </div>
                          {validator.current.message(
                            "address",
                            customerDto.address,
                            "required|min:10|"
                          )}
                        </div>
                      </div>
                      <div className="lead_errors"></div>
                      <div className="tem2-action">
                        <button
                          type="submit"
                          className="leads-submit btn btn-primary leadtwo__button"
                        >
                          <span className="leadtwo__button-text">
                            ارسال درخواست
                          </span>
                          <div className="leadtwo__icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13.415"
                              height="11.159"
                              viewBox="0 0 13.415 11.159"
                            >
                              <path
                                d="M401.6,445.493l-.008-7.768a.917.917,0,0,0-.917-.917h-.01l-5.622.056a3,3,0,0,0-2.96,2.99v3.884a2.385,2.385,0,1,0-1.709,4.22c.067.005.133.008.2.008a2.387,2.387,0,0,0,2.374-2.191,2.446,2.446,0,0,0,.006-.264c0-.006,0-.011,0-.017v-5.64a2.124,2.124,0,0,1,2.1-2.117l5.622-.056s.023,0,.031.013a.042.042,0,0,1,.013.031l.006,5.924a2.385,2.385,0,1,0,.875,1.844h0Zm-10.05,1.242a1.513,1.513,0,1,1-.98-2.667c.041,0,.083,0,.125.005a1.513,1.513,0,0,1,.855,2.662Zm7.665.273a1.513,1.513,0,1,1,1.513-1.513h0A1.515,1.515,0,0,1,399.215,447.007Z"
                                transform="translate(-388.186 -436.808)"
                                fill="#fff"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conect;
