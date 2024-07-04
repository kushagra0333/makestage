import { Container, Row, Col } from "react-bootstrap";
import "./blocks.css";
import { FeatureElement } from "../elements/Elements";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { LuMicroscope } from "react-icons/lu";
import { TbCertificate } from "react-icons/tb";

const Features = () => {
  return (
    <Container className="feature-card-container">
      <Row className="justify-content-center align-items-center mt-4">
        <Col className="my-3 d-flex feature-card-col">
          <FeatureElement
            title="One-Stop Shop for Manufacturing"
            description="Streamline all your manufacturing needs with our comprehensive, technology-driven digital manufacturing platform."
            link="Link"
            icon={<FaTools size="22px" color="#1c85e9" />}
            linkText="Link Text"
            backgroundColor="#ffffff"
            fontColor="black"
          />
        </Col>
        <Col className="my-3 d-flex feature-card-col">
          <FeatureElement
            title="Global Network, Local Manufacturing Power"
            description="Leveraging a digital global network of machines to bring forth a seamless local manufacturing experience."
            link="Link"
            icon={<BsGlobe size="22px" color="#1c85e9" />}
            linkText="Link Text"
            backgroundColor="#ffffff"
            fontColor="black"
          />
        </Col>
        <Col className="my-3 d-flex feature-card-col">
          <FeatureElement
            title="Fast Lead Times"
            description="Get parts delivered in as fast as next day."
            link="Link"
            icon={<FaTruckFast size="22px" color="#1c85e9" />}
            linkText="Link Text"
            backgroundColor="#ffffff"
            fontColor="black"
          />
        </Col>
        <Col className="my-3 d-flex feature-card-col">
          <FeatureElement
            title="Every Detail Inspected"
            description="Where meticulous attention ensures unparalleled precision in every product."
            link="Link"
            icon={<LuMicroscope size="22px" color="#1c85e9" />}
            linkText="Link Text "
            backgroundColor="#ffffff"
            fontColor="black"
          />
        </Col>
        <Col className="my-3 d-flex feature-card-col">
          <FeatureElement
            title="Certified Materials"
            description="Request for Material Certs after placing an order."
            link="Link"
            icon={<TbCertificate size="22px" color="#1c85e9" />}
            linkText="Link Text "
            backgroundColor="#ffffff"
            fontColor="black"
          />
        </Col>
        <Col className="my-3 d-flex feature-card-col">
          <FeatureElement
            title="ISO 9001:2015"
            description="Our manufacturing partners are ISO 9001:2015 certified."
            link="Link"
            icon={<BsCheckCircleFill size="22px" color="#1c85e9" />}
            linkText="Link Text "
            backgroundColor="#ffffff"
            fontColor="black"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
