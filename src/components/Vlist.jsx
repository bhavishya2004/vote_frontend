import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Vlist = (props) => {
  const navigate = useNavigate()
    const {id,username,voteridno,gender,dateofbirth,fathername,imgurl,voted} = props;
     


    const handledelete = () => {
        const id = props.id;
        try {
          axios
            .post("http://localhost:3001/delete2", { id })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      };
    
      return (
        
        <div className='employeeList'>
        <div className='employeeData'>
            <div>{id}</div>
            <div>{username}</div>
            <div> {voteridno} </div>
            <div>{gender} </div>
            <div>{dateofbirth} </div>
            <div>{fathername} </div>
            <img className="circle-img" src={imgurl} alt="avatar_img" />
            <div>{voted} </div>
            <button onClick={handledelete}>delete</button>
            <button onClick={() => {navigate(`/Vupdate/${id}`)}}>Update</button>  </div>
        </div>
      );
    };

export default Vlist
