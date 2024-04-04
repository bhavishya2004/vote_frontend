import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Clist from "./Clist";



const Candidate = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
var winnervote = 0;
var winnername = "";

  useEffect(() => {
    axios
      .get("http://localhost:3001/candidateData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeData]);





  return (
    <>
      <center>
      <h3 className="he">
          Election Candidate
        </h3>
        <button className="btn"
          onClick={() => {
            navigate("/CaddData");
          }}
        >
          Add Data
        </button>

      </center>
      <div className="employeeList">
        <div className="employeeData">
          <div id="id" className="bg">id</div>
          <div id="pn" className="bg"> Candidate <p>No</p></div>
          <div className="bg"> Candidate <p>Name</p></div>
          <div className="bg">Candidate <p>Party</p></div>
          <div className="bg">Candidate <p>sybmle</p></div>
          <div className="bg"> totalvote </div>
          <div className="bg"> Candidate <p> Photo</p> </div>
         </div>
         
        </div>
       
        {employeeData.map((candidate) => {
    
           if(candidate.totalvote > winnervote) {winnervote = candidate.totalvote; winnername = candidate.cname}
          return (  

            <><Clist
                key={candidate.id}
                id={candidate.id}
                cno={candidate.cno}
                cname={candidate.cname}
                cparty={candidate.cparty}
                csymble={candidate.csymble}
                totalvote={candidate.totalvote}
                imgurl={candidate.imgurl} /></>
          );
        })}
    

      <button className="btnv"
        onClick={() => {
            navigate("/Report");
        }}
        >GO BACK</button>



        <div className="result">
          <div>winnervote = {winnervote}</div>
       

          <div>Congratulations   {winnername}🥳  </div>
        </div>
    </>
  );
};

export default Candidate;