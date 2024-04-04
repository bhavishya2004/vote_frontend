import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [voteridno, setVoteridno] = useState('')
    const [gender, setGender] = useState('')
    const [imgurl, setImgurl] = useState('')
    const [dateofbirth, setDateofbirth] = useState('')
    const [fathername, setFathername] = useState('')
   
    function handleSubmit(e) {
e.preventDefault();
try {
    axios
        .post("http://localhost:3001/register", { username, voteridno,gender,imgurl,dateofbirth,fathername})
        .then(
            (response) =>{

            console.log(response)
            navigate('/')
            })
        .catch(
            error => console.log(error)
        )
} catch (error) {

}
}
  return (
<>
<h1 className='main'>Vote Today for a Better Tomorrow</h1>
    <div className='login'>
    <form action="/register" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="username">username</label>
                <input type="username" className="form-control" name="username" onChange={(e)=>{setUsername(e.target.value)}} />
              </div>
              <div className="form-group">
                <label for="voteridno">voteridno</label>
                <input type="voteridno" className="form-control" name="voteridno" onChange={(e)=>{setVoteridno(e.target.value)}} />
              </div>

              <label for="gender">gender</label>
                <input type="gender" className="form-control" name="gender" onChange={(e)=>{setGender(e.target.value)}} />

                <label for="imgurl">imgurl</label>
                <input type="imgurl" className="form-control" name="imgurl" onChange={(e)=>{setImgurl(e.target.value)}} />

                <label for="dateofbirth">dateofbirth</label>
                <input type="dateofbirth" className="form-control" name="dateofbirth" onChange={(e)=>{setDateofbirth(e.target.value)}} />

                <label for="fathername">fathername</label>
                <input type="fathername" className="form-control" name="fathername" onChange={(e)=>{setFathername(e.target.value)}} />

              <button type="submit" className="btn btn-dark">Register</button>
            </form>
        
</div>
</>
)
}


export default Register


















// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// function Register() {
//     const navigate = useNavigate();
//     function handleSubmit(e) {
//         e.preventDefault();
//         try {
//             axios
//                 .post("http://localhost:3001/register", { })
//                 .then(
//                     (response) =>{
        
//                     console.log(response)
//                     navigate('/')
//                     })
//                 .catch(
//                     error => console.log(error)
//                 )
//         } catch (error) {
        
//         }
//         }


//     return (
//         <>
//             <p className="title">Registration Form</p>

//             <form className="App">
              
//                 <input type="username"  />
//                 <input type="password" />
//                 <button type="submit" className="btn btn-dark">Register</button>
                    
//             </form>
//         </>
//     );
// }

// export default Register;