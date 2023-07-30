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
// import { showLoading, hideLoading } from "react-redux-loading-bar";

const UserContext = ({ children }) => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [token, setToken] = useState([]);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [, forceUpdate] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [register, setRegister] = useState("");
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

  // useEffect(() => {
  //     return () => {
  //         setEmail()
  //         setPhone()
  //         setPassword()
  //         setConfirmPassword()
  //         setPolicy()

  //     }
  // }, [])

  // const handleDelete = async (e) => {
  //   try {
  //     dispatch(showLoading());
  //     const { data, status } = await DeleteProfilePicture();
  //     const { data: token, message } = data.details;
  //     if (status === 200) {
  //       localStorage.setItem("token", token);
  //       successMessage(message);
  //       let user = [token, decodeToken(token)];
  //       dispatch(updateUser(user));
  //       dispatch(hideLoading());
  //     }
  //   } catch (err) {
  //     errorMessage(err.response.data.details.message);
  //     err.response.data.details.data.map((er) => errorMessage(er));
  //     dispatch(hideLoading());
  //   }
  // };

  // const handleCheck = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { status } = await checkPhone({ phone: phone });
  //     if (status === 200) {
  //       setState({ passwordConfirm: true });
  //     }
  //   } catch (error) {
  //     if (error.response.status === 404) {
  //       setState({ code: true });
  //       const res = await sendCode({ phone: phone });
  //     }
  //   }
  // };
  const handleCode = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      const { data, status } = await verifyCode({
        code: otp,
        phone_number: phone.length <= 0 ? localStorage.getItem("phone") : phone,
      });

      if (status === 200) {
        localStorage.setItem("access_token", data.access_Token);
        localStorage.setItem("refresh_token", data.refresh_Token);
        const { data:user } = await getProfile(data.access_Token);
        dispatch(addUser(user));
        history("/technician", { replace: true });
      }
    } catch (error) {
      if (error.response.status === 426) {
        localStorage.setItem("access_token", error.response.data.access_Token);
        localStorage.setItem(
          "refresh_token",
          error.response.data.refresh_Token
        );
        history("/user-information");
      } else if (error.response.status === 400) {
        errorMessage("کد یا شماره تلفن نامعتبر است");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (validator.current.allValid()) {
        const { status } = await checkPhone(phone);
        if (status === 200) {
          localStorage.setItem("phone", phone);
          history("/confirm");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
      //   const tokens = data.details.data.tokens;
      //   const accessToken = tokens.accessToken;
      //   const refreshToken = tokens.refreshToken;
      //   localStorage.setItem("accessToken", accessToken);
      //   localStorage.setItem("refreshToken", refreshToken);
      //   if (status === 200) {
      //     const { data } = await getProfile(accessToken);
      //     const role = data.details.data.user.role;
      //     const { data: profile } = await getProfilePicture(
      //       data.details.data.user.profile.pictureId
      //     );
      //     dispatch(addUser(data.details.data, profile.details.data.file.path));
      //     if (role === "admin") {
      //       history("/dashboard", { replace: true });
      //     } else history("/new-posts/createpost", { replace: true });
      //     successMessage("ورود با موفیقت انجام شد");
      //     dispatch(hideLoading());
      // }
      // } else {
      //     validator.current.showMessages()
      //     forceUpdate(1)
      //   }
    } catch (error) {
      if (error.response.status === 400) {
        const res = await checkPhone(localStorage.getItem(phone));
        console.log(rex);
      }
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
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
        const res = await registerUser(user);
        console.log(res);
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {}
  };
  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const user = {
  //     email: email,
  //     phone: phone,
  //     password: password === "" ? undefined : password,
  //   };
  //   try {
  //     if (validator.current.allValid()) {
  //       dispatch(showLoading());
  //       const { status, data } = await updateUserProfile(user);
  //       const { message, data: token } = data.details;
  //       if (status === 200) {
  //         localStorage.setItem("token", token);
  //         let user = [token, decodeToken(token)];
  //         dispatch(updateUser(user));
  //         dispatch(hideLoading());
  //       }
  //     } else {
  //       validator.current.showMessages();
  //       forceUpdate(1);
  //     }
  //   } catch (error) {
  //     error.response.data.details.forEach((err) => {
  //       errorMessage(err.message);
  //     });
  //     dispatch(hideLoading());
  //   }
  // };
  // const handleChange = async (e) => {
  //   console.log(e);
  //   const formData = new FormData();
  //   const file = e.target.files[0];
  //   formData.append("userPicture", file);
  //   try {
  //     dispatch(showLoading());
  //     const { data, status } = await profilePicture(formData);
  //     console.log(data);
  //     const { data: token, message } = data.details;
  //     if (status === 200) {
  //       successMessage(message);
  //       // dispatch(updateUser(user))
  //       dispatch(hideLoading());
  //     }
  //   } catch (err) {
  //     errorMessage(err.response.data.details.message);
  //     dispatch(hideLoading());
  //   }
  // };
  return (
    <context.Provider
      // value={{
      //   token,
      //   setToken,
      //   firstName,
      //   setFirstName,
      //   lastName,
      //   setLastName,
      //   email,
      //   phone,
      //   setPhone,
      //   setEmail,
      //   password,
      //   setPassword,
      //   confirmPassword,
      //   setConfirmPassword,
      //   handleLogin,
      //   handleRegister,
      //   handleUpdate,
      //   state,
      //   setState,
      //   handleCheck,
      //   register,
      //   setRegister,
      //   otp,
      //   setOtp,
      //   handleCode,
      //   handleChange,
      //   handleDelete,
      // }}
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
        formSubmitted,
        setFormSubmitted,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default UserContext;
