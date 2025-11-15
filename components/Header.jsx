"use client";

import './Header.css';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

function Header() {
  const [isLightBackground, setIsLightBackground] = useState(false);
  const navRef = useRef(null);

  const getElementBrightness = (element) => {
    const style = window.getComputedStyle(element);
    
    // Check background color first
    const bgColor = style.backgroundColor;
    if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        return brightness;
      }
    }
    
    // If no background, check if it's an image (simplified)
    if (element.tagName.toLowerCase() === 'img') {
      return 255; // Assume images are light for safety
    }
    
    return 0; // Default to dark
  };

  const checkBackgroundBrightness = () => {
    if (!navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const elements = document.elementsFromPoint(
      navRect.left + navRect.width / 2,
      navRect.top + navRect.height / 2
    );

    const backgroundElement = elements.find(el => 
      !el.closest('.header-container') && 
      !el.closest('.header-nav')
    );

    if (backgroundElement) {
      const brightness = getElementBrightness(backgroundElement);
      setIsLightBackground(brightness > 128); // Threshold for light/dark
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(checkBackgroundBrightness);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Check initially and after a short delay
    checkBackgroundBrightness();
    setTimeout(checkBackgroundBrightness, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
      <div 
        ref={navRef}
        className={`header-nav ${isLightBackground ? 'light-background' : ''}`}
      >
        <Link href="/" className="header-link">Home</Link>
        <a href="/projectpage" className="header-link">Projects</a>
        <a
          href="https://www.linkedin.com/in/jibran-somroo-910l"
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

      <div className="header-text">
        Welcome to My Portfolio
      </div>
    </div>
  );
}

export default Header;