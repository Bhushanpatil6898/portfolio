import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/mypic.png';
import { CiCoffeeCup } from "react-icons/ci";
import { BsChatDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const openChatbox = () => {
    navigate("/chatbox");
  };

  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>BHUSHAN PATIL</b></h1>
          <Typed />   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            Contributed to the development of key projects, collaborating closely with design and product teams to ensure seamless feature integration.
            Enhanced user experience by optimizing application performance and implementing efficient front-end and back-end solutions.
            <br /><br />
            I am fluent in <b>React.js,Node.js,MongoDB</b> I am working on a few 
            projects in the <b>FULL</b> stack.<br />
            I plan to learn <b>AI</b>,<b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>

    
    </div>
  );
};

export default Home;
