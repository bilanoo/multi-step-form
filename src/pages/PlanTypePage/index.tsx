import "./PlanTypePage.css";
import { useEffect, useState } from "react";
import { useFormValues } from "../../stores/InputFormStore.store";
import { useNavigate } from "react-router-dom";
import StepSelection from "../../StepSelection";
import FormContent from "../../FormContent";
import { PlanTypeContent } from "../../PlanTypeContent";

export const PlanTypePage = () => {
  const { name, emailAddress, phoneNumber, planSelected } = useFormValues();
  const [disabledFlag, setDisabledFlag] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    if (planSelected) {
      setDisabledFlag(false);
    } else {
      setDisabledFlag(true);
    }
  }, [planSelected]);

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
    const previousStepPage = `/step${currentStep}`;

    console.log(currentStep);
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
          personalInfoText="Select your plan"
          description="You have the option of monthly or yearly billing."
          elementToRender={<PlanTypeContent />}
        />
      </div>
      <div className="submit-container">
        <button
          className="go-back-button"
          disabled={disabledFlag}
          onClick={previousPage}
        >
          Go Back
        </button>
        <button
          className="next-step-button"
          disabled={disabledFlag}
          onClick={nextPage}
        >
          Next Step
        </button>
      </div>
    </main>
  );
};
