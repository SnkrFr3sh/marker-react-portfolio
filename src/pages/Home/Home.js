import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

import homePhoto from '../../components/images/homephoto.png'
import pixelPhoto from '../../components/images/pixelPhoto.png'



function Home() {
  return (
    <div>
      {/* <Landing /> */}
      <div class='homeBody'>

        <section class='homeSection'>
          <div class='aboutTitle'>
            <div className='aboutTitleBox'></div>
            <div class='aboutTitleText'>ABOUT</div>
            </div>
          {/* <div class='aboutTextBox'>
          <div class='aboutBar'>
            About me
            <span class='aboutToggle'>
              -
            </span>
          </div>
          <div class='aboutText'>
            I am an full-stack web developer based in Seattle. I bring 20+ years of human based artistry and design experience to digital needs.
          </div>

        </div> */}
          <div class='homeBox'></div>

          <div>
            <img src={homePhoto} alt='' class='homePhoto'></img>
          </div>
          <div>
            <img src={pixelPhoto} alt='' class='pixelPhoto'></img>
          </div>
          {/* <div class='nameHomeBox'> */}
          <div class='aboutSectionBorder'></div>
          <div class='aboutSection'>
            <div class='aboutText'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta maiores a odio nulla aspernatur tenetur accusantium, unde eum, neque dignissimos beatae impedit voluptatum commodi nesciunt quos nostrum. Optio, dolore!</p>
              {/* I am an full-stack web developer based in Seattle. I bring 20+ years of human based artistry and design experience to digital needs. */}
            </div>
            {/* </div> */}


            {/* <Link to='/aboutme'>
            <div><button class='nameHome1 nameHome button1'><span class='nameHome1 nameHome animate__fadeInLeft'>Hello, </span></button>
            </div>
          </Link>
          <Link to='/work'>
            <div>
              <button class='nameHome2 button2'><span class='nameHome2 '>I'm Marc.</span></button>
            </div>
          </Link> */}
            {/* <Link to='/art'>
            <div>
              <button class='nameHome3 nameHome button3'><span class='nameHome1 nameHome'>Marc</span></button>
            </div>
          </Link> */}
          </div>

          <div class='techAboutSectionBorder'></div>
          <div class='techAboutSection'>
            <div class='techAboutText'>
              
              {/* I am an full-stack web developer based in Seattle. I bring 20+ years of human based artistry and design experience to digital needs. */}
            </div>
            </div>
          {/* <div class='aboutParagraph'>
        I am a full-stack web developer
        </div> */}
          {/* <section class='bubbleHome'>
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
        </section> */}

        </section>
        <section>
        </section>





      </div>
    </div>
  );
}

export default Home;