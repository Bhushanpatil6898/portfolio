import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    
   GlobeWeatherDesc:"GlobeWeather App is a simple weather forecast app built using React.It shows current weather and a 5-day forecast using the OpenWeatherMap API.",
   GlobeWeatherGithub:"",
   GlobeWeatherWebsite:"https://globeweatherapplication.netlify.app/",

    Farmdata365Desc:"Developing FarmData365, a web-based platform designed to help farmers store and manage their daily farming data. The application allows farmers to track various farming activities, making it easier to maintain records and improve productivity.",
    Farmdata365Github:"",
    Farmdata365Website:"https://farmdata365.netlify.app/",
    
    Mahalaxmi_hardwareDesc:"Developed a custom billing and inventory management system for my hardware shop,Mahalaxmi Hardware, to improve operations and enhance customer experience. Designed and implemented an easy-to-use Create Bill feature to streamline the billing process",
    Mahalaxmi_hardwareGithub:"",
    Mahalaxmi_hardwareWebsite:"https://mahalaxmi-hardware.netlify.app/",

    SociliteDesc:"Socialite is designed to provide a seamless, interactive experience. Whether you’re looking to expand your professional network, explore creative projects, or simply engage with friends and family, Socialite offers a space for everyone.",
    SociliteGithub:"",
    SociliteWebsite:"https://socilite.netlify.app/",

    FresherZoneDesc:"FresherZone is an online job portal dedicated to helping fresh graduates and early-career professionals find their ideal job. We provide a wide range of job listings, career resources, and expert advice to help you navigate your career journey.",
    FresherZoneGithub:"",
    FresherZoneWebsite:"",

   GatewayDesc:"Gateway is a centralized event management platform that enables multiple departments to independently schedule, book, and manage their events while ensuring seamless coordination and efficient resource allocation.",
   GatewayGithub:"",
   Gatewaybsite:"",

   PotliDesc:"Potli is a cloud storage platform that allows users to upload, store, and share files with ease. Whether you need to collaborate with colleagues, store important documents, or create folders to organize your content, Potli makes file management simple and accessible.",
   PotliGithub:"",
   PotliWebsite:"",

    
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox