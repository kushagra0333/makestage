import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./buttons.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <Button
      className={
        isVisible ? "back-to-top-button show" : "back-to-top-button hide"
      }
      onClick={scrollToTop}
    >
      Back to Top
    </Button>
  );
};

export default BackToTopButton;
