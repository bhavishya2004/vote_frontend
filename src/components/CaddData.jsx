import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaddData = () => {
    const navigate = useNavigate()
    const [cno,setcno] = useState("")
    const [cname,setcname] = useState("")
    const [cparty,setcparty] = useState("")
    const [csymble,setcsymble] = useState("")
    const [totalvote,settotalvote] = useState("")
    const [imgurl,setimgurl] = useState("")
    

   

const handleSubmit = (e) =>{
e.preventDefault()

axios
.post("http://localhost:3001/addCandidate", {cno,cname,cparty,csymble,totalvote,imgurl})
.then(
  (response) => {
   console.log(response.data);
   navigate('/Candidate')
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
            
            <input type='text' placeholder='cno' name='cno' value={cno} onChange={(e)=>{setcno(e.target.value)}} required />
            <input type='text' placeholder='cname' name='cname' value={cname} onChange={(e)=>{setcname(e.target.value)}} required />
            <input type='text' placeholder='cparty' name='cparty' value={cparty} onChange={(e)=>{setcparty(e.target.value)}} required />
            <input type='text' placeholder='csymble' name='csymble' value={csymble} onChange={(e)=>{setcsymble(e.target.value)}} required />
            <input type='number' placeholder='totalvote' name='totalvote' value={totalvote} onChange={(e)=>{settotalvote(e.target.value)}} required />
            <input type='text' placeholder='imgurl' name='imgurl' value={imgurl} onChange={(e)=>{setimgurl(e.target.value)}} required />
           
            <input type='submit' value="submit" />
        </form>
    </div>
  )
}

export default CaddData;