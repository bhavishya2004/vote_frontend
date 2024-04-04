import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Voting = () => {
  const [candidate, setCandidate] = useState([]);
  const [vote, setVote] = useState([]);
  const [votedFor, setVotedFor] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/candidateData")
      .then((response) => {
        // console.log(response.data);
        setCandidate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [candidate]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/voterData")
  //     .then((response) => {
  //       // console.log(response.data);
  //       setVote(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [vote]);

  const navigate = useNavigate();

  function handleChange(event) {
    console.log(event.target.selectedIndex);
    console.log(candidate[event.target.selectedIndex]);
    axios
      .post("http://localhost:3001/vote", candidate[event.target.selectedIndex])
      .then((response) => {
        console.log(response);
        // alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function handleChange1(event) {
  //   console.log(event.target.selectedIndex);
  //   console.log(vote[event.target.selectedIndex]);
  //   axios
  //     .post("http://localhost:3001/vote1", vote[event.target.selectedIndex])
  //     .then((response) => {
  //       console.log(response);
  //       // alert(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <>
      <center>
        <h1>Please Vote here...</h1>
        <div className="displyflex">
          <h3>Candidate</h3>
          <Form.Select
            className="drop"
            aria-label="Default select example"
            onChange={handleChange}
          >
            return(
            <option value="0">Select Candidate</option>
            {
                candidate.map((candidate) => 
              <option value={candidate.cname}>{candidate.cname}</option>
            )}
            )
          </Form.Select>

 
        </div>
        <button
          className="button-62"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </button>
        <button
          className="button-62"
          onClick={() => {
            navigate("");
          }}
        >
          Press Here To Vote
        </button>
       
      </center>
    </>
  );
};

export default Voting;
