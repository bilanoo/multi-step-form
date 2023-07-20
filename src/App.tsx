import "./App.css";
import FormContent from "./FormContent";
import StepSelection from "./StepSelection";

function App() {
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
      </main>
    </>
  );
}

export default App;
