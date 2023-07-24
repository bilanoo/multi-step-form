import "./PickAddOnsContent.css";

import { AddOn } from "./AddOn";
interface PickAddOnsContentProps {
  isSelected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export const PickAddOnsContent = ({
  isSelected,
  setSelected,
}: PickAddOnsContentProps) => {
  function handleAddOnClick(id: string): void {
    setSelected((prevState) =>
      prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id]
    );
  }

  return (
    <>
      <div className="all-add-ons-containers">
        <AddOn
          name="Online Service"
          description="Access to multiplayer games"
          price={1}
          id="onlineService"
          isSelected={isSelected.includes("onlineService")}
          handleClick={() => handleAddOnClick("onlineService")}
        />
        <AddOn
          name="Larger storage"
          description="Extra 1TB of cloud save"
          price={2}
          id="largerStorage"
          isSelected={isSelected.includes("largerStorage")}
          handleClick={() => handleAddOnClick("largerStorage")}
        />
        <AddOn
          name="Customizable profile"
          description="Custom theme on your profile"
          price={2}
          id="customizableProfile"
          isSelected={isSelected.includes("customizableProfile")}
          handleClick={() => handleAddOnClick("customizableProfile")}
        />
      </div>
    </>
  );
};
