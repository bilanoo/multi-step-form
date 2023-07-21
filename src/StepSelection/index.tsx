import { SelectionButton } from "./SelectionButton";
import "./StepSelection.css";
const StepSelection = () => {
  return (
    <div className="selection-container">
      <ul className="steps">
        <SelectionButton
          to="/"
          label="STEP 1"
          step="1"
          stepDetail="YOUR INFO"
        />
        <SelectionButton
          to="/step2"
          label="STEP 2"
          step="2"
          stepDetail="SELECT PLAN"
        />
        <SelectionButton
          to="/step3"
          label="STEP 3"
          step="3"
          stepDetail="ADD-ONS"
        />
        <SelectionButton
          to="/step4"
          label="STEP 4"
          step="4"
          stepDetail="SUMMARY"
        />
      </ul>
    </div>
  );
};

export default StepSelection;
