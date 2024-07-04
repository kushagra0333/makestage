import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Col, Container } from "react-bootstrap";
import heroImage from "../../assets/images/Hero.webp";
import GetAQuote from "../buttons/GetAQuote";
import "./Hero.css";
import Logos from "../../assets/logos/logos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <Container fluid className="hero">
      <Container className="hero-content-container">
        <Col md={6} className="hero-text">
          <h1 style={{ marginBottom: "1.5rem" }}>
            Rapid prototyping and manufacturing
          </h1>
          <h3 style={{ marginBottom: "1.5rem" }}>
            <ul className="hero-list list-unstyled">
              <li>3D Printing</li>
              <li>CNC Machining</li>
              <li>Sheet Metal</li>
            </ul>
          </h3>
          <GetAQuote />
          <p style={{ marginTop: "1rem", fontSize: "12px" }}>
            <FaRegCheckCircle /> Get Parts as Fast as Next Day.
          </p>
        </Col>
        <Col md={6} className="hero-image">
          <img src={heroImage} alt="Hero" />
        </Col>
      </Container>
      <Container fluid className="hero-logos-container">
        <Container className="company-logos-text">
          <p style={{ color: "#666666" }}>
            TRUSTED BY{" "}
            <span style={{ color: "#000000", fontWeight: "bold" }}>
              THE BEST
            </span>{" "}
            ORGANIZATIONS WORLDWIDE
          </p>
        </Container>
        <Container className="company-logos d-none d-lg-flex flex-wrap">
          <img
            src={Logos.Microsoft}
            alt="Microsoft Logo"
            className="company-logo"
          />
          <img
            src={Logos.BostonDynamics}
            alt="Boston Dynamics Logo"
            className="company-logo"
          />
          <img
            src={Logos.StanleyBlack}
            alt="Stanley Black Logo"
            className="company-logo"
          />
          <img
            src={Logos.EmbarkTrucks}
            alt="Embark Trucks Logo"
            className="company-logo"
          />
          <img
            src={Logos.Skyryse}
            alt="Skyryse Logo"
            className="company-logo"
          />
          <img
            src={Logos.Stanford}
            alt="Stanford Logo"
            className="company-logo"
          />
        </Container>
        <Slider {...settings} className="company-logos d-lg-none">
          <img src={Logos.Microsoft} alt="Microsoft Logo" />

          <img src={Logos.BostonDynamics} alt="Boston Dynamics Logo" />

          <img src={Logos.EmbarkTrucks} alt="Embark Trucks Logo" />

          <img src={Logos.StanleyBlack} alt="Stanley Black Logo" />

          <img src={Logos.Skyryse} alt="Skyryse Logo" />

          <img src={Logos.Stanford} alt="Stanford Logo" />
        </Slider>
      </Container>
    </Container>
  );
};

export default Hero;
