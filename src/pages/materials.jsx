import { React } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./pages.css";
import {
  plasticsList,
  metalsList,
  compositesList,
} from "../data/materialsList";
import { Container } from "react-bootstrap";
import ScrollArrow from "../components/buttons/ScrollArrow";

const Materials = () => {
  return (
    <div className="materials-container">
      {/* <div className="background-image-container">
        <img src={heroImage} alt="Background" className="background-image" />
      </div> */}
      <Container fluid className="materials-content">
        <h1>
          <strong>Our Materials</strong>
        </h1>
        <p>
          Unleash the potential of your next engineering project with our
          comprehensive materials library, tailored for mechanical engineers and
          supply chain managers seeking precision and reliability. From
          high-strength metals to versatile plastics and beyond, find the ideal
          material to elevate your designs and streamline your production
          process.
        </p>
      </Container>
      <ScrollArrow></ScrollArrow>
      <Container className="materials-tabs">
        <Tabs defaultActiveKey="plastics" className="mb-3 custom-tabs" fill>
          <Tab eventKey="plastics" title="Plastics">
            <div className="materials-grid">
              {Object.keys(plasticsList).map((category, index) => (
                <div className="materials-list-wrapper" key={index}>
                  <h3>{category}</h3>
                  <ul>
                    {plasticsList[category].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="metals" title="Metals">
            <div className="materials-grid">
              {Object.keys(metalsList).map((category, index) => (
                <div className="materials-list-wrapper" key={index}>
                  <h3>{category}</h3>
                  <ul>
                    {metalsList[category].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="composites" title="Composites">
            <div className="materials-grid">
              {Object.keys(compositesList).map((category, index) => (
                <div className="materials-list-wrapper" key={index}>
                  <h3>{category}</h3>
                  <ul>
                    {compositesList[category].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Materials;
