import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/farmdata.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/hardware.png';
import Socilite from '../images/socilite.png';
import Fresherzone from '../images/fresherzone.png';
import Potli from '../images/potli.png';
import Gateway  from '../images/gateway.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'><b>My </b> <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Mahalaxmi_hardware" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Farmdata365" />
        <ProjectBox projectPhoto={Socilite} projectName="Socilite" />
        <ProjectBox projectPhoto={Gateway} projectName="Gateway"/>
        <ProjectBox projectPhoto={Fresherzone} projectName="FresherZone"/>
        <ProjectBox projectPhoto={Potli} projectName="Potli" />
       
      </div>

    </div>
  )
}

export default Projects