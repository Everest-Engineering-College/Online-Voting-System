import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// IMPORT COMPONENETS
import Login from "./components/user/userLogin";
import User from "./components/user/user";
import Admin from "./components/admin/admin";
import AdminLogin from "./components/admin/adminLogin";
import AdminRegistration from "./components/admin/adminRegistration";
import Home from "./components/Home";
import UserRegistration from "./components/user/userRegistration";
import CandidateRegistration from "./components/candidate/candidateRegistration";

//IMPORT STYLES
import "./App.css";
import "./components/Main.css";
import userSideImage from "./Images/userSideImage.png";
import adminSideImage from "./Images/adminSideImage.png";
import candidateSideImage from "./Images/candidateSideImage.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/userlogin"
            element={<Login sideImage={userSideImage} />}
          />
          <Route
            exact
            path="/adminlogin"
            element={<AdminLogin sideImage={adminSideImage} />}
          />
          <Route
            extact
            path="/adminregistration"
            element={<AdminRegistration sideImage={adminSideImage} />}
          />
          <Route
            extact
            path="/userregistration"
            element={<UserRegistration sideImage={userSideImage} />}
          />
          <Route
            exact
            path="/candidateRegistration"
            element={<CandidateRegistration sideImage={candidateSideImage} />}
          />
          <Route extact path="/user" element={<User />} />
          <Route extact path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
