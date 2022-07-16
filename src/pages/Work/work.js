import React from 'react';
import './work.css'

export default function Work() {
    return (
        <section class="workBody">
            <div class='workTitle'>
                <div class='workTitleText'>PROJECTS</div>
                <div className='workTitleBox'></div>
            </div>
            <div class='workSection'>
                {/* <div class='row'> */}
                    <div class='project1'>
                            <div class='project1Section'>
                                <div class='project1Text'>
                                    <div class='projectTitle'>
                                    <p>Tailor Thrift</p>
                                    <p>E-Commerce Website</p>
                                    </div>

                                    <p class='projectDesc'>Full Stack E-commerce website built with REACT, Node.js, Express.js, MongoDB, </p>
                                    <div class='project1Live'>
                                    <div class='project1LiveBtn'>LIVE SITE</div>
                                    <div class='project1LiveBtnLine'></div>
                                    </div>
                                    <div class='project1LearnMore'>
                                    <div class='project1LearnMoreBtn'>LEARN MORE</div>
                                    <div class='project1LearnMoreBtnLine'></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class='project2'>
                        <div class='techworkSection'>
                            <div class='techworkText'>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div class='workTitle'>Work</div>
        </section>

    );
}
