import './MainSection.css';
import GradientText from './assets/GradientText';

function MainSection() {
  return (
    <div className="mainsection-container">
        <GradientText
          colors={['#FFFFFF', '#BEC0CC', '#8000FF', '#5D3FD3']}
          animationSpeed={5}
          showBorder={false}
          className="header2-class"
        >
          Who am I?
        </GradientText>
        <p>Test </p>
        <a>Test2</a>
        <p>Test3</p>
    </div>
  );
}

export default MainSection;