import { isValueValid } from "../helpers";
import useInputFormStore from "../stores/InputFormStore.store";
import "./FormContent.css";
import FormInput from "./FormInput";

const FormContent = () => {
  const formValues = useInputFormStore((state) => state.formValues);

  const { setFormValues } = useInputFormStore((state) => state);

  const inputFieldName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const typedValue = event.currentTarget.value;
    const onlyAlphabeticalValues = /^[A-Za-z\s]*$/;

    if (
      typedValue.length <= 20 &&
      isValueValid(typedValue, onlyAlphabeticalValues)
    ) {
      setFormValues(event.currentTarget.name, typedValue);
    }
  };

  const inputEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const typedValue = event.currentTarget.value;
    const inputName = event.currentTarget.name;

    setFormValues(inputName, typedValue);
  };

  const inputPhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputName = event.currentTarget.name;
    const digitTyped = event.currentTarget.value;
    let inputNumbersOnly = digitTyped.replace(/\D/g, ""); // Get only digits

    if (inputNumbersOnly.length > 11) {
      //If entered value has a length greater than 16 then take only the first 16 digits
      inputNumbersOnly = inputNumbersOnly.substr(0, 11);
    }

    // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" "); // Join all the splits with an empty space
    }

    setFormValues(inputName, spacedNumber);
  };

  return (
    <div className="form-container">
      <h2 className="personal-info-text">Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form-values-container">
        <FormInput
          typeOfInput="text"
          namePropField="name"
          value={formValues.name}
          inputDescriptionText="Name"
          placeholder="e.g. Stephen King"
          handleChange={inputFieldName}
        />
        <FormInput
          typeOfInput="text"
          namePropField="emailAddress"
          value={formValues.emailAddress}
          inputDescriptionText="Email Address"
          placeholder="e.g. stephenking@loren.com"
          handleChange={inputEmailChange}
        />
        <FormInput
          typeOfInput="email"
          namePropField="phoneNumber"
          value={formValues.phoneNumber}
          inputDescriptionText="Phone Number"
          placeholder="e.g. 0767 9238 639"
          handleChange={inputPhoneNumber}
        />
      </div>
    </div>
  );
};

export default FormContent;
