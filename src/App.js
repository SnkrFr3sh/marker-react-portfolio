import React from "react";
// import { Link } from 'react-router-dom';
import './App.css';


import './pages/Landing/Landing.css';
import './pages/Home/Home.css';
import './pages/Work/work.css';
import homePhoto from './components/images/homephoto.png';
// import pixelPhoto from './components/images/pixelPhoto.png';
import htmlIcon from './components/images/html.png';
import cssIcon from './components/images/css.png';
import jsIcon from './components/images/javascript.png';
import reactjsIcon from './components/images/reactjs.png';
import mongoIcon from './components/images/mongodb.png';
import sqlIcon from './components/images/mysql.png';
import expressIcon from './components/images/expressjs.png';
import nodeIcon from './components/images/nodejs.png';
import sassIcon from './components/images/sass.png';
import project1 from './components/images/project1.png';
import project2 from './components/images/project2.png';
// import project3 from './components/images/project3.png';


function App() {

  return (
    <section class='body'>
      <div class='websiteBody'>
        <section class='landingBody'>
          <div class='landingContainer'>
            <a href='#about' to='' className='landingText'>
              <div>Hello,</div>
              <div>I'm Marc.</div>
            </a>
          </div>
          <div class='bubbleLanding'>
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
          </div>
        </section>
        <section class='aboutBody'>
          {/* <div class='aboutTitle'>
          </div> */}
          <div class='aboutSectionBorder'>
            {/* <div class='aboutTitleText'>MARC PACAMPARA</div> */}
            <div class='aboutColumnContainer container'>

              <div class='row'>

                <div class='aboutTitleText'>MARC PACAMPARA</div>
                <div class='aboutLeft col-md-6  mx-auto'>

                  <div>
                    <img src={homePhoto} alt='' class='homePhoto' id='about'></img>
                  </div>
                  <div class='aboutSection' >
                    <div class='aboutText'>
                      <p>I am a full-stack web developer based in Seattle. I bring 20+ years of human based artistry and design experience to digital needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Auos?
                      </p>
                    </div>
                  </div>

                </div>
                <div class='aboutRight col-md-6  mx-auto'>
                  <div class='techAboutSection'>
                    <div class='techAboutText'>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="workBody">
          <div class='workTitle'>
            <div class='workTitleText'>PROJECTS</div>
            <div className='workTitleBox'></div>
          </div>
          <div class='workContainer'>
            <div class='workSection'>
              <div class='projectLeft'>
                <div class='projectLeftSection'>
                  <a href='https://tailorthrift.herokuapp.com' target='_blank' rel="noreferrer">
                    <img src={project1} alt='' class='projectPhotoLeft' />
                  </a>

                  <div class='projectLeftText'>
                    <div class='projectLeftTitle'>
                      <p>Tailor Thrift</p>
                      <p>E-Commerce Website</p>
                    </div>

                    <p class='projectLeftDesc'>Full Stack E-commerce website built with REACT, Node.js, Express.js, MongoDB, </p>
                    <a href='https://tailorthrift.herokuapp.com' target='_blank' rel="noreferrer" class='projectLeftLive'>
                      <div class='projectLeftLiveBtn'>LIVE SITE</div>
                      <div class='projectLeftLiveBtnLine'></div>
                    </a>
                    <a href='https://github.com/StevenEi/Project-03-TailorThrift' target='_blank' rel="noreferrer" class='projectLeftLearnMore'>
                      <div class='projectLeftLearnMoreBtn'>LEARN MORE</div>
                      <div class='projectLeftLearnMoreBtnLine'></div>
                    </a>
                  </div>
                </div>
              </div>
              <div class='projectRight'>
                <div class='projectRightSection'>
                  <a href='https://snkrfr3sh.github.io/sport_facts/' target="_blank" rel="noreferrer">
                    <img src={project2} alt='' class='projectPhotoRight' />
                  </a>

                  <div class='projectRightText'>
                    <div class='projectRightTitle'>
                      <p>NBA Facts</p>
                      <p> Front-End Website</p>
                    </div>

                    <p class='projectRightDesc'>Front End Web Search Site built with Node.js, Express.js, Web APIs: NBA & Bing Photos </p>
                    <a href='https://snkrfr3sh.github.io/sport_facts/' target="_blank" rel="noreferrer" class='projectRightLive'>
                      <div class='projectRightLiveBtn'>LIVE SITE
                        <div class='projectRightLiveBtnLine'></div>
                      </div>

                    </a>
                    <a href='https://github.com/SnkrFr3sh/sport_facts' targer='_blank' rel="noreferrer" class='projectRightLearnMore'>
                      <div class='projectRightLearnMoreBtn'>LEARN MORE
                        <div class='projectRightLearnMoreBtnLine'></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section class='contactSection'>
          <div class='contactArea'>
            <div class='contactText'>Interested in working together?
            </div>
            <div class='contactBtnArea'>

            <a class='contactBtn' href="mailto:mpacampara@gmail.com?subject=Web%20Services%20Inquiry">CONTACT ME
            </a>
                          {/* <div class='contactBtnLine'/> */}
            </div>

            <div class='contactBtnArea'>
              <div class='contactIcon'>
                <i class="fa fa-instagram" />
              </div>
              <div class='contactIcon'>
                <i class="fa fa-github contactIcon" />
              </div>
              <div class='contactIcon'>
                <i class="fa fa-linkedin contactIcon" />
              </div>

            </div>

          </div>





        </section>

      </div>
      <div class='footerSection'>


      </div>


      {/* <div class='test'> this is a test</div> */}
      {/* <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Landing />} />

          </Routes>
        </BrowserRouter> */}
    </section>
  );
}

export default App;