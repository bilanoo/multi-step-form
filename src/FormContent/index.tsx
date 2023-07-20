import "./FormContent.css";
import FormInput from "./FormInput";

const FormContent = () => {
  return (
    <div className="form-container">
      <h2 className="personal-info-text">Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form-values-container">
        <FormInput
          name="Name"
          placeholder="e.g. Stephen King"
          handleChange={() => console.log("changed!")}
        />
        <FormInput
          name="Email Address"
          placeholder="e.g. stephenking@loren.com"
          handleChange={() => console.log("changed!")}
        />
        <FormInput
          name="Phone Number"
          placeholder="e.g. +1 234 567 890"
          handleChange={() => console.log("changed!")}
        />
      </div>
    </div>
  );
};

export default FormContent;
