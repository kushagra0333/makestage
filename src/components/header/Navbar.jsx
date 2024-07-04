import React, { useState } from "react";
import "./Navbar.css"; // CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown ,Dropdown} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/maker.webp";
import GetAQuote from "../buttons/GetAQuote";
import { isMobile } from "react-device-detect";
import NoProfile from "../../assets/logos/no-profile.jpg"
// Sample list of items in the capabilities drop down menu

const Navigationbar = () => {
  // State for whether a dropdown menu is visible or not
  const [show, setShow] = useState(false);

  // Handle mouse enter and leave events for both header and menu divs
  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const handleDropdownClick = () => {
    setShow((prevShow) => !prevShow); // Toggle the show state
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Navbar collapseOnSelect className="bg-light" sticky="top" expand="md">
      <Container className="header-container">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Maker.in" className="logo fluid" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="header-toggle"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="main-menu me-auto">
            <NavDropdown
              title="Capabilities"
              show={show}
              onMouseOver={isMobile ? () => false : handleMouseOver}
              onMouseOut={handleMouseOut}
              className="capabilities-dropdown"
              onClick={handleDropdownClick}
            >
              <NavDropdown.Item
                href="/blog/cnc-machining"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNC Machining
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/blog/3d-printing"
                target="_blank"
                rel="noopener noreferrer"
              >
                3D Printing
              </NavDropdown.Item>
              <NavDropdown.Item
                href= "/blog/sheet-metal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sheet Metal
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/blog/urethane-casting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urethane Casting
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/blog/plastic-injection-molding"
                target="_blank"
                rel="noopener noreferrer"
              >
                Injection Molding
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                eventKey="5"
                as={Link}
                to="/capabilities"
                onClick={scrollToTop}
              >
                All Capabilities
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              eventKey="0"
              className="capabilities-link"
              as={Link}
              to="/capabilities"
              onClick={scrollToTop}
            >
              {" "}
              Capabilities{" "}
            </Nav.Link>
            <Nav.Link
              eventKey="1"
              as={Link}
              to="/materials"
              onClick={scrollToTop}
            >
              Materials
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              as={Link}
              to="/resources"
              onClick={scrollToTop}
            >
              Resources
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              as={Link}
              to="/become-a-partner"
              onClick={scrollToTop}
            >
              Become A Partner
            </Nav.Link>
            <Nav.Link
              eventKey="4"
              as={Link}
              to="/contact-us"
              onClick={scrollToTop}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center  px-2 py-2">
            <GetAQuote></GetAQuote>
          </Nav>
         <Nav>
         <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <img src={NoProfile} alt="No Profile" width={30} height={30} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/profile" className="profile-dropdown btn btn-lighht font-weight-bold">
           Profile page
          </Dropdown.Item>
          <Dropdown.Item  href="/progresForm" className="profile-dropdown btn btn-lighht font-weight-bold">
          Quotes
          </Dropdown.Item>
          <Dropdown.Item >
          <a href="#" className="profile-dropdown btn btn-lighht font-weight-bold">Setting</a>
          </Dropdown.Item>
          <NavDropdown.Divider />
          <Dropdown.Item>
          <a href="#" className="profile-dropdown btn btn-lighht font-weight-bold">Sign Out</a>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
