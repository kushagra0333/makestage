import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css"; // Import your custom CSS file for Footer styling
import Logo from "../../assets/images/maker.webp";
import NoFooterPaths from "./NoFooterPaths";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  if (NoFooterPaths().includes(pathname)) {
    return null;
  }
  return (
    <>
      <Container fluid className="footer-container">
        {/* Navbar for Capabilities, Materials, Resources, Contact Us */}
        <Navbar expand="lg" className="footer-navbar">
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" className="brand-logo ml-3" />
          </Navbar.Brand>
          <Nav className="footer-links mx-auto">
            <Nav.Link
              className="footer-link"
              href="/blog/cnc-machining"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNC Machining
            </Nav.Link>
            <Nav.Link
              className="footer-link"
              href="/blog/3d-printing"
              target="_blank"
              rel="noopener noreferrer"
            >
              3D Printing
            </Nav.Link>
            <Nav.Link
              className="footer-link"
              href="/materials"
              target="_blank"
              rel="noopener noreferrer"
            >
              Materials
            </Nav.Link>
            <Nav.Link
              className="footer-link"
              href="/resources"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resources
            </Nav.Link>
            <Nav.Link
              className="footer-link"
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Social media icons with links */}
          <Nav>
            <ConditionalNavLink
              href="https://www.linkedin.com/company/makeinc/"
              icon={<FaLinkedin size={24} />}
            />
            <ConditionalNavLink icon={<FaFacebook />} />
            <ConditionalNavLink icon={<FaTwitter />} />
            <ConditionalNavLink icon={<FaYoutube />} />
            <ConditionalNavLink icon={<FaInstagram />} />
          </Nav>
        </Navbar>
        <hr className="navbar-divider" />
        <Container className="bottom-section">
          &copy; Make, Inc. 2024
          <a
            href="https://makerstage.notion.site/Privacy-Policy-49ead5a42d664ab48eea85b9a551e7ba?pvs=73"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="https://makerstage.notion.site/Terms-Conditions-3db279f60b8346698d5e674e9b03ceea?pvs=73"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions
          </a>
        </Container>
      </Container>
    </>
  );
};

const ConditionalNavLink = ({ href, icon }) => {
  return href ? (
    <Nav.Link href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </Nav.Link>
  ) : null;
};

export default Footer;
