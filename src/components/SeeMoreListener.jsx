import { useState, useEffect, useRef } from "react";

const useResizeListener = (minLines) => {
  const [showButton, setShowButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(1.2);

  useEffect(() => {
    const calculateLines = () => {
      const textElement = textRef.current;
      const computedStyle = window.getComputedStyle(textElement);
      const containerHeight = textElement.scrollHeight;
      const numLines = Math.round(
        containerHeight / parseFloat(computedStyle.lineHeight)
      );

      setShowButton(numLines > minLines);

      if (!showButton && isExpanded) {
        setIsExpanded(false);
      }

      setLineHeight(parseFloat(computedStyle.lineHeight));
    };

    calculateLines();
    window.addEventListener("resize", calculateLines);

    return () => {
      window.removeEventListener("resize", calculateLines);
    };
  }, [showButton, isExpanded]);

  const toggleViewMore = () => {
    setIsExpanded(!isExpanded);
  };

  return { showButton, isExpanded, textRef, lineHeight, toggleViewMore };
};

export default useResizeListener;
