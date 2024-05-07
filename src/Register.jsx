import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Register() {
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
      <form onSubmit={handleSubmit} className='w-100'>
      <h1 className='text-center fw-light h1 fs-1 text-danger'>REGISTER</h1>
        <div className="mb-3">
          <label htmlFor="fname" className='form-label'>First Name</label>
          <input type="text" id='fname' className='form-control' name='firstName' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className='form-label'>Last Name</label>
          <input type="text" id='lname' className='form-control' name='secondName' onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className='form-label'>Mail Id</label>
          <input type="email" id='email' className='form-control' name='email' onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="newpass" className='form-label'>New Password</label>
          <input type="password" id='newpass' className='form-control' name='password' onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="confpass" className='form-label'>Confirm Password</label>
          <input type="password" id='confpass' className='form-control' name='confpassword' onChange={handleChange}/>
        </div>
        <div className="mb-3 d-flex justify-content-center ">
              <input type="submit" className="btn btn-danger rounded-pill form-control" value="Register" />
              {/* <Link to="" className="btn btn-danger rounded-pill form-control">Register</Link> */}
          </div>
      </form>
  
  
  )
}

export default Register