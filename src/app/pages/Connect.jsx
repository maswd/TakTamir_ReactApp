import React from "react";
import axios from "axios";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { errorMessage } from "../../utils/message";

const validationSchema = Yup.object().shape({
  nameDevice: Yup.string().required("• نام دستگاه را وارد کنید."),
  problems: Yup.string().required("• مشکل دستگاه را وارد کنید."),
  description: Yup.string().required("• توضیحات را وارد کنید."),
  customerDto: Yup.object().shape({
    fullNameCustomer: Yup.string().required(
      "• نام و نام خانوادگی را وارد کنید."
    ),
    phone: Yup.string()
      .matches(/^0[1-9]\d{9}$/, "• شماره ثابت را به درستی وارد کنید.")
      .required("• شماره ثابت را وارد کنید."),
    phoneNumber: Yup.string()
      .matches(/^(?:0|98|\+98)?9\d{9}$/, "• شماره همراه را به درستی وارد کنید.")
      .required("• شماره همراه را وارد کنید."),
    identification_code: Yup.string()
      .matches(/^\d{10}$/, "• کد ملی را به درستی وارد کنید.")
      .required("• کد ملی را وارد کنید."),
    address: Yup.string().required("• آدرس را وارد کنید."),
  }),
});

const initialValues = {
  nameDevice: "",
  problems: "",
  description: "",
  customerDto: {
    fullNameCustomer: "",
    phone: "",
    phoneNumber: "",
    identification_code: "",
    address: "",
  },
};

const ExampleForm = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      dispatch(showLoading());
      const { status } = await axios.post(
        "https://taktamir.mohamadrezakiani.ir/api/Jobs",
        values
      );
      if (status === 201) {
        successMessage(" درخواست  شما با موفقیت ثبت شد !");
        dispatch(hideLoading());
        initialValues();
        resetForm();
        history("/", { replace: true });
      }
    } catch (error) {
      // resetForm();
      errorMessage("مشکلی از سمت سرور رخ داده است");
      dispatch(hideLoading());
    }
  };

  return (
    <section className="tem2-leadSec leadcapturetwo__section mx-auto w-100 ">
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
                      <Link className="btn mt-3" to="/">
                        برو به صفحه اصلی
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 leadcapturetwo__form-col">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form className="leadtwo-form lead__form">
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

                              <Field
                                type="text"
                                id="nameDevice"
                                name="nameDevice"
                                className="input text-right"
                              />
                            </div>
                            <ErrorMessage
                              name="nameDevice"
                              component="p"
                              className="error animated--grow-in"
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="field-text input-group">
                              <label className="text-nowrap text-xs">
                                مشکل دستگاه
                              </label>
                              <Field
                                type="text"
                                id="problems"
                                name="problems"
                                className="input text-right"
                              />
                            </div>
                            <ErrorMessage
                              name="problems"
                              component="p"
                              className="error animated--grow-in"
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="field-text input-group">
                              <label className="text-nowrap text-xs">
                                توضیحات
                              </label>
                              <Field
                                as="textarea"
                                id="description"
                                name="description"
                                style={{ minHeight: "58px" }}
                                className="input text-right"
                              />
                            </div>
                            <ErrorMessage
                              name="description"
                              component="p"
                              className="error animated--grow-in"
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="field-text input-group">
                              <label className="text-nowrap text-xs">
                                نام و نام خانوادگی
                              </label>
                              <Field
                                type="text"
                                id="fullNameCustomer"
                                name="customerDto.fullNameCustomer"
                                className="input text-right"
                              />
                            </div>
                            <ErrorMessage
                              name="customerDto.fullNameCustomer"
                              component="p"
                              className="error animated--grow-in"
                            />
                          </div>

                          <div className="col-md-12">
                            <div className="field-text input-group">
                              <label className="text-nowrap text-xs">
                                شماره ثابت
                              </label>
                              <Field
                                type="text"
                                id="phone"
                                name="customerDto.phone"
                                className="input"
                              />
                            </div>
                            <ErrorMessage
                              name="customerDto.phone"
                              component="p"
                              className="error animated--grow-in"
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="field-text input-group">
                              <label className="text-nowrap text-xs">
                                شماره همراه
                              </label>
                              <Field
                                type="text"
                                id="phoneNumber"
                                name="customerDto.phoneNumber"
                                className="input"
                              />
                            </div>
                            <ErrorMessage
                              name="customerDto.phoneNumber"
                              component="p"
                              className="error animated--grow-in"
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="field-text input-group">
                              <label className="text-nowrap text-xs">
                                کد ملی
                              </label>
                              <Field
                                type="text"
                                id="identification_code"
                                name="customerDto.identification_code"
                                className="input"
                              />
                            </div>
                            <ErrorMessage
                              name="customerDto.identification_code"
                              component="p"
                              className="error animated--grow-in"
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="field-text input-group">
                              <label className="text-nowrap text-xs">
                                آدرس
                              </label>
                              <Field
                                as="textarea"
                                id="address"
                                name="customerDto.address"
                                style={{ minHeight: "58px" }}
                                className="input"
                              />
                            </div>
                            <ErrorMessage
                              name="customerDto.address"
                              component="p"
                              className="error animated--grow-in"
                            />
                          </div>
                        </div>
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
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleForm;
