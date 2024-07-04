import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";

import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="mb-xl-9 mb-4 mt-4">
      <Container>
        <Row>
          <Col lg={10} md={12} className="offset-lg-1 col-12">
            <div className="text-center mb-7">
              <h2>Frequently asked questions</h2>
              <p className="mb-0">
                Can’t find any answer for your question?
                <br />
                Ask our{" "}
                <a
                  href="/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-decoration-none"
                >
                  customer support
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="accordion-container">
          <Col lg={10} className="offset-lg-1 col-md-12 col-12">
            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What fees are involved?</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Can I choose the projects I work on?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely. You have full control over which projects you
                  accept, allowing you to manage your workload and grow at your
                  pace.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
