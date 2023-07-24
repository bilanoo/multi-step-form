import "./PickAddOnsPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepSelection from "../../StepSelection";
import FormContent from "../../FormContent";
import { PickAddOnsContent } from "../../PickAddOnsContent";

export const PickAddOnsPage = () => {
  const [isSelected, setSelected] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  function nextPage(): void {
    // Increment the current step number
    setCurrentStep((prevStep) => prevStep + 1);

    // Generate the next step's path dynamically based on the current step number
    const nextStepPath = `/step${currentStep + 1}`;

    // Navigate to the next step
    navigate(nextStepPath);
  }

  function previousPage(): void {
    // Generate the next step's path dynamically based on the current step number
    const previousStepPage = `/step2`;

    // Navigate to the next step
    navigate(previousStepPage);
  }
  return (
    <main>
      <StepSelection />
      <div
        style={{
          backgroundColor: "hsl(218, 100%, 97%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormContent
          personalInfoText="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
          elementToRender={
            <PickAddOnsContent
              isSelected={isSelected}
              setSelected={setSelected}
            />
          }
        />
      </div>
      <div className="submit-container">
        <button className="go-back-button" onClick={previousPage}>
          Go Back
        </button>
        <button className="next-step-button" onClick={nextPage}>
          Next Step
        </button>
      </div>
    </main>
  );
};
