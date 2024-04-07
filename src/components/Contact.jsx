import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from "./Login";
import './Contact.css'

export default function Contact() {
  return (
    <>
    <Login/>
    {/* <div className='con'> */}
    <div>
      <h1 className='con2'>
        Contact Us
      </h1>
      </div>
      <div className='con3'>
        <form action="#">
      <div class="mb-3">
 
  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
   <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
  <label for="exampleFormControlInput1" class="form-label"></label>

  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message.."></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    {/* </div> */}

    </>
  )
}
