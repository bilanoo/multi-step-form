import "./UserinformationStep.css";
import { useEffect, useState } from "react";
import FormContent from "../../FormContent";
import StepSelection from "../../StepSelection";
import { UserInformationContent } from "../../UserInformationContent";
import { useFormValues } from "../../stores/InputFormStore.store";
import { useNavigate } from "react-router-dom";

export const UserinformationStep = () => {
  const { name, emailAddress, phoneNumber } = useFormValues();
  const [disabledFlag, setDisabledFlag] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name && emailRegex.test(emailAddress) && phoneNumber.length === 13) {
      setDisabledFlag(false);
    } else {
      setDisabledFlag(true);
    }
  }, [name, emailAddress, phoneNumber]);

  function nextPage(): void {
    // Increment the current step number
    setCurrentStep((prevStep) => prevStep + 1);

    // Generate the next step's path dynamically based on the current step number
    const nextStepPath = `/step${currentStep + 1}`;

    // Navigate to the next step
    navigate(nextStepPath);
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
          personalInfoText="Personal info"
          description="Please provide your name, email address, and phone number."
          elementToRender={<UserInformationContent />}
        />
      </div>
      <div className="submit-container">
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
