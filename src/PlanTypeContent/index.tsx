import { PlanType } from "./PlanType";
import "./PlanTypeContent.css";

import GameIcon from "../../src/assets/images/icon-arcade.svg";
import IconAdvanced from "../../src/assets/images/icon-advanced.svg";
import IconPro from "../../src/assets/images/icon-pro.svg";

export const PlanTypeContent = () => {
  return (
    <>
      <div className="all-plans-containers">
        <PlanType iconSource={GameIcon} planName="Arcade" planPrice="9" />
        <PlanType
          iconSource={IconAdvanced}
          planName="Advanced"
          planPrice="12"
        />
        <PlanType iconSource={IconPro} planName="Pro" planPrice="15" />
      </div>
    </>
  );
};
