import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./app/pages/Landing";
import Dashborad from "./app/pages/Dashborad";
import Workers from "./app/components/Workers";
import Works from "./app/components/Works";
import Masseages from "./app/components/Masseages";
import Logout from "./app/components/Logout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Login from "./app/components/Login";
import ConfirmPhone from "./app/components/ConfirmPhone";
import UserInformation from "./app/components/UserInformation";
import TechnicianDash from "./app/pages/TechnicianDash";
import Cards from "./app/components/Cards";
import Jobs from "./app/components/Jobs";
import Profile from "./app/components/Profile";
import WriteWorks from "./app/components/WriteWorks";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashborad />}>
          <Route index element={<Workers />} />
          <Route path="works" element={<Works />} />
          <Route path="messages" element={<Masseages />} />
        </Route>
        <Route path="/technician" element={<TechnicianDash />}>

          <Route path="write" element={<WriteWorks />} />
          <Route path="orders" element={<Cards />} />
          <Route path="jobs" element={<Jobs />} />
          <Route index  element={<Profile />} />
        </Route>

        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm" element={<ConfirmPhone />} />
        <Route path="/user-information" element={<UserInformation />} />
      </Routes>
      {/* <Route path="category" element={<DashCategory />} /> 

      {/* <Route path="/logout" element={<Logout />} />
      <Route path="/verify" element={<VerifyCode />} />

      <Route
        path="/login"
        element={
          <UserContext>
            <CheckPhone />
          </UserContext>
        }
      />
      <Route
        path="/Register"
        element={
          <UserContext>
            <Register />
          </UserContext>
        }
      />
      <Route path="/" element={<Home />}>

        <Route path="about" element={<About />} />

      </Route>
      <Route path="*" element={<Error />} /> */}
    </>
  );
}

export default App;
