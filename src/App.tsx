import { useEffect, useState } from "react";
import "./App.css";
import FormContent from "./FormContent";
import StepSelection from "./StepSelection";
import { useFormValues } from "./stores/InputFormStore.store";

function App() {
  const { name, emailAddress, phoneNumber } = useFormValues();
  const [disabledFlag, setDisabledFlag] = useState<boolean>(true);

  useEffect(() => {
    if (name && emailAddress && phoneNumber) {
      setDisabledFlag(false);
    } else {
      setDisabledFlag(true);
    }
  }, [name, emailAddress, phoneNumber]);
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
          <FormContent />
        </div>
        <div className="submit-container">
          <button className="next-step-button" disabled={disabledFlag}>
            Next Step
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
