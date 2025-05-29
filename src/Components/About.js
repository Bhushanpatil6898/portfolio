import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Bhushan Patil</b> and I am from Jalgon, India.
            I'm a <b>Fullstack  developer</b> and have completed my <b>BSc in Computer Science</b>, a <b>Full Stack course</b> at Giri's Tech Hub Pune, and am currently employed at <b>Globalion Technology Solution LLP, Pune</b>. <br/><br/>
            <br/><br/>

            <b>Software Developer</b> with over 1 year of experience specializing in front-end and back-end development. Skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB for efficient, scalable data management. Proven ability to collaborate with design and product teams to integrate new features seamlessly,
             optimize application performance, and enhance user experience.
           
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Java'/>
        <Skills skill='Html'/>
        
      </div>
    </>
  )
}

export default About