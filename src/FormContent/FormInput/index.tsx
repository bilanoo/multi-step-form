import "./FormInput.css";

interface FormInputProps {
  name: string;
  placeholder: string;
  handleChange: () => void;
  value?: string | number;
}
const FormInput = ({
  name,
  placeholder,
  value,
  handleChange,
}: FormInputProps) => {
  return (
    <div className="input-container">
      <p className="input-name">{name}</p>
      <input
        type="text"
        placeholder={placeholder}
        className="input-field"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
