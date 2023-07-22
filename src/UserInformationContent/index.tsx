import { isValueValid } from "../helpers";
import useInputFormStore from "../stores/InputFormStore.store";
import FormInput from "./FormInput";

export const UserInformationContent = () => {
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

  const formValues = useInputFormStore((state) => state.formValues);
  return (
    <>
      <FormInput
        typeOfInput="text"
        namePropField="name"
        value={formValues.name}
        inputDescriptionText="Name"
        placeholder="e.g. Stephen King"
        handleChange={inputFieldName}
      />
      <FormInput
        typeOfInput="email"
        namePropField="emailAddress"
        value={formValues.emailAddress}
        inputDescriptionText="Email Address"
        placeholder="e.g. stephenking@loren.com"
        handleChange={inputEmailChange}
      />
      <div style={{ marginBottom: "20px" }}>
        <FormInput
          typeOfInput="text"
          namePropField="phoneNumber"
          value={formValues.phoneNumber}
          inputDescriptionText="Phone Number"
          placeholder="e.g. 0767 9238 639"
          handleChange={inputPhoneNumber}
        />
      </div>
    </>
  );
};
