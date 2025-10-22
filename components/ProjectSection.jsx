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
          Test am I?
        </GradientText>
        <p>I'm a Software Engineering Student</p>
        <a>TAs</a>
        <p>ASd</p>
    </div>
  );
}

export default ProjectSection;