import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './forms.css';

import { Form, Button, Spinner, Row, Col } from "react-bootstrap";

const CustomForm = ({ onSubmit, fields, successComponent: SuccessComponent }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  /**
   * Handler for form submission.
   * @param {Object} data The form data
   * 
   * This function is called when the user submits the form. It logs the form
   * data to the console for debugging purposes, then calls the `onSubmit`
   * function passed as a prop, which is expected to do something with the
   * form data (such as sending it to the server).
   * 
   * After the form submission is done, it sets a state variable to indicate
   * that the form has been submitted, and sets another state variable to
   * store the submitted data in. It also resets the form using the `reset`
   * function from `react-hook-form`.
   */
  const onSubmitHandler = async (data) => {
    console.groupCollapsed("Submitting form data");
    console.log("Form data:", data);
    console.groupEnd();
    await onSubmit(data);
    setIsSubmitted(true);
    setSubmittedData(data);
    reset();
  };

  const groupedFields = {};
  fields.forEach((field) => {
    const { rowIndex } = field;
    if (!groupedFields[rowIndex]) groupedFields[rowIndex] = [];
    groupedFields[rowIndex].push(field);
  });

  return (
    <div>
      {!isSubmitted ? (
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          {Object.values(groupedFields).map((rowFields, rowIndex) => (
            <Row key={rowIndex} className="mb-3">
              {rowFields.map((field, fieldIndex) => (
                <Col key={fieldIndex}>
            <Form.Group controlId={field.name}>
              <Form.Label>
                {field.label} {field.validation.required && <span className="required">*</span>}
              </Form.Label>
              <Form.Control
                as={field.type === 'textarea' ? 'textarea' : 'input'}
                rows={field.rows}
                type={field.type !== 'textarea' ? field.type : undefined}
                placeholder={field.placeholder}
                {...register(field.name, {
                  required: field.validation.required,
                  pattern: {
                    value: field.validation.pattern?.value || undefined,
                    message: field.validation.pattern
                      ? field.validation.pattern.message || "Invalid input"
                      : "Invalid input",
                  },
                })}
                aria-label={field.label}
              />
              {errors[field.name] && (
                <span className="error-message">{errors[field.name].message}</span>
              )}
            </Form.Group>
            </Col>
              ))}
            </Row>
          ))}
          <div className="d-flex justify-content-center">
          <Button className="contact-button" variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Send"
            )}
          </Button>
          </div>
        </Form>
      ) : (
        <SuccessComponent submittedData={submittedData} />
      )}
    </div>
  );
};

export default CustomForm;
