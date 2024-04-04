import React from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';




const Clist = (props) => {
  // const [count, setCount] = useState(0);
  const navigate = useNavigate()
    const {id,cno,cname,cparty,csymble,totalvote,imgurl} = props;
    

    const handledelete = () => {
        const id = props.id;
        try {
          axios
            .post("http://localhost:3001/delete1", { id })
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

      
      // function increase() {
      //   setCount(count + 1);
      // }

      return (

<div className='employeeList'>
        <div className='employeeData'>
            <div>  {id}</div>
            <div> {cno}</div>
            <div> {cname} </div>
            <div> {cparty} </div>
            <div> {csymble} </div>
            <div>{totalvote} </div>
            <img className="circle-img" src={imgurl} alt="avatar_img" />
    
            <button onClick={handledelete}>delete2</button>
            <button onClick={() => {navigate(`/Cupdate/${id}`)}}>Update2</button>  </div>
        </div>




        
    
  //       <div className="card2">
  //         <div className="top">
  //           <h3 className="name1">cno :{cno}</h3>
  //           <img className="circle-img" src={props.imgurl} alt="avatar_img" />
  //           <img className="circle-img2" src={props.csymble} alt="avatar_img" />
  //         </div>
  //         <div className="bottom">
     
  //           <p className="info1">cname : {cname}</p>
  //           <p className="info1">cparty : {cparty}</p>
          
  //           <p className="info1">totalvote : {props.totalvote} </p>
        
  //           <button onClick={handledelete}>delete</button>
           
  //           <button
  //             onClick={() => {
  //               navigate(`/Cupdate/${id}`);
  //             }}
  //           >
  //             Update
  //           </button>
            

  //           <div className="container">
  
  //   {/* <button onClick={increase} className='btnv'>Voting</button> */}

    
  // </div>
          
  //         </div>
  //       </div>
      );
    };

export default Clist