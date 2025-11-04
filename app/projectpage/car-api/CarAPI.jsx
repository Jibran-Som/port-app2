import '../../../components/MainSection.css';
import GradientText from '../../../components/assets/GradientText';
import '../images.css';

function CarAPI() {
  return (
    <div className="mainsection-container">
        <GradientText
          colors={['#FFFFFF', '#BEC0CC', '#8000FF', '#5D3FD3']}
          animationSpeed={5}
          showBorder={false}
          className="header1-class"
        >
          Car API Project
        </GradientText>
        <img src="/Car_API_image.png" alt="Car API Project" className="project-image"/>
        <a>Test2</a>
        <p>Test3</p>
    </div>
  );
}

export default CarAPI;