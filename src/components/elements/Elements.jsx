import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { client } from "../../sanity";
import "./Elements.css";

export const CardElement = ({
  title,
  description,
  slug,
  image,
  linkText,
  backgroundColor,
  fontColor,
}) => {
  const handleClick = () => {
    window.open("/blog/" + slug, "_blank");
  };
  const [imageUrl, setImageUrl] = useState(image);
  useEffect(() => {
    if (!image) {
      // Fetch image slug from Sanity using Groq
      client
        .fetch(
          `*[slug.current == "${slug}"][0]{
            mainImage {
              asset -> {
                _id,
                url
              },
              alt,
            }
          }`
        )
        .then((data) => {
          // If Sanity has an image, use it
          if (data.mainImage) {
            setImageUrl(data.mainImage.asset.url);
          } else {
            setImageUrl(image);
          }
        })
        .catch((error) => {
          console.error("Error fetching image from Sanity:", error);
        });
    }
  }, [image, slug]);
  return (
    <Card
      style={{ backgroundColor: backgroundColor, color: fontColor }}
      className="basic-card"
      onClick={handleClick}
    >
      <Card.Img variant="top" src={imageUrl} className="card-image rounded" />
      <Card.Body className="card-body">
        <Card.Title className="card-title text-center">{title}</Card.Title>
        <Card.Text className="card-text text-justified">
          {description}
        </Card.Text>
        <div className="card-button-container text-center">
          <Button variant="link" className="card-button">
            {linkText} <FaArrowRightLong />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export const BlogElement = ({
  title,
  description,
  link,
  image,
  tagTitle,
  backgroundColor,
  tagColor,
  fontColor,
}) => {
  const [imageUrl, setImageUrl] = useState(image);
  const [blogTitle, setBlogTitle] = useState(title);

  useEffect(() => {
    if (!image || !title) {
      // Fetch image slug from Sanity using Groq
      client
        .fetch(
          `*[slug.current == "${link.split("/").pop()}"][0]{
            title,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt,
            }
          }`
        )
        .then((data) => {
          // If Sanity has an image, use it
          if (data.mainImage && !image) {
            setImageUrl(data.mainImage.asset.url);
          } else {
            setImageUrl(image);
          }
          if (data.title) {
            setBlogTitle(data.title);
          }
        })
        .catch((error) => {
          console.error("Error fetching image from Sanity:", error);
        });
    }
  }, [image, link, title]);

  const cardStyle = {
    backgroundColor: backgroundColor,
    color: fontColor,
    border: "none",
  };

  return (
    <Card style={cardStyle} className="blog-card">
      <a
        className="blog-image-container"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card.Img
          className="blog-image img-fluid rounded"
          variant="top"
          alt={blogTitle}
          src={imageUrl}
        />
      </a>
      {/* <TagButton className="tag" tagTitle={tagTitle} bgColor={tagColor} /> */}
      <Card.Body
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingBottom: "0px",
        }}
      >
        <a
          href={link}
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
          rel="noopener noreferrer"
        >
          <Card.Title className="blog-title">{blogTitle}</Card.Title>
        </a>
      </Card.Body>
    </Card>
  );
};

export const FeatureElement = ({
  title,
  description,
  icon,
  backgroundColor,
  fontColor,
}) => {
  return (
    <Card
      style={{ backgroundColor: backgroundColor, color: fontColor }}
      className="basic-feature text-md-start"
    >
      {icon ? (
        <Container className="feature-icon-container">
          <span className="feature-icon">{icon}</span>
        </Container>
      ) : null}
      <Card.Body className="feature-body">
        <Card.Title className="feature-title">{title}</Card.Title>
        <Card.Text className="feature-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const ProcessElement = ({
  title,
  description,
  number,
  arrow,
  mobileArrow,
  backgroundColor,
  fontColor,
}) => {
  return (
    <Card
      style={{ backgroundColor: backgroundColor, color: fontColor }}
      className="basic-process d-flex flex-column"
    >
      <Card.Header style={{ backgroundColor: backgroundColor, border: "none" }}>
        <Row className="icon-container mb-3" xs={1} lg={2}>
          <Col className="number-container">
            <h3 className="process-number">{number}</h3>
          </Col>
          <Col className="arrow-container">
            <h1>{arrow}</h1>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title className="process-title">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer
        className="mt-auto"
        style={{ backgroundColor: backgroundColor, border: "none" }}
      >
        <h1 className="mobile-arrow">{mobileArrow}</h1>
      </Card.Footer>
    </Card>
  );
};

export const VerticalProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="position">
      <div className="vertical-progress-bar-container">
        <div className="progress vertical">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ height: `${(currentStep / steps.length) * 100}%` }}
            aria-valuenow={currentStep}
            aria-valuemin="0"
            aria-valuemax={steps.length}
          ></div>
        </div>
        <div className="vertical-progress-bar-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`vertical-progress-bar-step ${
                index < currentStep - 1 ? "completed" : ""
              }`}
            >
              <div className="step-content">
                <div
                  className={`step-circle ${
                    index + 1 < currentStep ? "completed text-white" : ""
                  } ${index === currentStep - 1 ? "on-step" : ""} ${
                    index < currentStep ? "text-primary" : ""
                  }`}
                >
                  {index + 1 < currentStep ? <span>&#10003;</span> : index + 1}
                </div>
                <div className={`step-description ${index < currentStep ? "text-primary" : ""}`}>
                  {step}
                </div>
              </div>
            </div>
          ))}
          <div
            className="vertical-progress-bar-line d-none d-md-block"
            style={{ width: `${((currentStep - 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
