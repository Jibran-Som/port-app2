import '../../../components/MainSection.css';
import GradientText from '../../../components/assets/GradientText';
import '../IndividualProject.css';

function CarAPI() {
  return (
    <div className="mainsection-container">
        <GradientText
          colors={['#FFFFFF', '#BEC0CC', '#8000FF', '#5D3FD3']}
          animationSpeed={5}
          showBorder={false}
          className="header2-class"
        >
          Car API Project
        </GradientText>
        <p></p>

        
        <img src="/CarAPI1.png" alt="Car API Project" className="project-image"/>
        <div className='div-class'>
            The initial goal was to design a marketable product that could be developed 
            using limited resources while still providing real-world value. During the 
            product development session, group members proposed a variety of potential 
            projects, including:

            <ul>
              <li>
                A Sunrise and Sunset Tracker to display daily solar cycles.              
              </li>
              <li>
                A Live Traffic Report providing real-time traffic updates.
              </li>
              <li>
                A Driving Fatality Tracker to visualize accident statistics and trends.
              </li>
              <li>
                A Weather Report system for current and forecasted conditions.
              </li>
              <li>
                A Planet Orbit Tracker to model and display planetary movements.
              </li>
            </ul>


            From these concepts, the Weather Tracker emerged as the most promising option. 
            Several design possibilities were explored, focusing on delivering real-time 
            data visualization, tracking, and interactive user experiences. Early development 
            ideas for the Weather Tracker included:

            <ul>
              <li>
                A road indicator that tracks incident rate for specific roads near the users location
              </li>
              <li>
                A display recommending driving routes based on current weather and road conditions
              </li>
              <li>
                A visual “risk gauge” that changes color or intensity based on real-time weather severity
              </li>
            </ul>
          
        </div>

        <div className='div-class' style={{justifySelf:'center', maxWidth:'700px'}}>
          The final design chosen was a design featuring a car and a billboard that displays 
          driving conditions based on real-time weather data. The code enables the PicoBoard 
          to pull region-specific data from the Open Meteo API for Calgary. The LCD display 
          updates according to the API data, indicating good road conditions during favorable 
          weather, intermediate conditions during moderate weather, and poor road conditions 
          during unfavorable weather. Additionally, color-coded LEDs respond to the active 
          weather conditions, providing a clear visual indicator of driving safety. The 
          target audience is Calgary drivers, though the code and design can be easily modified 
          to suit any location or audience.

        </div>
                
        <img src="/CarAPI2.png" alt="Car API Project" className="project-image" style={{maxWidth:'450px'}}/>

    </div>
  );
}

export default CarAPI;