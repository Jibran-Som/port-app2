import Link from 'next/link';
import './ProjectSection.css'
import './MainSection.css';
import GradientText from './assets/GradientText';

function ProjectSection() {
  return (
    <div className="mainsection-container">
      <GradientText
        colors={['#FFFFFF', '#BEC0CC', '#8000FF', '#5D3FD3']}
        animationSpeed={5}
        showBorder={false}
        className="header1-class"
      >
        Projects
      </GradientText>
      <div></div>
      <hr className='section-divider' />
      <div></div>
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
