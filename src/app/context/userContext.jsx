import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { errorMessage, successMessage } from "../../utils/message";
import {
  checkPhone,
  getProfile,
  registerUser,
  sendCode,
  verifyCode,
} from "../services/userService";
import SimpleReactValidator from "simple-react-validator";
import { addUser } from "../redux/actions/user";
import { context } from "./context";
import { useRef, useState } from "react";
import { errorMessage } from "../../utils/message";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { submitForm } from "../redux/actions/form";
import Swal from "sweetalert2";
// import { showLoading, hideLoading } from "react-redux-loading-bar";

const UserContext = ({ children }) => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [, forceUpdate] = useState();
  const dispatch = useDispatch();

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
        in: "• تکرار رمز مطابقت ندارد",
        integer: "• فرمت ورودی صحیح نمیباشد",
      },
      element: (messages) => (
        <p style={{ color: "red", fontSize: "13px", width: "100%" }}>
          {messages}
        </p>
      ),
    })
  );

  const handleCode = async (e) => {
    e.preventDefault();
    dispatch(submitForm());
    try {
      dispatch(showLoading());
      const { data, status } = await verifyCode({
        code: otp,
        phone_number: phone.length <= 0 ? localStorage.getItem("phone") : phone,
      });
      console.log(data);
      if (status === 200) {
        localStorage.setItem("access_token", data.access_Token);
        localStorage.setItem("refresh_token", data.refresh_Token);
        const { data: user } = await getProfile(data.access_Token);
        dispatch(addUser(user));
        if (data.role === "TechnicianAdmin") {
          history("/dashboard", { replace: true });
        }
        if (data.role === "Technician") {
          history("/technician", { replace: true });
        }
        dispatch(hideLoading());
      }
    } catch (error) {
      dispatch(hideLoading());
      if (error.response.status === 426) {
        history("/user-information");
        localStorage.setItem("access_token", error.response.data.access_Token);
        localStorage.setItem(
          "refresh_token",
          error.response.data.refresh_Token
        );
        history("/user-information");
      } else if (error.response.status === 400) {
        errorMessage("کد یا شماره تلفن نامعتبر است");
      } else if (error.response.status === 403) {
        localStorage.setItem("access_token", error.response.data.access_Token);
        localStorage.setItem(
          "refresh_token",
          error.response.data.refresh_Token
        );
        const res = await Swal.fire({
          title: "در انتظار تایید",
          text: "حساب کاربری شما هنوز تایید نشده است لطفا صبر کنید ! ",
          confirmButtonText: "خروج",
        });
        if (res) {
          history("/logout");
        }
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (validator.current.allValid()) {
        dispatch(submitForm());
        dispatch(showLoading());
        const { status } = await checkPhone(phone);
        if (status === 200) {
          localStorage.setItem("phone", phone);
          history("/confirm");
          dispatch(hideLoading());
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      dispatch(hideLoading());
      if (error.response.status === 400) {
        const res = await checkPhone(localStorage.getItem(phone));
        console.log(rex);
      }
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      profile_url:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      email: email,
      serialNumber: serialNumber,
      specialties: skillsList,
    };
    try {
      if (validator.current.allValid()) {
        dispatch(submitForm());
        dispatch(showLoading());

        const { status } = await registerUser(user);
        if (status === 200) {
          const token = localStorage.getItem("access_token");
          const { data: user } = await getProfile(token);
          dispatch(addUser(user));
          history("/technician", { replace: true });
          dispatch(hideLoading());
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      dispatch(hideLoading());
      if (error.response.status === 403) {
        const res = await Swal.fire({
          title: "در انتظار تایید",
          text: "حساب کاربری شما هنوز تایید نشده است لطفا صبر کنید ! ",
          confirmButtonText: "خروج",
        });
        if (res) {
          history("/logout");
        }
      }
    }
  };
  return (
    <context.Provider
      value={{
        phone,
        setPhone,
        handleLogin,
        otp,
        setOtp,
        handleCode,
        serialNumber,
        setSerialNumber,
        firstName,
        lastName,
        email,
        setEmail,
        setLastName,
        setFirstName,
        skillsList,
        setSkillsList,
        skill,
        setSkill,
        handleRegister,
        validator,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default UserContext;
