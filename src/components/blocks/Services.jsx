import { Container, Row } from "react-bootstrap";
import "./blocks.css";
import { CardElement } from "../elements/Elements";
import Cnc from "../../assets/images/CNC-5.webp";
import Im from "../../assets/images/IM-1.webp";
import Sm from "../../assets/images/SM-1.webp";
import P3DP from "../../assets/images/3DP-1.webp";

const Services = () => {
  const printingCardDescription = (
    <ul className="list-unstyled">
      <li>
        <strong>Plastic:</strong> DLS, FDM, SLA, SLS, MJF, Polyjet.
      </li>
      <li>
        <strong>Composite:</strong> Onyx, Fiber Glass, Carbon Fiber, Kevlar.
      </li>
      <li>
        <strong>Metal:</strong> DMLS, DED, SLM, EBM.
      </li>
    </ul>
  );

  return (
    <Container fluid className="card-container">
      <Row xs={1} md={2} lg={3} className="card-row justify-content-center">
        <CardElement
          title="CNC Machining"
          description="Milling (3, 4, and 5 axis), turning and machining, with lead times as fast as 1 day."
          slug="cnc-machining"
          image={Cnc}
          linkText="CNC Machining Services"
          backgroundColor="#ffffff"
          fontColor="black"
        />
        <CardElement
          title="3D Printing"
          description={printingCardDescription}
          slug="3d-printing"
          image={P3DP}
          linkText="3D Printing Services"
          backgroundColor="#ffffff"
          fontColor="black"
        />
        <CardElement
          title="Sheet Metal"
          description="Optimized for complex geometries and stringent specifications. Quick-quote for precision bending, punching, laser cutting. ISO 9001:2015 Certified."
          slug="sheet-metal"
          image={Sm}
          linkText="Sheet Metal Services"
          backgroundColor="#ffffff"
          fontColor="black"
        />
      </Row>
      <Row xs={1} md={2} lg={3} className="card-row justify-content-center">
        <CardElement
          title="Urethane Casting"
          description="Elevate your project with our precision urethane casting services, ideal for small to medium runs, ensuring exceptional detail and durability for every part."
          slug="urethane-casting"
          linkText="Urethane Casting Services"
          backgroundColor="#ffffff"
          fontColor="black"
        />
        <CardElement
          title="Injection Molding"
          description="Need just one or scaling to 1 million? Our flexible injection molding solutions cater to all sizes, ensuring your plastic parts are perfectly produced."
          slug="plastic-injection-molding"
          image={Im}
          linkText="Injection Molding Services"
          backgroundColor="#ffffff"
          fontColor="black"
        />
      </Row>
    </Container>
  );
};

export default Services;
