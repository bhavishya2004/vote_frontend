import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import List from "./List";

const Home = () => {
  const navigate = useNavigate();

 


  return (
    <>
    <h1 className="main">Building a Better Tomorrow Starts at the Polls</h1>
      
        <button className="button-73"
          onClick={() => {
            navigate("/Product");
          }}
        >
          Product
        </button>

        <button className="button-73"
          onClick={() => {
            navigate("/Contacts");
          }}
        >
          Contacts
        </button>


        <button className="button-73"
          onClick={() => {
            navigate("/Report");
          }}
        >
        Report
        </button>

 

      <img className="imgh" src="https://wallpaperaccess.com/full/4475127.jpg" ></img>

    </>
  );
};

export default Home;
