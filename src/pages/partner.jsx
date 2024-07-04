import {
  Container,
  Button,
  Row,
  Col,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import "./pages.css";
import {
  FeatureElement,
  ProcessElement,
} from "../components/elements/Elements";
import axios from "axios";
import React, { useState } from "react";
import {
  LiaLongArrowAltRightSolid,
  LiaLongArrowAltDownSolid,
} from "react-icons/lia";
import { IoCheckmarkCircle } from "react-icons/io5";
import CustomForm from "../components/forms";

const BecomePartner = () => {

  const fields = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      validation: {
        required: "First name is required",
        pattern: "Invalid input",
      },
      regex: /^[A-Za-z]+$/,
      rowIndex: 1,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      validation: {
        required: "Last name is required",
        pattern: "Invalid input",
      },
      regex: /^[A-Za-z]+$/,
      rowIndex: 1,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      validation: {
        required: "Email is required",
        pattern: "Invalid email format",
      },
      regex: /^\S+@\S+\.\S+$/,
      rowIndex: 2,
    },
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      validation: {
        required: "Company name is required",
        pattern: "Invalid input",
      },
      regex: /^[A-Za-z]+$/,
      rowIndex: 3,
    },
    {
      name: "companyWebsite",
      label: "Company Website",
      type: "text",
      validation: {
        required: "Website is required",
        pattern: "Invalid input"
      },
      regex: /^[A-Za-z]+$/,
      rowIndex: 4
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      validation: {
        required: "Phone is required",
        pattern: "Invalid input",
      },
      regex: /^[0-9]+$/,
      rowIndex: 5,
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form fields
  };

  const onSubmit = (data) => {
    const postData = {
      records: [
        {
          fields: {
            "First Name": data.firstName,
            "Last Name": data.lastName,
            Email: data.email,
            "Company Name": data.company,
            "Company Website": data.website,
            Phone: data.phone,
          },
        },
      ],
    };

    axios
      .post(
        "https://api.airtable.com/v0/appr4ZsQCjCl5smTd/tblIQeCDiwph6AAL3",
        postData,
        {
          headers: {
            Authorization:
              "Bearer patnYJHrQeB6LAslp.15a82559c005bc1e7b854092d5e2f2ad3fc94866cc30e9fd182c667dac5b16a6",
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        console.log("Form data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was a problem with your Axios request:", error);
      });
  };

  return (
    <>
      <Container fluid className="partner-header">
        <Container>
          <h1 style={{ marginBottom: "1.5rem" }}>
            <strong>Become A Manufacturing Partner with Makerstage.com</strong>
          </h1>
          <p style={{ marginBottom: "1.5rem" }}>
            At Makerstage.com, we’re revolutionizing how manufacturing gets
            done. By connecting innovative companies with highly skilled
            manufacturing partners, we’re creating a network that’s designed for
            the future. We believe in building relationships that drive mutual
            success, and we’re always on the lookout for partners who share our
            vision for quality, efficiency, and innovation.
          </p>
          <Button className="partner-button" onClick={handleShowModal}>
            Apply Now
          </Button>
        </Container>
      </Container>
      <Container className="partner-content mt-4"></Container>
      <h2 className="text-center">Why Partner with Us?</h2>

      <style>
        {`
          /* Override height of FeatureElement for BecomePartner */
  
            @media(min-width: 768px) {
              
            .feature-card-col .basic-feature {
               height: 8rem; 
            }
        `}
      </style>
      <Container className="feature-card-container">
        <Row className="justify-content-center align-items-center mt-4">
          <Col className="my-3 d-flex feature-card-col">
            <FeatureElement
              title="Access to Diverse Projects"
              description="Work on a variety of projects from innovative startups to established enterprises across industries."
              backgroundColor="#f6f6f6"
              fontColor="black"
            />
          </Col>
          <Col className="my-3 d-flex feature-card-col">
            <FeatureElement
              title="Visibility"
              description="Increase your shop’s visibility to a wider audience without the extra marketing expense."
              backgroundColor="#f6f6f6"
              fontColor="black"
            />
          </Col>
          <Col className="my-3 d-flex feature-card-col">
            <FeatureElement
              title="Growth Opportunities"
              description="Expand your business and scale your operations through consistent project flow."
              backgroundColor="#f6f6f6"
              fontColor="black"
            />
          </Col>
          <Col className="my-3 d-flex feature-card-col">
            <FeatureElement
              title="Supportive Community"
              description="Join a community of makers and innovators passionate about manufacturing and technology."
              backgroundColor="#f6f6f6"
              fontColor="black"
            />
          </Col>
          <Col className="my-3 d-flex feature-card-col">
            <FeatureElement
              title="Seamless Collaboration"
              description="With our streamlined communication and project management tools, collaborating on projects has never been easier."
              backgroundColor="#f6f6f6"
              fontColor="black"
            />
          </Col>

          <Col className="my-3 d-flex feature-card-col">
            <FeatureElement
              title="Utilize Ideal Capacity"
              description="By matching you with a steady stream of tailored projects, we help minimize downtime and boost your shop's productivity and profitability."
              backgroundColor="#f6f6f6"
              fontColor="black"
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <h2 className="text-center">Who We're Looking For</h2>
        <p className="text-center">
          We’re seeking manufacturing partners who are as passionate about
          building the future as we are. Ideal partners should have:
        </p>

        <Row className="partner-card-row justify-content-center mt-4">
          <Col xs={4} lg={2} className="my-3 mx-3 partner-card">
            Expertise in CNC machining, 3D printing, or other manufacturing
            processes.
          </Col>
          <Col xs={4} lg={2} className="my-3 mx-3 partner-card">
            A commitment to quality and timely delivery.
          </Col>
          <Col xs={4} lg={2} className="my-3 mx-3 partner-card">
            A collaborative spirit and open communication.
          </Col>
          <Col xs={4} lg={2} className="my-3 mx-3 partner-card">
            Capacity to take on projects of various sizes and complexities.
          </Col>
        </Row>
      </Container>

      <Container className="process-card-container mb-4">
        <Container className="process-text text-center">
          <hr style={{ borderColor: "#666666" }} />
          <h2 className="mt-4">
            <strong>How to Become a Partner?</strong>
          </h2>
        </Container>
        <Container className="process-elements mt-5">
          <Row xs={1} xl={4} className="justify-content-center mt-4 mb-4">
            <Col className="d-flex justify-content-center">
              <ProcessElement
                title="Fill Out the Application"
                description="Start by filling out our online application form. Provide details about your manufacturing capabilities, experience, and why you want to join our network. Attach your company deck with examples of your manufactured parts."
                number="1"
                arrow={<LiaLongArrowAltRightSolid color="grey" />}
                mobileArrow={<LiaLongArrowAltDownSolid color="grey" />}
                backgroundColor="#ffffff"
                fontColor="black"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <ProcessElement
                title="Initial Review"
                description="Our team will review your application to ensure a good fit with our platform’s needs and values."
                number="2"
                arrow={<LiaLongArrowAltRightSolid color="grey" />}
                mobileArrow={<LiaLongArrowAltDownSolid color="grey" />}
                backgroundColor="#ffffff"
                fontColor="black"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <ProcessElement
                title="Onboarding Session"
                description="You will be required to submit  manufacturing, business and other compliance documents. Approved partners will be invited to an onboarding session where we’ll cover how to use our platform, our expectations, and how we can support you."
                number="3"
                arrow={<LiaLongArrowAltRightSolid color="grey" />}
                mobileArrow={<LiaLongArrowAltDownSolid color="grey" />}
                backgroundColor="#ffffff"
                fontColor="black"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <ProcessElement
                title="Project Matching"
                description="Once onboarded, you’ll start receiving project requests that match your capabilities and preferences."
                number="4"
                arrow={<IoCheckmarkCircle color="#1c85e9" />}
                backgroundColor="#ffffff"
                fontColor="black"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="partner-cta-container">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2>Ready to Join?</h2>
            <p>
              If you’re ready to take your manufacturing business to the next
              level and be part of a growing community of makers and innovators,
              we’d love to hear from you.
            </p>
            <Button className="partner-button" onClick={handleShowModal}>
              Apply Now
            </Button>
            <p className="mt-3">
              For any questions, please contact our Partner Relations team at{" "}
              <a
                className="text-decoration-none"
                href={`mailto:hello@makerstage.com}`}
              >
                hello@makerstage.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <Modal
        className="partner-modal"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>

        <div className={"partner-form"}>
          <CustomForm
            onSubmit={onSubmit}
            fields={fields}
            successComponent={PartnerSuccess}
          />
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const PartnerSuccess = () => {
  return (
    <div className="success-message">
    <svg
      class="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        class="checkmark__circle"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        class="checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
    <h4 className="text-center">
      Thank you for the application. We will get in touch with you
      soon.
    </h4>
  </div>
        );
};  

export default BecomePartner;
