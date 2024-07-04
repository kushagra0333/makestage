import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactUs.css";
import SubscribeUs from "../components/SubscribeUs";
import Logos from "../assets/logos/logos";
import axios from "axios";
import CustomForm from "../components/forms";
import useResizeListener from "../components/SeeMoreListener";
import ViewMore from "../components/ViewMore";

const ContactUs = () => {
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
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      rows: 3,
      placeholder: "Write to us",
      validation: {
        required: "Message is required",
        pattern: "Invalid input",
      },
      regex: /^[A-Za-z]+$/,
      rowIndex: 6,
    },
  ];

  const onSubmit = (data) => {
    const postData = {
      records: [
        {
          fields: {
            "First Name": data.firstName,
            "Last Name": data.lastName,
            "Email": data.email,
            "Company Name": data.companyName,
            "Phone": data.phone,
            "Message": data.message,
            "Website": data.companyWebsite
          },
        },
      ],
    };
    axios
      .post(
        "https://api.airtable.com/v0/appr4ZsQCjCl5smTd/tblF0NSoG64ABFEpK",
        postData,
        {
          headers: {
            Authorization:
              "Bearer patnYJHrQeB6LAslp.15a82559c005bc1e7b854092d5e2f2ad3fc94866cc30e9fd182c667dac5b16a6",
            "Content-Type": "application/json",
          },
        }
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
      <Container fluid className="contact-us-section">
        <Container fluid className="contact-us-container">
          <Row>
            <Col md={6} className="contact-text-column">
                <ContactText />
            </Col>
            <Col md={6}>
              <Container>
                <div className={"contact-form"}>
                  <CustomForm
                    onSubmit={onSubmit}
                    fields={fields}
                    successComponent={ContactSuccess}
                  />
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <SubscribeUs />
    </>
  );
};

const ContactSuccess = ({ submittedData }) => (
  <div className="success-message">
    <svg
      className="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        className="checkmark__circle"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className="checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
    <h3>
      Thank you for contacting us! We will get back to you as soon as possible.
    </h3>
    <p>Here are the details you submitted:</p>
    <ul>
      <li>
        <strong>First Name:</strong> {submittedData.firstName}
      </li>
      <li>
        <strong>Last Name:</strong> {submittedData.lastName}
      </li>
      <li>
        <strong>Email:</strong> {submittedData.email}
      </li>
      <li>
        <strong>Company Name:</strong> {submittedData.companyName}
      </li>
      <li>
        <strong>Phone:</strong> {submittedData.phone}
      </li>
      <li>
        <strong>Message:</strong> {submittedData.message}
      </li>
    </ul>
  </div>
);

const ContactText = () => {

  // const {
  //   showButton,
  //   isExpanded,
  //   textRef,
  //   lineHeight,
  //   toggleViewMore,
  // } = useResizeListener(10);
  return (
    <>
    <Container

      className = "contact-text"
      // className={ isExpanded ? "contact-text" : "contact-text-mobile"}
      // style={{
      //     '--line-height': `${lineHeight}px`,
      // }}
      // ref={textRef}
    >
      <h2 className="contact-text-heading"
      >Contact Us:</h2>
      <p>

        At <a href="https://makerstage.com/">Makerstage.com</a>, we’re at the
        forefront of connecting visionary mechanical engineers and meticulous
        supply chain managers with top-tier CNC machining and 3D printing
        services. Our mission is to streamline your project’s journey from
        concept to completion, ensuring precision, efficiency, and satisfaction
        at every step.
      </p>
      <h3 className="contact-text-heading">For Project Inquiries:</h3>
      <p>
        Transforming your innovative designs into tangible products has never
        been easier. Our team of seasoned engineers and project managers are
        dedicated to guiding you through our comprehensive process.{" "}
      </p>
      <p>
        Submit your RFQ here using{" "}
        <a
          href="/get-a-quote"
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          Get A Quote
        </a>{" "}
        for a seamless project initiation. For personalized assistance or to
        discuss your project’s specific needs, email us directly at{" "}
        <a href={`mailto:hello@makerstage.com}`}>hello@makerstage.com</a>.
      </p>
      <h3 className="contact-text-heading">Expedite Your Supply Chain:</h3>
      <p>
        We understand the intricacies of supply chain management in the
        engineering domain. Whether you’re facing tight deadlines, looking for
        specialized manufacturing capabilities, or striving for cost efficiency,
        Makerstage.com is your partner in optimizing your supply chain strategy.
        Reach out to us at{" "}
        <a href={`mailto:hello@makerstage.com}`}>hello@makerstage.com</a> for
        expert advice and tailored solutions.
      </p>
      <h3 className="contact-text-heading">General Inquiries:</h3>
      <p>
        If you have any other questions or would like more information about how
        we can serve your engineering and supply chain needs, don’t hesitate to
        contact us at{" "}
        <a href={`mailto:hello@makerstage.com}`}>hello@makerstage.com</a>. We’re
        dedicated to providing swift and comprehensive responses to support your
        endeavors.
      </p>
      <h3 className="contact-text-heading">Stay Updated:</h3>
      <p>
        Follow us on LinkedIn and Instagram for the latest updates, insights,
        and breakthroughs from{" "}
        <a href="http://makerstage.com/">makerstage.com</a>. Join our mission to
        redefine manufacturing excellence. Your projects are our passion—let’s
        achieve the extraordinary together.
      </p>

      <Row className="company-logos-contact">
        <img src={Logos.Microsoft} alt="Logo" />
        <img src={Logos.Stanford} alt="Logo" />
        <img src={Logos.StanleyBlack} alt="Logo" />
      </Row>
    </Container>
    {/* <Container className="d-md-none">
    {showButton && (
            <ViewMore isExpanded={isExpanded} toggleViewMore={toggleViewMore} />
          )}
                    </Container> */}
          </>

  );
};

export default ContactUs;
