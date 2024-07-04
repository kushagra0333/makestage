import React, {  } from "react";
import "./pages.css";
import { Container } from "react-bootstrap";
import Services from "../components/blocks/Services";
import ViewMore from "../components/ViewMore";
import useResizeListener from "../components/SeeMoreListener";

const Capabilities = () => {
const {
  showButton,
  isExpanded,
  textRef,
  lineHeight,
  toggleViewMore,
} = useResizeListener(7);

  return (
    <div className="capabilities-container">
      <Container fluid className="capabilities-content">
        <h1>Explore Our Range of Capabilities</h1>
        <p
          ref={textRef}
          style={{
            maxHeight: isExpanded ? "none" : `${7 * lineHeight}px`, // Show all lines if expanded, otherwise show only 7 lines
            overflow: "hidden",
            marginBottom: "0.3rem",
          }}
        >
          Unlock the potential of your projects with our diverse array of
          cutting-edge manufacturing capabilities. At our facilities, we blend
          expertise with innovation to offer a wide range of services tailored
          to your specific needs. Whether you're in need of precision CNC
          machining, state-of-the-art 3D printing, or specialized sheet metal
          fabrication, our team is dedicated to delivering exceptional results
          with speed and accuracy. From prototype development to large-scale
          production, we partner with you every step of the way to ensure your
          vision becomes reality. Explore our comprehensive suite of advanced
          manufacturing solutions and experience the difference of working with
          a trusted industry leader.
        </p>
        {showButton && (
          <ViewMore isExpanded={isExpanded} toggleViewMore={toggleViewMore} />
        )}
      </Container>
      <Services />
    </div>
  );
};

export default Capabilities;
