import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [data,setData]=useState('')
    let [data1,setData1]=useState('')
    let handleChange = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
        console.log(data);
      }
      let handleSubmit=(event)=>{
        event.preventDefault()
        setData1(data)
    
    
      }
    return (
        // <div className=" container-fluid mt-5 shadow-lg w-25 rounded  bg-light">
            <form className=' rounded w-100' onSubmit={handleSubmit}>
                {/* <div>
  <h2>First name :{data1.Username}</h2>
  <h2>Last name :{data1.password}</h2>
</div>  */}
                <h1 className='text-center fw-light h1 fs-1 text-danger'>LOGIN</h1>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" onChange={handleChange} name="Username"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} name='password' />
                </div>
                <div className="mb-3 d-flex justify-content-center ">
                    <input type="submit" className="btn btn-danger form-control rounded-pill" value='Login'/>
                    {/* <Link to="/Login/User" className="btn btn-danger form-control rounded-pill" onChange={handleChange} >Login</Link> */}
                </div>
                
            </form>
        // </div>
    );
}

export default Login;
