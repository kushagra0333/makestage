import React from "react";
import { Button } from "react-bootstrap";
import "./buttons.css";

const GetAQuote = () => {
  return (
    <a href="/get-a-quote" target="_blank" rel="noreferrer noopener">
      <Button className="quote-button">Get A Quote</Button>
    </a>
  );
};

export default GetAQuote;
