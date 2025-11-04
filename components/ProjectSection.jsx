import Link from 'next/link';
import './ProjectSection.css'
import GradientText from './assets/GradientText';

function ProjectSection() {
  return (
    <div className="projectsection-container">
      <GradientText
        colors={['#FFFFFF', '#BEC0CC', '#8000FF', '#5D3FD3']}
        animationSpeed={5}
        showBorder={false}
        className="header1-class"
      >
        Projects 
      </GradientText>


      <hr className='section-divider' />
      <div className="project-item">
        <Link href="/projectpage/car-api" className="project-link">
          <div>
            <h2 style={{justifySelf:"center"}} className="project-header">Stair Buddy</h2>
            <img src="/Stair_Buddy.png" alt="Car API Project" />
          </div>
        </Link>
      </div>
      <p className = "p-class">
        Led a team of three to develop Stair Buddy, a smart assistive device 
        enhancing stair safety with motion, audio, and visual feedback. 
        Integrated the HC-SR501 PIR sensor, PAM8302A audio amplifier, WS2812 
        RGB light ring, and 2.8” ILI9341 LCD, after evaluating multiple design 
        concepts to finalize the optimal solution.
      </p>




      <hr className='section-divider' />
      <div className="project-item">
        <Link href="/projectpage/car-api" className="project-link">
          <div>
            <h2 style={{justifySelf:"center"}} className="project-header">Car API</h2>
            <img src="/Car_API_image.png" alt="Car API Project" />
          </div>
        </Link>
      </div>
      <p className = "p-class">
        This project features a CAD-designed small car model integrated 
        with a digital billboard that dynamically displays real-time driving 
        conditions. The system retrieves live weather data from an external 
        API and processes it to determine factors that affect driving safety 
        such as rain, fog, snow, or clear skies.
      </p>

      




    </div>
  );
}

export default ProjectSection;
