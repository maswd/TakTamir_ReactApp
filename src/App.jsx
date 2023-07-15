import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./app/pages/Landing";
import Dashborad from "./app/pages/Dashborad";



function App() {

  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
              <Dashborad />
          }
        />
        <Route path="/" element={<Landing />} />
        {/* <Route index element={<DashHome />} />
          <Route
            path="setting"
            element={
              <UserContext>
                <DashSetting />
              </UserContext>
            } 
          />
          {/* <Route path="category" element={<DashCategory />} /> */}
      </Routes>

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
