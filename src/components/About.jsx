import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from "./Login";
import './About.css'


export default function About() {
  return (
    <>
    <Login/>
    <div className='pqr'>
    
    <div className='p'>
      <h1 className='m'>About Us</h1>
      <p></p>
    </div>
    <div className='q'>
    <h2 className='n'>Our Mission</h2>
    <p></p>
    </div>
    <div className='r'>
    <h2 className='n'>Meet Our Team Members</h2>
    </div>
    </div>
    </>
  )
}
