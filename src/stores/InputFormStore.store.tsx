import { create } from "zustand";

interface FormValues {
  name: string;
  emailAddress: string;
  phoneNumber: string | number;
  planSelected: string;
  addOns: string[];
}

interface InputFormStore {
  formValues: FormValues;
  setFormValues: (arg: any) => void;
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
  setFormValues: (arg: any) => set({ formValues: arg }),
}));

export default useInputFormStore;
