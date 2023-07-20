import "./StepSelection.css";
const StepSelection = () => {
  return (
    <div className="selection-container">
      <div className="steps">
        <div className="button-container">
          <button className="selection-button">1</button>
          <div className="steps-information">
            <p className="step">STEP 1</p>
            <p className="step-detail">YOUR INFO</p>
          </div>
        </div>
        <div className="button-container">
          <button className="selection-button">2</button>
          <div className="steps-information">
            <p className="step">STEP 2</p>
            <p className="step-detail">SELECT PLAN</p>
          </div>
        </div>
        <div className="button-container">
          <button className="selection-button">3</button>
          <div className="steps-information">
            <p className="step">STEP 3</p>
            <p className="step-detail">ADD-ONS</p>
          </div>
        </div>
        <div className="button-container">
          <button className="selection-button">4</button>
          <div className="steps-information">
            <p className="step">STEP 4</p>
            <p className="step-detail">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSelection;
