import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";

axios.defaults.withCredentials = true;

let firstRender = true;

export default function Admin() {
  // ---------------------------------State-------------------------------------------
  //admin state
  const [admin, setAdmin] = useState();

  //candidate state;

  const [candidate, setCandidate] = useState();

  // user state;
  const [user, setUser] = useState();

  //use state management hooks

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  //-------------------------------All Request To Backend---------------------------

  // log out request
  const sendLogOutReq = async () => {
    const res = await axios.post("/logout", null, {
      withCredentials: true,
    });
    if (res.status === 200) {
      console.log("logout sucess");
      console.log(res);
      return res;
    }
    return new Error("Unable To Logout. Please try again");
  };

  //send request to get admin information
  const sendRequest = async () => {
    const res = await axios
      .get("/admin", {
        withCredentials: true,
      })
      .catch((err) => {
        console.log("Error in getting admin data");
        console.log(err);
      });
    if (res) {
      const data = await res.data;
      console.log(data); //testing coddeee
      return data;
    } else {
      return null;
    }
  };

  // send request to get all candidate information
  const sendCandidateRequest = async () => {
    const res = await axios
      .get("/getCandidate", {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });

    if (res) {
      const candidateData = await res.data;
      return candidateData;
    } else {
      return null;
    }
  };

  //Send request to get all User Information

  const sendUserRequest = async () => {
    const res = await axios
      .get("/getUser", {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
    if (res) {
      const userData = res.data;
      return userData;
    } else {
      return null;
    }
  };

  // send request for refresh token

  const refreshToken = async () => {
    const res = await axios
      .get("/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  //----------------------------------------Event Handling------------------------------------

  // LogOut Event

  const handleLogOut = () => {
    sendLogOutReq().then(() => {
      dispatch(authActions.logout());
    });
  };

  //handle candidate show request
  const handleCandidate = async () => {
    sendCandidateRequest().then((data) => {
      if (data) {
        setCandidate(data.candidate);
      }
    });
  };

  //handle User show Request
  const handleUsers = async () => {
    sendUserRequest().then((data) => {
      if (data) {
        setUser(data.user);
      }
    });
  };

  //use UseEffect to send request after every certain time

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => {
        if (data) {
          setAdmin(data.admin);
          console.log(data.admin);
        }
      });
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setAdmin(data.Admin));
    }, 1000 * 5800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome To Admin Page</h1>
      <Link onClick={handleLogOut} to="/">
        Log Out
      </Link>
      <br />
      {admin && <Link to="/userRegistration">User Registration</Link>}
      <br />
      {admin && <Link to="/candidateRegistration">Candidate Registration</Link>}
      <br />
      {admin && <h1>{admin.firstName}</h1>}

      <button type="button" onClick={handleCandidate}>
        Show All Candidate
      </button>
      {candidate && <h2>Candidate List</h2>}
      {candidate &&
        candidate.map((data) => {
          return (
            <h3>
              {data.firstName} {data.lastName} {data.totalVote}
            </h3>
          );
        })}
      <button type="button" onClick={handleUsers}>
        Show All Candidate
      </button>
      {user && <h2>User List</h2>}
      {user &&
        user.map((data) => {
          return <h3>{data.firstName}</h3>;
        })}
    </div>
  );
}
