import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import List from "./List";

const Main = () => {
  const navigate = useNavigate();

 


  return (
    <>
      
        <button className="button-73"
          onClick={() => {
            navigate("/Voting");
          }}
        >
          Voting
        </button>

        <button className="button-73"
          onClick={() => {
            navigate("/Register");
          }}
        >
      Register
        </button>


        <button className="button-73"
          onClick={() => {
            navigate("/Login");
          }}
        >
   Login
        </button>

 

        <h1 className="main">Change We Can Believe In Begins with Your Vote</h1>

    </>
  );
};

export default Main;
