import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import List from "./List";

const Report = () => {
  const navigate = useNavigate();

  function updateAllData(){
    axios
    .get("http://localhost:3001/updateAllData")
    .then((response) => {
      console.log(response);
      alert(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <>
    <h1 className="slogan">Your Voice, Your Vote, Our Future</h1>

        <button className="button-73"
          onClick={() => {
            navigate("/Vote");
          }}
        >
       Vote
        </button>

        <button className="button-73"
          onClick={() => {
            navigate("/Candidate");
          }}
        >
      Candidate
        </button>
        
   

        <button className="button-73"
          onClick={() => {
            navigate("/");
          }}
        >
        Goback
        </button>
    </>
  );
};

export default Report;
