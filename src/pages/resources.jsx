import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import surfaceImage from "../assets/images/CNC-3.webp";
import { BlogElement } from "../components/elements/Elements";
import "./pages.css";

const Resources = () => {
  return (
    <>
      <Container fluid className="resources-text-container">
        <Container>
          <h1 className=" resources-heading mb-3">
            <strong>Our Articles on Digital Manufacturing</strong>
          </h1>
          <h6 className="resources-description" style={{ color: "#eeeeee" }}>
            All you need to know about digital manufacturing.
          </h6>
        </Container>
      </Container>
      <Container className="resources-blogs my-6">
        <Row
          xs={1}
          md={3}
          lg={3}
          className="resources-blogs-row justify-content-center gx-5"
        >
          <Col className="justify-content-center">
            <BlogElement
              link="/blog/how-to-choose-between-cnc-machining-and-3d-printing-for-your-prototype"
              backgroundColor="white"
              fontColor="black"
              tagTitle="Tag #1"
              tagColor="red"
            />
          </Col>
          <Col className="justify-content-center">
            <BlogElement
              link="/blog/surface-finishes-in-cnc-machining-v-3d-printing"
              image={surfaceImage}
              backgroundColor="white"
              fontColor="black"
              tagTitle="Tag #1"
              tagColor="red"
            />
          </Col>
          <Col className="justify-content-center">
            <BlogElement
              link="/blog/acrylic-v-polycarbonate-in-cnc-machining"
              backgroundColor="white"
              fontColor="black"
              tagTitle="Tag #1"
              tagColor="red"
            />
          </Col>
        </Row>
      </Container>
      <Container className="resources-blogs my-6">
        <Row
          xs={1}
          md={3}
          lg={3}
          className="resources-blogs-row justify-content-center gx-5"
        >
          <Col className="justify-content-center">
            <BlogElement
              link="/blog/how-to-choose-between-cnc-machining-and-3d-printing-for-your-prototype"
              backgroundColor="white"
              fontColor="black"
              tagTitle="Tag #1"
              tagColor="red"
            />
          </Col>
          <Col className="justify-content-center">
            <BlogElement
              link="/blog/surface-finishes-in-cnc-machining-v-3d-printing"
              image={surfaceImage}
              backgroundColor="white"
              fontColor="black"
              tagTitle="Tag #1"
              tagColor="red"
            />
          </Col>
          <Col className="justify-content-center">
            <BlogElement
              link="/blog/acrylic-v-polycarbonate-in-cnc-machining"
              backgroundColor="white"
              fontColor="black"
              tagTitle="Tag #1"
              tagColor="red"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resources;
