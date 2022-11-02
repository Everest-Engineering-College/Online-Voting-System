import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./candidateRegister.css";

export default function CandidateRegistration({ sideImage }) {
  const history = useNavigate();
  //--------------------------------------------------STATE-----------------------------------------------------
  //state for candidate
  const [candidate, setCandidate] = useState({
    candidateID: "",
    firstName: "",
    middleName: "",
    lastName: "",
    post: "",
  });
  let name, value;
  //--------------------------------------------------Event Handling--------------------------------------------
  //event handling
  const handleOnChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setCandidate({ ...candidate, [name]: value });
  };

  const handleOnClick = () => {
    postData().then(() => {
      alert("Register Success");
    });
  };
  //----------------------------------------------------Post Data Request Function-------------------------------
  //Post Candidate Registration Data;

  async function postData() {
    const config = {
      method: "post",
      url: "/candidateRegistration",
      data: candidate,
    };
    axios(config)
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
        console.log(err.response.status);
        if (err.response.status === 500) {
          alert("Password Doesnot Match");
        }
      });
  }

  return (
    <>
      <div className="register">
        <div className="col-1">
          <img src={sideImage} alt="Voting" id="sideImageCandidate" />
        </div>

        <div className="col-2">
          <h2>Candidate</h2>
          <span>Create new Candidate</span>

          <div id="form" className="flex flex-col">
            <div className="inputContainer">
              <label htmlFor="candidateId" className="labelPosition">
                ID
              </label>
              <input
                type="number"
                id="candidateID"
                name="candidateID"
                value={candidate.candidateID}
                onChange={handleOnChange}
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="firstName" className="labelPosition">
                First name:
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                value={candidate.firstName}
                onChange={handleOnChange}
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
                value={candidate.middleName}
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
                value={candidate.lastName}
                onChange={handleOnChange}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="post" className="labelPosition">
                Post:
              </label>

              <input
                type="text"
                id="post"
                name="post"
                value={candidate.post}
                onChange={handleOnChange}
              />
            </div>

            <button
              type="submit"
              defaultValue="Submit"
              onClick={handleOnClick}
              className="btn"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
