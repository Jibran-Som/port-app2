import './Header.css';
import Ballpit from './assets/Ballpit';
import Link from 'next/link';


function Header() {



  return (
    <div className="header-container">
      {/* Ballpit Background */}


      <div className="header-nav">
        <Link href="/" className="header-link">Home</Link>
        <a href="/projectpage" className="header-link">Projects</a>
        <a
          href="https://www.linkedin.com/in/jibran-somroo-910l/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Jibran-Som"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link"
        >
          GitHub
        </a>
      </div>

      {/* Header Text */}
      <div className="header-text">
        Welcome to My Portfolio
      </div>
    </div>
  );
}

export default Header;
