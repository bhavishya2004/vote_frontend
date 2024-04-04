import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Cupdate = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [cno,setcno] = useState("")
    const [cname,setcname] = useState("")
    const [cparty,setcparty] = useState("")
    const [csymble,setcsymble] = useState("")
    const [totalvote,settotalvote] = useState("")
    const [imgurl,setimgurl] = useState("")
  

   
    useEffect(() => {
        axios.post("http://localhost:3001/getUpdateData1", {id})
            .then(res => {
                setcno(res.data.cno);
                setcname(res.data.cname);
                setcparty(res.data.cparty);
                setcsymble(res.data.csymble);
                settotalvote(res.data.totalvote);
                setimgurl(res.data.imgurl);
              
               

            })
            .catch(
                err => {console.log(err)},
            )

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:3001/Cupdate", {id,cno,cname,cparty,csymble,totalvote,imgurl})
                .then((response) => {
                    console.log(response);
                    navigate("/Candidate")
                })
                .catch((err) => { console.log(err) })

        } catch (error) {

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type='number' placeholder='cno' name='cno' value={cno} onChange={(e)=>{setcno(e.target.value)}} required />
            <input type='text' placeholder='cname' name='cname' value={cname} onChange={(e)=>{setcname(e.target.value)}} required />
            <input type='text' placeholder='cparty' name='cparty' value={cparty} onChange={(e)=>{setcparty(e.target.value)}} required />
            <input type='text' placeholder='csymble' name='csymble' value={csymble} onChange={(e)=>{setcsymble(e.target.value)}} required />
            <input type='number' placeholder='totalvote' name='totalvote' value={totalvote} onChange={(e)=>{settotalvote(e.target.value)}} required />
            <input type='text' placeholder='imgurl' name='imgurl' value={imgurl} onChange={(e)=>{setimgurl(e.target.value)}} required />
            
           
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Cupdate
