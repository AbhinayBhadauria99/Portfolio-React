import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills=()=>{
    return(
        <section id='skills'>
           <span className="skillTitle">What I do</span>
           <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS,Javascript,React,MongoDB,SQL,Mongoose,NodeJS,ExpressJS,and DOM etc.</span>
           <div className="skillBars">
             <div className="skillBar">
                <img src={UIDesign} alt="uiDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>This is an demo text you can write your own content here</p>
                </div>
             </div>
             <div className="skillBar">
                <img src={WebDesign} alt="webDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Website Design</h2>
                <p>This is an demo text you can write your own content here</p>
                </div>
             </div>
             <div className="skillBar">
                <img src={AppDesign} alt="appDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>App Design</h2>
                <p>This is an demo text you can write your own content here</p>
                </div>
             </div>
           </div>
        </section>
    );
}

export default Skills;