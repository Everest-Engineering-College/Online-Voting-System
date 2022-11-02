import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminLogin.css";

import axios from "axios";

export default function Login({ sideImage }) {
  const navigate = useNavigate();
  //--------------------------------------------------------STATE-------------------------------------------------
  let [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  //--------------------------------------------------------Event Handling---------------------------------------

  let name, value;

  let handleOnChange = (event) => {
    name = event.target.name; // this is store name of tag in input field
    value = event.target.value; //this is store value of that particular field

    setAdmin({ ...admin, [name]: value });
  };

  const handleOnClick = () => {
    postData();
  };
  //------------------------------------------------------Post Request Function---------------------------------------
  async function postData() {
    const config = {
      method: "post",
      url: "/adminLogin",
      data: admin,
    };

    axios(config)
      .then(function(res) {
        console.log(res.data.message);
        console.log(res.data.token);
        navigate("/admin");
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  return (
    <>
      {/* <div id='login'>
            <div id='loginForm'>
                <h3>Admin Login</h3>
                <label htmlFor="username">Username:</label>
                <input type="email" id="username" name="username" value={admin.username} onChange={handleOnChange}/>
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={admin.password} onChange={handleOnChange} />
                <br />
                <br />
                <button type="submit" defaultValue="Submit" onClick={handleOnClick} >Submit</button>

            </div>
            </div> */}

      <section>
        <div className="register">
          <div className="col-1">
            <img src={sideImage} alt="Voting" id="sideImageAdmin" />
          </div>
          <div className="col-2">
            <h2>Admin</h2>
            <span>Login with username and password</span>
            <div id="form" className="flex flex-col">
              <div className="inputContainer">
                <label htmlFor="username" className="labelPosition">
                  Username
                </label>
                <input
                  type="email"
                  id="username"
                  name="username"
                  value={admin.username}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="inputContainer">
                <label htmlFor="password" className="labelPosition">
                  Password
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
              <button
                type="submit"
                className="btn"
                defaultValue="Submit"
                onClick={handleOnClick}
              >
                Submit
              </button>
              {/* <p className="setPassword">
              Register Account,
              {/* <Link to="/adminregistration">Click Here</Link>
            </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
