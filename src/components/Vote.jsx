import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Vlist from "./Vlist";



const Vote = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/voterData")
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
          Election Voters
        </h3>
        <button className="btn"
          onClick={() => {
            navigate("/VaddData");
          }}
        >
          Add Data
        </button>

      </center>

      <div className="employeeList">
        <div className="employeeData">
          <div id="id" className="bg">id</div>
          <div id="pn" className="bg"> username </div>
          <div className="bg"> voteridno</div>
          <div className="bg"> gender</div>
          <div className="bg"> dateofbirth</div>
          <div className="bg"> fathername </div>
          <div className="bg"> imgurl </div>
          <div className="bg"> voted </div>
         </div>
         
        </div>
        {employeeData.map((vote) => {
    
      
       
          return (  


            <><Vlist
                key={vote.id}
                id={vote.id}
                username={vote.username}
                voteridno={vote.voteridno}
                gender={vote.gender}
                dateofbirth={vote.dateofbirth}
                fathername={vote.fathername}
                imgurl={vote.imgurl} 
                voted={vote.voted}
                /></>
          );
        })}
       
      {/* </div> */}

      <button className="button-73"
        onClick={() => {
            navigate("/Report");
        }}
        >GO BACK</button>
    </>
  );
};

export default Vote;
