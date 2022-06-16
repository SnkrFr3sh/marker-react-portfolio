import React from 'react'
import { Link } from 'react-router-dom'
import '../Landing/syle.css'

export default function Landing() {
  //   const navigate = useNavigate()

  return (
    <div>
      <div>
        <div class='landingContainer circle-leave-active'>
          <Link to='home' className='landingText'>
            MARC PACAMPARA
          </Link>
        </div>
        <section class='bubbleLanding'>
          <div class='bubble bubble1 shift1'/>
          <div class='bubble bubble2 shift2'/>
          <div class='bubble bubble3 shift3'/>
          <div class='bubble bubble4 shift4'/>
          <div class='bubble bubble5 shift3'/>
          <div class='bubble bubble6 shift1'/>
          <div class='bubble bubble7 shift4'/>
          <div class='bubble bubble8 shift4'/>
          <div class='bubble bubble9 shift2'/>
          <div class='bubble bubble10 shift3'/>
          <div class='bubble bubble11 shift1'/>
          {/* <div class='bubble bubble12 shift3 '> */}
          <div class='bubble bubble13'/>
          <div class='bubble bubble14 shift2'/>
          {/* <div class='bubble bubble15 shift4'></div>
      <div class='bubble bubble16 shift1'></div>
      <div class='bubble bubble17 shift2'></div>
      <div class='bubble bubble18'></div> */}
          <div class='bubble bubble19'/>


        </section>
      </div>
    </div>
  )
}
