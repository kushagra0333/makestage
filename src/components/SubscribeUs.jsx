import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Spinner,
} from "react-bootstrap";
import { PiEnvelopeOpenFill } from "react-icons/pi";
import axios from "axios";
import "./SubscribeUs.css"; // Import the CSS for SubscribeUs
import CustomForm from "../components/forms";

const SubscribeUs = () => {

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
            "Email": data.email,
            "Company Name": data.company,
          },
        },
      ],
    };

    axios
      .post(
        "https://api.airtable.com/v0/appr4ZsQCjCl5smTd/tblx5awClkosV3C3S",
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
      <Container
        fluid
        className="subscribe-container"
        style={{
          backgroundColor: "#f0f0f0",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <PiEnvelopeOpenFill color="#1c85e9" size={48} />
        <Row className="justify-content-center">
          <Col xs={12} md={9} className="subscribe-content">
            <h2
              style={{
                marginBottom: "15px",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              Subscribe To Our Newsletter
            </h2>
            <p
              style={{
                marginBottom: "15px",
                fontSize: "14px",
                color: "#333333",
              }}
            >
              Stay updated with our latest news and offers by subscribing to our
              newsletter.
            </p>
          </Col>
        </Row>
        <Row xs="auto" md="auto" className="justify-content-center">
          <Col>
            <Button
              className="submit-button"
              variant="primary"
              type="submit"
              style={{ fontWeight: "bold" }}
              onClick={handleShowModal}
            >
              Subscribe
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal
        className="subscribe-modal"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>

           <div className={"submission-form"}>
          <CustomForm
            onSubmit={onSubmit}
            fields={fields}
            successComponent={SubscribeSuccess}
          />
        </div>
        </Modal.Body>

      </Modal>
    </>
  );
};

const SubscribeSuccess = () => {
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
          Thank you for the subscription. You'll receive an email
          confirming it soon.
        </h4>
      </div>
  );
};
export default SubscribeUs;
