import React, { useState } from "react";
import { VerticalProgressBar } from "../elements/Elements";
import { Container } from "react-bootstrap";
import "./blocks.css";
/**
+ * Component for the first page of the multi-step form.
+ * Allows users to attach a file and select business type from a dropdown menu.
+ * @param {Object} props - The props object containing the onNext function.
+ * @param {Function} props.onNext - The function to be called when the user clicks the next button.
+ * @returns {JSX.Element} - The JSX element representing the first page of the form.
+ */
 const Page1Form = ({ onNext }) => {
  // State to store the attached file
   const [attachedFile, setAttachedFile] = useState(null);
 
  /**
+   * Handles the file selection event.
+   * @param {Object} event - The event object containing the selected file.
+   */
   const handleFileChange = (event) => {
     const file = event.target.files[0];
     setAttachedFile(file);
   };
 
  /**
+   * Handles the file drop event.
+   * @param {Object} event - The event object containing the dropped file.
+   */
   const handleDrop = (event) => {
     event.preventDefault();
     const file = event.dataTransfer.files[0];
     setAttachedFile(file);
   };
 
  /**
+   * Handles the drag over event to prevent default behavior.
+   * @param {Object} event - The event object.
+   */
   const handleDragOver = (event) => {
     event.preventDefault();
   };
 
  /**
+   * Handles the click event to trigger file browsing.
+   */
   const handleBrowseClick = () => {
     document.getElementById('fileInput').click();
   };
 
   return (
     <div className="w-100  position-relative m-auto rounded">
       <h3 className="font">BUSINESS INFORMATION</h3>
       <p className="font">Provide the necessary details to register your business with us</p>
       <hr style={{marginTop:"20px", marginBottom: "10px", borderWidth: "0.5px", color: "black" }} />
       <div className="row container ">
         <div className="col">
           <div
             className="bg-light"
             style={{
               border: "2px dashed #ccc",
               padding: "20px",
               textAlign: "center",
               borderRadius: "20px",
             }}
           >
             <h2 className="font">Attach File</h2>
            {/* Hidden file input field */}
             <input
               type="file"
               id="fileInput"
               style={{ display: "none" }}
               onChange={handleFileChange}
             />
            {/* Button to trigger file browsing */}
             <button
               className="mt-3 font"
               onClick={handleBrowseClick}
               style={{
                 padding: "10px 20px",
                 backgroundColor: "#007bff",
                 color: "#fff",
                 border: "none",
                 borderRadius: "5px",
                 cursor: "pointer",
               }}
             >
               Browse File
             </button>
             <p className="mt-3 font">or</p>
            {/* Drag and drop file area */}
             <div
               className="bg-white font"
               style={{
                 width: "100%",
                 height: "100px",
                 border: "2px dashed #ccc",
                 borderRadius: "5px",
                 paddingTop: "40px",
                fontWeight: "bold",
               }}
               onDrop={handleDrop}
               onDragOver={handleDragOver}
             >
               Drag & Drop File Here
             </div>
           </div>
          {/* Display attached file information */}
          <div className="text-center"> {attachedFile && (
               <div style={{ marginTop: "20px",
               width: "100%",
               border: "2px dashed #ccc",
               borderRadius: "5px",
               paddingTop: "20px",
               paddingBottom: "20px",
               fontWeight: "bold", }}>
                 <strong className="font">Attached File:</strong> {attachedFile.name}
               </div>
            )}
          </div>
         </div>
         <div className="col m-4">
          <div className="mb-4 mt-4 row">
             <label
               htmlFor="inputPage1-1"
               className="input-lable col-sm-4 col-form-label font"
             >
               Business Type
             </label>
             <div className="col-sm-6">
               <select
                 id="inputPage1-1"
                 className="form-select"
                 aria-label="Default select example"
               >
                 <option selected>Select from list</option>
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
               </select>
             </div>
           </div>
           <div className="mb-4 row">
             <label
               htmlFor="inputPage1-2"
               className="input-lable col-sm-4 col-form-label font"
             >
               Business Type
             </label>
             <div className="col-sm-6">
               <select
                 id="inputPage1-2"
                 className="form-select"
                 aria-label="Default select example"
               >
                 <option selected>Select from list</option>
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
               </select>
             </div>
           </div>
           <div className="mb-4 row">
             <label
               htmlFor="inputPage1-3"
               className="input-lable col-sm-4 col-form-label font"
             >
               Business Type
             </label>
             <div className="col-sm-6">
               <select
                 id="inputPage1-3"
                 className="form-select "
                 aria-label="Default select example"
               >
                 <option selected>Select from list</option>
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
               </select>
             </div>
           </div>
         </div>
      </div>
       <button
         className="next btn btn-primary position-absolute end-0 m-auto font"
         onClick={onNext}
       >
         Next{" "}
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width="16"
           height="16"
           fill="currentColor"
           className="bi bi-chevron-right"
           viewBox="0 0 16 16"
         >
           <path
             fill-rule="evenodd"
             d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
           />
         </svg>
       </button>
     </div>
   );
 };

