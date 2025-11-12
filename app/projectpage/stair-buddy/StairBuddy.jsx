import '../../../components/MainSection.css';
import GradientText from '../../../components/assets/GradientText';
import '../IndividualProject.css';

function StairBuddy() {
  return (
    <div className="mainsection-container">
        <GradientText
          colors={['#FFFFFF', '#BEC0CC', '#8000FF', '#5D3FD3']}
          animationSpeed={5}
          showBorder={false}
          className="header2-class"
        >
          Stair Buddy
        </GradientText>
        <p></p>
        
        <div className='div-class'>
            The primary objective was to design a marketable product that could be developed with 
            limited resources while still offering practical, real-world value. During the product 
            development session, the team proposed several potential project ideas. However, the 
            final decision was influenced by certain restrictions placed on the product, including:

            <ul>
                <li>
                    The product had to be developed using a PicoBoard microcontroller.
                </li>
                <li>
                    It needed to be interactive and user-friendly, ensuring an engaging user experience.
                </li>
                <li>
                    The design required a clearly defined target audience and had to address a specific real-world need.
                </li>
                <li>
                    The project needed to be achievable within the available time frame and resource constraints.
                </li>
                <li>
                    The product was required to incorporate real-time data or sensor-based inputs.
                </li>
            </ul>
          
        </div>

        <img src="/StairBuddy3.png" alt="Car API Project" className="project-image"/>

        <img src="/StairBuddy1.png" alt="Car API Project" className="project-image" style={{maxWidth:'450px'}}/>


        <div className='div-class' style={{justifySelf:'center', maxWidth:'700px', alignSelf: 'center'}}>          
          After evaluating various design ideas, the team selected "Stair Buddy", an interactive companion 
          device designed to enhance safety and provide a friendly presence for users. The Stair Buddy 
          utilizes an HC-SR501 PIR motion sensor to detect movement, which in turn activates its WS2812 
          RGB Light Ring to emit a visual alert. Its face is displayed on a 2.8” ILI9341 LCD screen, capable 
          of showing expressive facial animations that change based on input from the PAM8302A audio amplifier, 
          making the device appear more lifelike and engaging. This combination of responsive lighting, motion 
          detection, and expressive visuals creates a product that is both functional and companion-like, 
          encouraging user interaction while maintaining practicality.

          <div style={{marginTop:'15px'}}>
            <b>Target Demographic:</b> The Stair Buddy is designed for elderly individuals, young children, and people 
            who are injured or disabled, providing additional safety and guidance when navigating stairs. It 
            addresses a commonly faced issue the risk of tripping or falling in low-light conditions by illuminating 
            the stairs upon detecting movement. This feature significantly reduces the likelihood of injury in the 
            dark, making Stair Buddy both a practical and reassuring companion for users with mobility or visibility 
            challenges.
          </div>
          <img src="/StairBuddy2.png" alt="Car API Project" className="project-image" style={{maxWidth:'300px', justifySelf: 'center', marginTop: '20px'}}/>

        </div>



                

    </div>
  );
}

export default StairBuddy;