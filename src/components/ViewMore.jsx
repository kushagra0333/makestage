import React from "react";
import { Button } from "react-bootstrap";
import "./ViewMore.css";

const ViewMore = ({ isExpanded, toggleViewMore }) => {
  return (
    <Button variant="link" className="view-button" onClick={toggleViewMore}>
      {isExpanded ? "Read Less" : "Read More"}
    </Button>
  );
};

export default ViewMore;