const Page2Form = ({ onNext, onPrevious }) => {
  return (
    <div className="w-100 m-auto position-relative ">
      <h3 className="font">BUSINESS INFORMATION</h3>
      <p className="font">Provide the necessary details to register your business with us</p>
      <hr style={{marginTop:"20px", marginBottom: "10px", borderWidth: "0.5px", color: "black" }} />
      <Container>
        <div className=" m-3
      ">
          <div className="mb-3 row">
            <label
              htmlFor="inputBusinessName"
              className="input-lable col-sm-4 col-form-label font"
            >
              Buisness Name
            </label>
            <div className="col-sm-8 font">
              <input
                type="text"
                className="form-control"
                id="inputBusinessName"
                placeholder="Maker Stage"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputBusinessOwner"
              className="input-lable col-sm-4 col-form-label font"
            >
              Business Owner
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="inputBusinessOwner"
                placeholder="Input first and last name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputBusinessType"
              className="input-lable col-sm-4 col-form-label font"
            >
              Business Type
            </label>
            <div className="col-sm-4">
              <select
                id="inputBusinessType"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select from list</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputIdentificationNumber"
              className="input-lable  col-sm-4 col-form-label font"  
            >
              Identification Number
            </label>
            <div className=" col-sm-8">
              <input
                type="text"
                className="form-control"
                id="inputIdentificationNumber"
                placeholder="input business's identification number"
              />
            </div>
          </div>
          <div>
            <div className="mb-4 form-check">
              <label
                className="input-lable form-check-label font"
                htmlFor="flexRadioDefault1"
              >
                Default radio
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
            </div>
            <div className="  form-check">
              <label
                className="input-lable form-check-label font"
                htmlFor="flexRadioDefault2"
              >
                Default checked radio
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </Container>
      <button className="btn border-0 text-primary font" onClick={onPrevious}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>{" "}
        Previous
      </button>
      <button
        className="next btn btn-primary position-absolute end-0 m-auto font"
        onClick={onNext}
      >
        Next{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>
    </div>
  );
};

const Page3Form = ({ onPrevious }) => {
  return (
    <div className="w-100 m-auto position-relative">
      <h3 className="font">BUSINESS INFORMATION</h3>
      <p className="font">Provide the necessary details to register your business with us</p>
      <hr style={{marginTop:"20px", marginBottom: "10px", borderWidth: "0.5px", color: "black" }} />
      <Container>
        <div className=" m-3">
          <div className="mb-3 row">
            <label
              htmlFor="inputpage3-1"
              className="input-lable col-sm-4 col-form-label font"
            >
              Buisness Name
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="inputpage3-1"
                placeholder="Maker Stage"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputpage3-2"
              className="input-lable col-sm-4 col-form-label font"
            >
              Business Owner
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="inputpage3-2"
                placeholder="Input first and last name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputpage3-3"
              className="input-lable col-sm-4 col-form-label font"
            >
              Business Type
            </label>
            <div className="col-sm-4">
              <select
                id="inputpage3-3"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select from list</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputpage3-5"
              className="input-lable col-sm-4 col-form-label font"
            >
              Business Type
            </label>
            <div className="col-sm-4">
              <select
                id="inputpage3-5"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select from list</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputpage3-6"
              className="input-lable col-sm-4 col-form-label font font"
            >
              Business Type
            </label>
            <div className="col-sm-4">
              <select
                id="inputpage3-6"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select from list</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </Container>
      <button className="btn btn-outline-primaty border-0 text-primary font" onClick={onPrevious}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>{" "}
        Previous
      </button>
      <button
        className="next btn btn-primary font"
        type="submit"
      >
        submit
      </button>
    </div>
  );
};

const StepProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Page 1", "Page 2", "Page 3"];

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(currentStep + 1); // Move to Page 2
    } else if (currentStep === 2) {
      setCurrentStep(currentStep + 1); // Move to Page 3
    } else {
      setCurrentStep(currentStep); // No further steps
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  let formComponent;
  switch (currentStep) {
    case 1:
      formComponent = <Page1Form onNext={handleNext} />;
      break;
    case 2:
      formComponent = (
        <Page2Form onNext={handleNext} onPrevious={handlePrevious} />
      );
      break;
    case 3:
      formComponent = <Page3Form onPrevious={handlePrevious} />;
      break;
    default:
      formComponent = null;
  }

  const progress = (currentStep / steps.length) * 100;


  return (
    <div className="main-1">
    <div className="container main-2">
      <h2 className="font heading text-center m-4">Create your Profile</h2>
      <div className="bar container">
        <VerticalProgressBar  steps={steps} currentStep={currentStep} />
      </div>
      <div className="page m-3 font ">{formComponent}</div>
    </div>
    </div>
  );
};


export default StepProgressBar;