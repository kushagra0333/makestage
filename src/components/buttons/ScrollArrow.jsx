import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './buttons.css';

const ScrollArrow = () => {
    const [isVisible, setIsVisible] = useState(true);
    const handleClick = () => {
        const scrollHeight = window.innerHeight - 60; // Adjust the number to change the scroll amount
        window.scrollBy({
          top: scrollHeight,
          behavior: 'smooth',
        });
        
        setIsVisible(false);
        
        window.removeEventListener('scroll', handleScroll);
      };

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsVisible(false);
          }else {
            setIsVisible(true);
          }
        };
    
        if (isVisible) {
          window.addEventListener('scroll', handleScroll);
        }
    
        return () => {

        };
      }, [isVisible]);

      
    return (
        <>
        {isVisible && (
          <div className="down-arrow" onClick={handleClick}>
          </div>
        )}
      </>
    );
};  

export default ScrollArrow;