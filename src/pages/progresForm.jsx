import { React } from "react";
import StepProgressBar from "../components/blocks/progress";
import "./progresForm.css";
const ProgresForm = () => {
  return (
    <div className="progress-form-container">
        <div className="progress-form-wrapper">
      <StepProgressBar />
    </div>
    </div>
  );
};
export default ProgresForm;
