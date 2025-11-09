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
        <Link href="/projectpage/stair-buddy" className="project-link">
          <div>
            <h2 style={{justifySelf:"center"}} className="project-header">Stair Buddy</h2>
            <img src="/Stair_Buddy.png" alt="Stair_Buddy Project" />
          </div>
        </Link>
      </div>
      <p className = "p-class">
        Stair Buddy is a smart assistive device designed to improve stair 
        safety through motion detection, audio alerts, and visual feedback. 
        It integrates key components such as the HC-SR501 PIR sensor, 
        PAM8302A audio amplifier, WS2812 LED light ring, and a 2.8” ILI9341 
        LCD display to provide real-time guidance and feedback. Multiple 
        design concepts were developed and evaluated to identify and refine 
        the most effective and user-friendly solution.
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
