import { ProcessElement } from "../elements/Elements";
import { Container, Row, Col } from "react-bootstrap";
import "./blocks.css";
import {
  LiaLongArrowAltRightSolid,
  LiaLongArrowAltDownSolid,
} from "react-icons/lia";
import { IoCheckmarkCircle } from "react-icons/io5";

const Process = () => {
  return (
    <Container fluid className="process-card-container">
      <Container fluid className="process-text text-center">
        <h2 className="mb-3 mt-4">
          <strong>How it works?</strong>
        </h2>
        <p>
          From Prototype to Production: Streamline your Manufacturing with
          Precision, Speed, and Ease.
        </p>
      </Container>
      <Container fluid className="process-elements mt-5">
        <Row xs={1} xl={5} className="justify-content-center g-4 mb-4">
          <Col className="d-flex justify-content-center">
            <ProcessElement
              title="Submit Your Design"
              description="Upload CAD files and choose materials and manufacturing processes. Our quoting engine will analyze your design and provide tailored options instantly."
              number="1"
              arrow={<LiaLongArrowAltRightSolid color="grey" />}
              mobileArrow={<LiaLongArrowAltDownSolid color="grey" />}
              backgroundColor="#ffffff"
              fontColor="black"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <ProcessElement
              title="Fine-Tune Your Order"
              description="Customize your order with quantity, lead time, and additional requirements. Our platform optimizes for cost and efficiency to deliver the best value for your project."
              number="2"
              arrow={<LiaLongArrowAltRightSolid color="grey" />}
              mobileArrow={<LiaLongArrowAltDownSolid color="grey" />}
              backgroundColor="#ffffff"
              fontColor="black"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <ProcessElement
              title="Post-Processing"
              description="Select from various finishing options to enhance your parts' appearance and performance. We handle all post-processing needs, ensuring your part is ready for use."
              number="3"
              arrow={<LiaLongArrowAltRightSolid color="grey" />}
              mobileArrow={<LiaLongArrowAltDownSolid color="grey" />}
              backgroundColor="#ffffff"
              fontColor="black"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <ProcessElement
              title="Quality Assurance"
              description="Each part undergoes rigorous quality inspection to meet our high standards and yours. Our Quality Assurance process guarantees your parts match your specifications for form, fit, and function."
              number="4"
              arrow={<LiaLongArrowAltRightSolid color="grey" />}
              mobileArrow={<LiaLongArrowAltDownSolid color="grey" />}
              backgroundColor="#ffffff"
              fontColor="black"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <ProcessElement
              title="Receive Parts Fast"
              description="Place your order, and our network of vetted manufacturers begins production. Experience seamless production and receive quality parts swiftly, delivered directly to your door for seamless integration."
              number="5"
              arrow={<IoCheckmarkCircle color="#1c85e9" />}
              backgroundColor="#ffffff"
              fontColor="black"
            />
          </Col>
          
        </Row>
      </Container>
      {/* <div className="text-center"><GetAQuote /></div> */}
    </Container>
  );
};

export default Process;
