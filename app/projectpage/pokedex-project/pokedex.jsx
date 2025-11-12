import '../../../components/MainSection.css';
import GradientText from '../../../components/assets/GradientText';
import '../IndividualProject.css';

function Pokedex() {
  return (
    <div className="mainsection-container">
        <GradientText
          colors={['#FFFFFF', '#BEC0CC', '#8000FF', '#5D3FD3']}
          animationSpeed={5}
          showBorder={false}
          className="header2-class"
        >
          Pokédex App
        </GradientText>
        
        <p className='p-class'>
          <a href="https://github.com/Jibran-Som/pokedex-app.git" target="_blank" rel="noopener noreferrer">Github Page</a>
        </p>

        
        <div className='div-class'>
            This Pokédex app is a full-stack project that brings the world of Pokémon to your 
            fingertips. By combining data collection, backend logic, and a dynamic frontend, it 
            allows users to explore detailed Pokémon information seamlessly.
            <br/><br/>
            To begin, a web scraper built with BeautifulSoup was used to collect Pokémon data from 
            PokémonDB. This data was then stored in a MongoDB database. The Flask backend interacts 
            with the database through RESTful API endpoints, providing structured data to the React 
            frontend, which dynamically displays detailed Pokémon information to the user.
            <br/><br/>
            The app includes several core features that highlight its full-stack capabilities 
            for an interactive experience for users:

            <ul>
                <li><b>MongoDB Integration:</b> Efficiently stores and manages Pokémon data for fast retrieval.</li>
                <li><b>RESTful API:</b> Flask-based API for querying Pokémon by name, type, or other attributes.</li>
                <li><b>Detailed Pokémon Data:</b> Includes stats, abilities, and learnable moves for each Pokémon.</li>
                <li><b>Filtering & Pagination:</b> Enables seamless browsing and searching through large datasets.</li>
                <li><b>Unique ID System:</b> Handles alternate Pokémon forms and names using unique identifiers.</li>

            </ul>



        </div>

        <img src="/Pokedex2.png" alt="Car API Project" className="project-image" style={{maxWidth:'700px'}}/>

        <div>
          <img src="/Pokedex3.png" alt="Car API Project" className="project-image" style={{maxWidth:'450px'}}/>
          <br/>
          <img src="/Pokedex4.png" alt="Car API Project" className="project-image" style={{maxWidth:'450px'}}/>

        </div>

        <div className='div-class'>
          Beyond these core features, the app also implements an advanced search and filtering system 
          designed to make exploring the Pokédex both efficient and intuitive. Users can search for 
          Pokémon by name or filter them by type, allowing for quick discovery of specific Pokémon or 
          entire categories such as Water, Fire, or Electric types. Additionally, the move database 
          supports filtering by type and category, enabling users to refine results based on whether 
          a move is Status, Special, or Physical. This multi-layered filtering system ensures users 
          can easily navigate the extensive dataset and tailor their experience to focus on the Pokémon 
          or moves they’re most interested in.
          <br/><br/>
          Clicking on a Pokémon’s name redirects users to a dedicated Pokémon information page, where 
          detailed stats are displayed visually using bar graphs for a clearer representation of each 
          Pokémon’s strengths and weaknesses. From this page, users can also explore Pokémon-specific 
          movesets, with search functionality that allows filtering through the moves each Pokémon can 
          learn. This provides a deeper, more personalized browsing experience that combines visual data 
          presentation with flexible search capabilities.
          <br/><br/>
          Overall, this Pokédex app showcases the power of combining data-driven backend architecture 
          with an interactive frontend. By integrating efficient search and filtering systems, detailed 
          data visualization, and dynamic Pokémon-specific pages. It serves as a comprehensive demonstration 
          of full-stack development, highlighting skills in web scraping, API design, database management, 
          and frontend development. Ultimately, the project is supposed to reflect a strong focus on both technical 
          implementation and user-centered design, resulting in a functional and visually appealing 
          application.

        </div>
        






                

    </div>
  );
}

export default Pokedex;