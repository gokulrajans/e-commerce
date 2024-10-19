import React, { useState, useEffect } from 'react';
import './HomePageContent.css';

const HomePageContent = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const contents = [
    { h1: 'Welcome to Our Website', h6: 'Best Services Ever', button: 'Learn More' },
    { h1: 'Discover Our Products', h6: 'Quality You Can Trust', button: 'Shop Now' },
    { h1: 'Join Us Today', h6: 'Be a Part of Our Journey', button: 'Get Started' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 40000000); // Change the content every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-pg-animate-container">
      {contents.map((content, index) => (
        <div
          key={index}
          className={`homepagecontent-text-content ${index === visibleIndex ? 'hmpg-cnt-visible' : 'hmpg-cnt-hidden'}`}
        >
          <h1>{content.h1}</h1>
          <h6>{content.h6}</h6>
          <button>{content.button}</button>
        </div>
      ))}
    </div>
  );
};

export default HomePageContent;
