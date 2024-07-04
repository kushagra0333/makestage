import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuoteCTA.css"; // Import the CSS file with gradient background
import GetAQuote from "./buttons/GetAQuote";
import { useLocation } from "react-router-dom";
import NoGetQuote from "./NoQuoteCTAPaths";

const QuoteCTA = () => {
  const { pathname } = useLocation();

  if (NoGetQuote().includes(pathname)) {
    return null;
  }
  return (
    <Container fluid className="cta-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h2>Ready to Manufacture?</h2>
          <p>Get Custom Manufactured Parts as Fast as Next Day.</p>
          <GetAQuote />
        </Col>
      </Row>
    </Container>
  );
};

export default QuoteCTA;
