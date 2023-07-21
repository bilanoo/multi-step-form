import { ReactNode } from "react";
import "./FormContent.css";

interface FormContentProps {
  personalInfoText: string;
  description: string;
  elementToRender: ReactNode;
}

const FormContent = ({
  personalInfoText,
  description,
  elementToRender,
}: FormContentProps) => {
  return (
    <div className="form-container">
      <h2 className="personal-info-text">{personalInfoText}</h2>
      <p>{description}</p>
      <div className="form-values-container">{elementToRender}</div>
    </div>
  );
};

export default FormContent;
