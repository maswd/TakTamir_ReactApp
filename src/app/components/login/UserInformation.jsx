import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UserInformation() {
  const registerContext = useContext(context);
  const {
    serialNumber,
    setSerialNumber,
    firstName,
    lastName,
    email,
    setEmail,
    setLastName,
    setFirstName,
    setSkillsList,
    skillsList,
    skill,
    validator,
    setSkill,
    handleRegister,
  } = registerContext;

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };
  const handleSkillDelete = (index) => {
    const newList = skillsList.filter((_, i) => i !== index);
    setSkillsList(newList);
  };
  const handleSkillSubmit = () => {
    if (skill.trim()) {
      setSkillsList([...skillsList, { name: skill.trim() }]);
      setSkill("");
    }
  };
  const token = localStorage.getItem("access_token");
  const user = useSelector((state) => state.user);
  const history = useNavigate();
  useEffect(() => {
    if (!token && user) {
      history("/login", { replace: true });
    }
  }, [history]);

  return (
    <>
      <div className="container">
        <div className="col-xl-10 col-lg-12 col-md-9 mx-auto ">
          <div className="card o-hidden border-0  my-2">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-12 col-lg-6  d-block bg-login-image w-25">
                  <div className="text-center ">
                    <h1 className="h4 text-gray-900  mt-4">تکمیل اطلاعات</h1>
                  </div>
                </div>
                <div className="col-12 col-lg-6 ">
                  <div className="px-lg-5 px-3 my-lg-5 ">
                    <form className="user" onSubmit={handleRegister}>
                      <div>
                        <label htmlFor="firstName" className="text-xs">
                          نام
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          className="form-control form-control-user  mb-1"
                          id="firstName"
                          name="firstname"
                          aria-describedby="phoneHelp"
                          placeholder=" نام خود را وارد کنید"
                          autoComplete="firstname"
                          onChange={(e) => {
                            setFirstName(e.target.value);
                            validator.current.showMessageFor("firstName");
                          }}
                        />
                        {validator.current.message(
                          "firstName",
                          firstName,
                          "required|min:3"
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="text-xs">
                          نام خانوادگی
                        </label>
                        <input
                          type="text"
                          value={lastName}
                          className="form-control form-control-user  mb-1"
                          id="lastName"
                          aria-describedby="phoneHelp"
                          placeholder=" نام خانوادگی خود را وارد کنید"
                          name="lastname"
                          autoComplete="lastname"
                          onChange={(e) => {
                            setLastName(e.target.value);
                            validator.current.showMessageFor("lastName");
                          }}
                        />
                        {validator.current.message(
                          "lastName",
                          lastName,
                          "required|min:3"
                        )}
                      </div>
                      <div>
                        <label htmlFor="fullname" className="text-xs">
                          کدملی
                        </label>

                        <input
                          value={serialNumber}
                          className="form-control form-control-user  mb-1"
                          id="NationalCode"
                          name="NationalCode"
                          autoComplete="NationalCode"
                          onChange={(e) => {
                            setSerialNumber(e.target.value);
                            validator.current.showMessageFor("serialNumber");
                          }}
                          placeholder=" کد ملی خود را وارد کنید"
                        />
                        {validator.current.message(
                          "serialNumber",
                          serialNumber,
                          "required|max:10|min:10"
                        )}
                      </div>
                      <div>
                        <label htmlFor="fullname" className="text-xs">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-user  mb-1"
                          id="email"
                          name="email"
                          autoComplete="email"
                          placeholder=" ایمیل خود را وارد کنید"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            validator.current.showMessageFor("email");
                          }}
                        />
                        {validator.current.message(
                          "email",
                          email,
                          "required|email"
                        )}
                      </div>
                      <div>
                        <label htmlFor="fullname" className="text-xs">
                          تخصص
                        </label>

                        <div className="input-group">
                          <input
                            type="text"
                            className="rounded-pill- form-control form-control-user"
                            id="skil"
                            placeholder="تخصص  خود را وارد کنید"
                            value={skill}
                            style={{ borderRadius: " 0  50px 50px 0 " }}
                            name="skill"
                            autoComplete="skill"
                            onChange={(e) => {
                              setSkill(e.target.value);
                              validator.current.showMessageFor("skillsList");
                            }}
                          />
                          <div className="input-group-append">
                            <button
                              type="button"
                              className=" btn btn-success rounded-pill-left "
                              onClick={handleSkillSubmit}
                            >
                              افزودن
                            </button>
                          </div>
                        </div>
                        {validator.current.message(
                          "skillsList",
                          skillsList,
                          "required"
                        )}
                      </div>
                      {skillsList.length !== 0 && (
                        <ul className="mt-3 animated--grow-in list-inline d-flex w-100 flex-wrap ">
                          <small>تخصص ها :</small>
                          {skillsList.map((item, index) => (
                            <li
                              className="mx-2  mb-1 border rounded-pill px-2 animated--fade-in"
                              key={index}
                            >
                              <span>{item.name}</span>
                              <button
                                className="btn btn-sm"
                                type="button"
                                onClick={() => handleSkillDelete(index)}
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}

                      <hr />
                      <button
                        type="submit"
                        className="btn btn-warning btn-user btn-block mb-4 shadow-sm"
                      >
                        ثبت اطلاعات
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformation;
