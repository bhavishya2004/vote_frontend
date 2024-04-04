import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Vupdate = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [username,setusername] = useState("")
    const [voteridno,setvoteridno] = useState("")
    const [gender,setgender] = useState("")
    const [dateofbirth,setdateofbirth] = useState("")
    const [fathername,setfathername] = useState("")
    const [imgurl,setimgurl] = useState("")
  

   
    useEffect(() => {
        axios.post("http://localhost:3001/getUpdateData2", {id})
            .then(res => {
                setusername(res.data.username);
                setvoteridno(res.data.voteridno);
                setgender(res.data.gender);
                setdateofbirth(res.data.dateofbirth);
                setfathername(res.data.fathername);
                setimgurl(res.data.imgurl);
              
               

            })
            .catch(
                err => {console.log(err)},
            )

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:3001/Vupdate", {id,username,voteridno,gender,dateofbirth,fathername,imgurl})
                .then((response) => {
                    console.log(response);
                    navigate("/Vote")
                })
                .catch((err) => { console.log(err) })

        } catch (error) {

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' name='username' value={username} onChange={(e)=>{setusername(e.target.value)}} required />
            <input type='number' placeholder='voteridno' name='voteridno' value={voteridno} onChange={(e)=>{setvoteridno(e.target.value)}} required />
            <input type='text' placeholder='gender' name='gender' value={gender} onChange={(e)=>{setgender(e.target.value)}} required />
            <input type='number' placeholder='dateofbirth' name='dateofbirth' value={dateofbirth} onChange={(e)=>{setdateofbirth(e.target.value)}} required />
            <input type='text' placeholder='fathername' name='fathername' value={fathername} onChange={(e)=>{setfathername(e.target.value)}} required />
            <input type='text' placeholder='imgurl' name='imgurl' value={imgurl} onChange={(e)=>{setimgurl(e.target.value)}} required />
            
           
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Vupdate