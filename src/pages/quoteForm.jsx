import React, { useState } from "react";
import { IndeterminateProgress } from "../components/Utils";

const QuoteForm = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };
  return (
    <>
      {!iframeLoaded && <IndeterminateProgress />}
      <iframe
        src="https://airtable.com/embed/app54QhkanyW7WowM/shrhE7cS0G8XOASQD"
        frameborder="0"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        allowfullscreen
        sandbox="allow-scripts allow-same-origin"
        title="Airtable Form"
        loading="lazy"
        onLoad={handleIframeLoad}
      ></iframe>
    </>
  );
};

export default QuoteForm;
