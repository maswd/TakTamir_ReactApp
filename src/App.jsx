import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./app/pages/Landing";
import Dashborad from "./app/pages/Dashborad";
import Workers from "./app/components/admin/Workers";
import Works from "./app/components/admin/Works";
import Logout from "./app/components/login/Logout";
import Login from "./app/components/login/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import ConfirmPhone from "./app/components/login/VerifyCode";
import UserInformation from "./app/components/login/UserInformation";
import TechnicianDash from "./app/pages/TechnicianDash";
import Cards from "./app/components/techncian/Cards";
import Jobs from "./app/components/techncian/Jobs";
import Profile from "./app/components/techncian/Profile";
import WriteWorks from "./app/components/techncian/WriteWorks";
import UserContext from "./app/context/userContext";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./app/pages/PrivateRoute";
import NotFound from "./app/pages/NotFound";
import AcceptTec from "./app/components/admin/AcceptTec";
import Requests from "./app/components/admin/Requests";
import ChatAdmin from "./app/components/chat/ChatAdmin";
import ChatTechncian from "./app/components/chat/ChatTechncian";
import Connect from "./app/components/landing/Connect";
function App() {
  const user = useSelector((state) => state.user);
  // const user = useSelector((state) => state.user);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="/request" element={<Connect />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute user={user}>
              <Dashborad />
            </PrivateRoute>
          }
        >
          <Route index element={<Workers />} />
          <Route path="works" element={<Works />} />
          <Route path="messages" element={<ChatAdmin />} />
          <Route path="accept" element={<AcceptTec />} />
          <Route path="requests" element={<Requests />} />
        </Route>
        <Route
          path="/technician"
          element={
            <PrivateRoute user={user}>
              <TechnicianDash />
            </PrivateRoute>
          }
        >
          <Route path="write" element={<WriteWorks />} />
          <Route path="orders" element={<Cards />} />
          <Route path="support" element={<ChatTechncian />} />
          <Route path="jobs" element={<Jobs />} />
          <Route index element={<Profile />} />
        </Route>

        <Route path="/logout" element={<Logout />} />
        <Route
          path="/login"
          element={
            <UserContext>
              <Login />
            </UserContext>
          }
        />
        <Route
          path="/confirm"
          element={
            <UserContext>
              <ConfirmPhone />
            </UserContext>
          }
        />
        <Route
          path="/user-information"
          element={
            <UserContext>
              <UserInformation />
            </UserContext>
          }
        />
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
