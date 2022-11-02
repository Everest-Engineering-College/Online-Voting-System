import React, { useState } from "react";
import "./adminRegistration.css";
import axios from "axios";

export default function AdminRegistration() {
  const [admin, setAdmin] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //this function set user type value in respective field of state;
  let name, value;
  const handleOnChange = (event) => {
    name = event.target.name; // this is store name of tag in input field
    value = event.target.value; //this is store value of that particular field
    setAdmin({ ...admin, [name]: value }); //using object destructuring
  };

  async function postData() {
    const config = {
      method: "post",
      url: "/adminRegistration",
      data: admin,
    };

    axios(config)
      .then(function(res) {
        console.log(res);
        alert("Admin Registration Succesfull go back to Admin Login Page.");
      })
      .catch(function(err) {
        console.log(err);
        console.log(err.response.status);
        if (err.response.status === 500) {
          alert("Password Doesnot Match");
        }
      });
  }

  const handleOnClick = () => {
    postData();
  };

  return (
    <>
      <div id="registration">
        <div id="registrationForm">
          <div>Registration For Admin</div>
          <label htmlFor="firstName">First name:</label>
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={admin.firstName}
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="middleName">Middle name:</label>
          <br />
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={admin.middleName}
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="lastName">Last name:</label>
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={admin.lastName}
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={admin.email}
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={admin.password}
            onChange={handleOnChange}
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <br />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={admin.confirmPassword}
            onChange={handleOnChange}
          />
          <br />
          <button type="submit" defaultValue="Submit" onClick={handleOnClick}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
