import { useEffect, useState } from "react";
import "./App.css";
import StepSelection from "./StepSelection";
import { useFormValues } from "./stores/InputFormStore.store";
import { useNavigate } from "react-router-dom";
import { UserinformationStep } from "./pages/UserInformationStep";

function App() {
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
    <>
      <main>
        <StepSelection />
        <div
          style={{
            backgroundColor: "hsl(218, 100%, 97%)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UserinformationStep />
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
    </>
  );
}

export default App;
