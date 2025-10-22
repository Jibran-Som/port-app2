import './Header.css';
import Ballpit from './assets/Ballpit';
import Link from 'next/link';


function Header() {
  return (
    <div className="header-container">
      {/* Ballpit Background */}
      <Ballpit
        count={30}
        gravity={0.1}
        friction={0.9975}
        wallBounce={0.95}
        followCursor={false}
        ambientColor={16777215}
        lightIntensity={1}
        minSize={0.5}
        maxSize={1}
        maxVelocity={0.15}
        colors={['#8000FF', '#5D3FD3', '#FFFFFF', '#BEC0CC']}
      />

      {/* Crystal Nav Bar */}
      <div className="header-nav">
        <Link href="/projectpage" className="header-link">About</Link>
        <a href="#resume" className="header-link">Resume</a>
        <a
          href="https://linkedin.com/in/YOURPROFILE"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/YOURUSERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          GitHub
        </a>
        {/* <img src={GitHubIcon} alt="GitHub" className="icon" /> */}
      </div>

      {/* Header Text */}
      <div className="header-text">
        Welcome to My Portfolio
      </div>
    </div>
  );
}

export default Header;
