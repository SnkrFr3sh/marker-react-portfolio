import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import Header from '../Header/Header'
import homePhoto from '../../components/images/homephoto.png'
import Projects from '../Projects/projects'
import AboutMe from '../Aboutme/Aboutme';



function Home() {
  return (
    <div class='homeBody'>
      {/* <Header /> */}

      <section class='homeSection'>
      <div>
        <img src={homePhoto} alt='' class='homePhoto'></img>
      </div>
      {/* <div className='moon' /> */}
      <div class='nameHomeBox'>
        <div class='nameHome1 nameHome'>Hello. </div>
        <div class='nameHome1 nameHome'>I am </div>
        <div class='nameHome1 nameHome'>Marc </div>

      </div>
      <section class='bubbleHome'>
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
          <div class='bubble bubble13'/>
          <div class='bubble bubble14 shift2'/>
          <div class='bubble bubble19'/>
          <div class='bubble bubble1 shift2'/>
          <div class='bubble bubble2 shift1'/>
          <div class='bubble bubble3 shift4'/>
          <div class='bubble bubble4 shift1'/>
          <div class='bubble bubble5 shift2'/>
          <div class='bubble bubble6 shift3'/>
          <div class='bubble bubble7 shift1'/>
          <div class='bubble bubble8 shift1'/>
          <div class='bubble bubble9 shift3'/>
          <div class='bubble bubble10 shift3'/>
          <div class='bubble bubble11 shift3'/>
          <div class='bubble bubble13'/>
          <div class='bubble bubble14 shift4'/>
          <div class='bubble bubble19'/>
        </section>
      </section>





    </div>

  );
}

export default Home;