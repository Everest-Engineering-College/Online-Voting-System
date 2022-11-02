import React, { useState } from "react";
import axios from "axios";

export default function AdminRegistration({ sideImage }) {
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
        alert("Admin Registration Successfull go back to Admin Login Page.");
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
      <div className="register">
        <div className="col-1">
          <img src={sideImage} alt="Voting" id="sideImageAdmin" />
        </div>
        <div className="col-2">
          <h2>Admin Registration</h2>
          <span>Create Admin Account</span>
          <form id="form" className="flex flex-col">
            <div className="inputContainer">
              <label htmlFor="firstName" className="labelPosition">
                First name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={admin.firstName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="middleName" className="labelPosition">
                Middle name:
              </label>

              <input
                type="text"
                id="middleName"
                name="middleName"
                value={admin.middleName}
                onChange={handleOnChange}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="lastName" className="labelPosition">
                Last name:
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                value={admin.lastName}
                onChange={handleOnChange}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="email" className="labelPosition">
                Email:
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={admin.email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="password" className="labelPosition">
                Password:
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={admin.password}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="confirmPassword" className="labelPosition">
                Confirm Password:
              </label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={admin.confirmPassword}
                onChange={handleOnChange}
                required
              />
            </div>

            <button
              type="submit"
              defaultValue="Submit"
              className="btn"
              onClick={handleOnClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
