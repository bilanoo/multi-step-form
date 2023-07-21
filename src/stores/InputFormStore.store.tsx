import { create } from "zustand";

interface FormValues {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  planSelected: string;
  addOns: string[];
}

interface InputFormStore {
  formValues: FormValues;
  setFormValues: (keyToChange: any, keyValue: any) => void;
}
const useInputFormStore = create<InputFormStore>((set) => ({
  formValues: {
    name: "",
    emailAddress: "",
    phoneNumber: "",
    planSelected: "",
    addOns: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  setFormValues: (keyToChange: any, keyValue: any) =>
    set((state) => ({
      formValues: {
        ...state.formValues,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        [keyToChange]: keyValue,
      },
    })),
}));

export default useInputFormStore;

export const useFormValues = () =>
  useInputFormStore((state) => state.formValues);
