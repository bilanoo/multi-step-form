import { PlanType } from "./PlanType";
import "./PlanTypeContent.css";

import GameIcon from "../../src/assets/images/icon-arcade.svg";
import IconAdvanced from "../../src/assets/images/icon-advanced.svg";
import IconPro from "../../src/assets/images/icon-pro.svg";

import { IOSSwitch } from "./Switch";
import useInputFormStore from "../stores/InputFormStore.store";

export const PlanTypeContent = () => {
  const {
    planTypeSwitch,
    setPlanTypeSwitchFlag,
    setFormValues,
    formValues,
    planSelected,
    setPlanSelected,
  } = useInputFormStore((state) => state);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setPlanTypeSwitchFlag(event.target.checked);

    if (formValues.planSelected && event.target.checked) {
      setFormValues("planSelected", formValues.planSelected * 10);
    }

    if (formValues.planSelected && !event.target.checked) {
      setFormValues("planSelected", formValues.planSelected / 10);
    }
  }

  function handlePlanTypeClick(
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ): void {
    if (event.currentTarget.id === "arcade" && !planTypeSwitch) {
      setFormValues("planSelected", 9);
    } else if (event.currentTarget.id === "arcade" && planTypeSwitch) {
      setFormValues("planSelected", 90);
    }

    if (event.currentTarget.id === "advanced" && !planTypeSwitch) {
      setFormValues("planSelected", 12);
    } else if (event.currentTarget.id === "advanced" && planTypeSwitch) {
      setFormValues("planSelected", 120);
    }

    if (event.currentTarget.id === "pro" && !planTypeSwitch) {
      setFormValues("planSelected", 15);
    } else if (event.currentTarget.id === "pro" && planTypeSwitch) {
      setFormValues("planSelected", 150);
    }

    setPlanSelected(event.currentTarget.id);
  }

  return (
    <>
      <div className="all-plans-containers">
        <PlanType
          iconSource={GameIcon}
          planName="Arcade"
          planPrice={!planTypeSwitch ? "9" : "90"}
          handleClick={handlePlanTypeClick}
          isSelected={planSelected === "arcade"}
        />
        <PlanType
          iconSource={IconAdvanced}
          planName="Advanced"
          planPrice={!planTypeSwitch ? "12" : "120"}
          handleClick={handlePlanTypeClick}
          isSelected={planSelected === "advanced"}
        />
        <PlanType
          iconSource={IconPro}
          planName="Pro"
          planPrice={!planTypeSwitch ? "15" : "150"}
          handleClick={handlePlanTypeClick}
          isSelected={planSelected === "pro"}
        />
      </div>
      <div className="plan-switch">
        <p
          className={`plan-type-switch-text ${
            !planTypeSwitch ? "selected" : ""
          }`}
        >
          Monthly
        </p>
        <IOSSwitch
          sx={{ m: 1 }}
          onChange={handleChange}
          checked={planTypeSwitch}
        />
        <p
          className={`plan-type-switch-text ${
            planTypeSwitch ? "selected" : ""
          }`}
          style={{ marginLeft: "0" }}
        >
          Yearly
        </p>
      </div>
    </>
  );
};
