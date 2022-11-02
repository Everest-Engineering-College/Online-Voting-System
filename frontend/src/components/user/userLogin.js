import React, { useState } from "react";
import "./userLogin.css";

import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login({ sideImage }) {
  const history = useNavigate();
  //---------------------------------------------------------------STATE-----------------------------------------------------
  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  //---------------------------------------------------------------Event Handling-------------------------------------------

  let name, value;
  let handleOnChange = (event) => {
    name = event.target.name; // this is store name of tag in input field
    value = event.target.value; //this is store value of that particular field

    setUser({ ...user, [name]: value });
  };

  const handleOnClick = () => {
    postData();
  };

  //--------------------------------------------------------------Post Data Request Function--------------------------------
  async function postData() {
    const config = {
      method: "post",
      url: "/userLogin",
      data: user,
    };

    axios(config)
      .then(function(res) {
        console.log(res.data.message);
        console.log(res.data.token);
        history("/user");
      })
      .catch(function(err) {
        console.log(err.response.data.message);
        console.log(err);
        alert(err.response.data.message);
      });
  }

  return (
    <>
      {/* <div id='login'> */}
      {/* <div id='imageDiv'>
          <img src={loginVote} id="loginImg" alt="online voting image" />

        </div> */}
      {/* <div id='loginForm'>
          <h3>{props.title} Login</h3>
          <label htmlFor="username">Username</label><br/>
          <input type="email" id="username" name="username" value={user.username} onChange={handleOnChange} />
          <br />
          <br />
          <label htmlFor="password">Password</label><br/>
          <input type="password" id="password" name="password" value={user.password} onChange={handleOnChange} />
          <br />
          <br />
          <button type="submit" defaultValue="Submit" onClick={handleOnClick} >Login</button>

        </div>

      </div> */}

      <section>
        <div className="register">
          {/* <div id='imageDiv'>
          <img src={loginVote} id="loginImg" alt="online voting image" />
        </div> */}
          <div className="col-1">
            <img src={sideImage} alt="Voting" id="sideImageUser" />
          </div>
          <div className="col-2">
            <h2>User Login</h2>
            <span>Login with your given username and password</span>
            <div id="form" className="flex flex-col">
              <div className="inputContainer">
                <label htmlFor="username" className="labelPosition">
                  Username
                </label>
                <input
                  type="email"
                  id="username"
                  name="username"
                  value={user.username}
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
                  value={user.password}
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
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Login.propTypes = { title: PropTypes.string.isRequired };
