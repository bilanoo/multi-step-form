import { useLocation } from "react-router-dom";
import "./SelectionButton.css";

interface SelectionButton {
  to: string;
  label: string;
  step: string;
  stepDetail: string;
}
export const SelectionButton = ({
  to,
  label,
  step,
  stepDetail,
}: SelectionButton) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className={"button-container"}>
      <li className={`selection-button ${isActive ? "active" : ""}`}>{step}</li>
      <div className="steps-information">
        <p className="step">{label}</p>
        <p className="step-detail">{stepDetail}</p>
      </div>
    </div>
  );
};
