import React from 'react'
import { Link } from 'react-router-dom'
import '../Landing/Landing.css'
import '../Home/Home.css'
import homePhoto from '../../components/images/homephoto.png'
import pixelPhoto from '../../components/images/pixelPhoto.png'
import htmlIcon from '../../components/images/html.png'
import cssIcon from '../../components/images/css.png'
import jsIcon from '../../components/images/javascript.png'
import reactjsIcon from '../../components/images/reactjs.png'
import mongoIcon from '../../components/images/mongodb.png'
import sqlIcon from '../../components/images/mysql.png'
import expressIcon from '../../components/images/expressjs.png'
import nodeIcon from '../../components/images/nodejs.png'
import sassIcon from '../../components/images/sass.png'


export default function Landing() {
  //   const navigate = useNavigate()

  return (
    <div class='websiteBody'>
      <section class='landingBody'>
        {/* <div class='landingContainer circle-leave-active'> */}
        <div class='landingContainer'>
          <Link to='' className='landingText'>
            <div>Hello,</div>
            <div>I'm Marc.</div>
          </Link>
        </div>
        {/* <div class='bubbleLanding'>
          <div class='bubble bubble1 shift1' />
          <div class='bubble bubble2 shift2' />
          <div class='bubble bubble3 shift3' />
          <div class='bubble bubble4 shift4' />
          <div class='bubble bubble5 shift3' />
          <div class='bubble bubble6 shift1' />
          <div class='bubble bubble7 shift4' />
          <div class='bubble bubble8 shift4' />
          <div class='bubble bubble9 shift2' />
          <div class='bubble bubble10 shift3' />
          <div class='bubble bubble11 shift1' />
          <div class='bubble bubble13 shift4' />
          <div class='bubble bubble14 shift2' />
          <div class='bubble bubble19 shift4' />
        </div> */}
      </section>
      <section class='homeBody'>
        <section class='homeSection'>
          <div class='aboutTitle'>
            <div className='aboutTitleBox'></div>
            <div class='aboutTitleText'>ABOUT</div>
          </div>
          <div class='homeBox'></div>
          <div>
            <img src={homePhoto} alt='' class='homePhoto'></img>
          </div>
          {/* <div>
            <img src={pixelPhoto} alt='' class='pixelPhoto'></img>
          </div> */}
          <div class='aboutSectionBorder'></div>
          <div class='aboutSection'>
            <div class='aboutText'>
              <p>I am a full-stack web developer based in Seattle. I bring 20+ years of human based artistry and design experience to digital needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Auos?
              </p>
            </div>
          </div>

          {/* <div class='techAboutSectionBorder'></div> */}
          <div class='techAboutSection'>
            <div class='techAboutText'>
              {/* <div class='iconContainer'> */}
                <div class='iconTile'>
                  <img src={htmlIcon} alt='' class='icon icon1' />
                  <p class='iconText'>HTML</p>
                </div>
                 <div class='iconTile'>
                  <img src={cssIcon} alt='' class='icon icon2' />
                  <p class='iconText'>CSS</p>
                </div>
                 <div class='iconTile'>
                  <img src={jsIcon} alt='' class='icon icon3' />
                  <p class='iconText'>Javascript</p>
                </div>
                 <div class='iconTile'>
                  <img src={reactjsIcon} alt='' class='icon icon4' />
                  <p class='iconText'>React.js</p>
                </div>
                 <div class='iconTile'>
                  <img src={mongoIcon} alt='' class='icon icon5' />
                  <p class='iconText'>MongoDB</p>
                </div>
                 <div class='iconTile'>
                  <img src={sqlIcon} alt='' class='icon icon6' />
                  <p class='iconText'>MySQL</p>
                </div>
                 <div class='iconTile'>
                  <img src={expressIcon} alt='' class='icon icon6' />
                  <p class='iconText'>Express.js</p>
                </div>
                 <div class='iconTile'>
                  <img src={nodeIcon} alt='' class='icon icon8' />
                  <p class='iconText'>Node.js</p>
                </div>
                 <div class='iconTile'>
                  <img src={sassIcon} alt='' class='icon icon9' />
                  <p class='iconText'>SASS</p>
                </div>

              {/* </div> */}
              {/* I am an full-stack web developer based in Seattle. I bring 20+ years of human based artistry and design experience to digital needs. */}
            </div>
          </div>
        </section>
      </section>

    </div>
  )
}
