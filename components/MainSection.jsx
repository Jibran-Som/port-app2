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
        About Me
      </GradientText>


      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingLeft:'0.1rem' }}>
        <p>
          I’m a Software Engineering student at the University of Calgary with a Minor in Aerospace Engineering. 
          I’m passionate about developing efficient and scalable software solutions that bridge hardware and software systems.
        </p>
        <img src="/SchulichLogo.png" alt="Car API Project" className="image-class"/>

      </div>


      <GradientText
        colors={['#FFFFFF', '#BEC0CC', '#8000FF', '#5D3FD3']}
        animationSpeed={5}
        showBorder={false}
        className="header3-class"
      >
        What I Do
      </GradientText>
      <p>
        I’ve worked on projects involving <strong>Python, Java, C/C++, JavaScript, Flask, React, and MongoDB</strong> from 
        full-stack web applications to smart embedded devices and even Object-oriented Programming. I love tackling complex problems and learning new technologies that 
        push the boundaries of what’s possible.
      </p>




    </div>
  );
}

export default MainSection;