import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const VaddData = () => {
    const navigate = useNavigate()
    const [username,setusername] = useState("")
    const [voteridno,setvoteridno] = useState("")
    const [gender,setgender] = useState("")
    const [dateofbirth,setdateofbirth] = useState("")
    const [fathername,setfathername] = useState("")
    const [imgurl,setimgurl] = useState("")
    

   

const handleSubmit = (e) =>{
e.preventDefault()

axios
.post("http://localhost:3001/addVoterData", {username,voteridno,gender,dateofbirth,fathername,imgurl})
.then(
  (response) => {
   console.log(response.data);
   navigate('/Vote')
    }
  )
.catch(
  (error) => {
    console.log(error);
  }
  )

}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type='text' placeholder='username' name='username' value={username} onChange={(e)=>{setusername(e.target.value)}} required />
            <input type='number' placeholder='voteridno' name='voteridno' value={voteridno} onChange={(e)=>{setvoteridno(e.target.value)}} required />
            <input type='text' placeholder='gender' name='gender' value={gender} onChange={(e)=>{setgender(e.target.value)}} required />
            <input type='number' placeholder='dateofbirth' name='dateofbirth' value={dateofbirth} onChange={(e)=>{setdateofbirth(e.target.value)}} required />
            <input type='text' placeholder='fathername' name='fathername' value={fathername} onChange={(e)=>{setfathername(e.target.value)}} required />
            <input type='text' placeholder='imgurl' name='imgurl' value={imgurl} onChange={(e)=>{setimgurl(e.target.value)}} required />
           
            <input type='submit' value="submit" />
        </form>
    </div>
  )
}

export default VaddData;
