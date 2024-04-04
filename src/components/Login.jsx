import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [voteridno, setVoteridno] = useState("");

  const checkStatus = () => {
    try {
        axios
          .post("http://localhost:3001/checkStatus", { username})
          .then((response) => {
            console.log(response.data);
            // if (response.data === "success") {
            //   localStorage.setItem("vName", username);
            //   checkStatus();
            //   // navigate('/Report')
            // } else {
            //   alert(response.data);
            // }
          })
          .catch((error) => console.log(error));
      } catch (error) {}
  };

  function handleSubmit(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3001/login", { username, voteridno })
        .then((response) => {
          console.log(response.data);
          if (response.data === "success") {
            localStorage.setItem("vName", username);
            checkStatus();
            navigate('/Report')
          } else {
            alert(response.data);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {}
  }

  return (
    <>
      <h1 className="home">Empower Democracy, Vote with Precision!</h1>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <input
            className="in"
            placeholder="userName"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br></br>
          <input
            className="in"
            placeholder="Enter voteridno"
            name="voteridno"
            type="text"
            value={voteridno}
            onChange={(e) => setVoteridno(e.target.value)}
            required
          />
          <input className="in1" type="submit" value="login" />
        </form>
      </div>
    </>
  );
}

export default Login;
