import "./FormInput.css";

interface FormInputProps {
  typeOfInput: string;
  namePropField: string;
  inputDescriptionText: string;
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}
const FormInput = ({
  typeOfInput,
  namePropField,
  inputDescriptionText: inputName,
  placeholder,
  value,
  handleChange,
}: FormInputProps) => {
  return (
    <div className="input-container">
      <p className="input-name">{inputName}</p>
      <input
        required
        type={typeOfInput}
        name={namePropField}
        placeholder={placeholder}
        className="input-field"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
