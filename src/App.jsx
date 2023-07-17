import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./app/pages/Landing";
import Dashborad from "./app/pages/Dashborad";
import Workers from "./app/components/Workers";
import Works from "./app/components/Works";
import Masseages from "./app/components/Masseages";
import Logout from "./app/components/Logout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

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
        <Route path="/logout" element={<Logout />} />
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
