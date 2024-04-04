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

 

        <h1 className="main">Empower Democracy, Vote with Precision!</h1>

    </>
  );
};

export default Main;
