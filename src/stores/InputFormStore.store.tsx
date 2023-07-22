import { create } from "zustand";

interface FormValues {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  planSelected: number;
  addOns: string[];
}

interface InputFormStore {
  formValues: FormValues;
  setFormValues: (keyToChange: any, keyValue: any) => void;
  planTypeSwitch: boolean;
  planSelected: string;
  setPlanSelected: (planName: string) => void;
  setPlanTypeSwitchFlag: (value: boolean) => void;
}
const useInputFormStore = create<InputFormStore>((set) => ({
  formValues: {
    name: "",
    emailAddress: "",
    phoneNumber: "",
    planSelected: 0,
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
  planTypeSwitch: false,
  planSelected: "",
  setPlanSelected: (planName: string) => set({ planSelected: planName }),
  setPlanTypeSwitchFlag: (value: boolean) => set({ planTypeSwitch: value }),
}));

export default useInputFormStore;

export const useFormValues = () =>
  useInputFormStore((state) => state.formValues);
