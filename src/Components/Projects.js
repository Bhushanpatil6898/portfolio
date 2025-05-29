import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/farmdata.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/hardware.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Mahalaxmi_hardware" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Farmdata365" />
        {/* <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects