import { useState } from "react";
import useInputFormStore from "../../stores/InputFormStore.store";
import checkmarkIcon from "../../assets/images/icon-checkmark.svg";
import "./AddOn.css";

interface AddOnProps {
  name: string;
  price: number;
  description: string;
  isSelected: boolean;
  handleClick: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}
export const AddOn = () => {
  const [selected, setSelected] = useState<boolean>(false);
  function handleClick(
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void {
    setSelected(event.currentTarget.checked);
  }

  return (
    <>
      <div className="plan-type-container">
        <label className={`${selected ? "selected" : ""}`}>
          <input
            type="checkbox"
            name={"plan-type"}
            onClick={handleClick}
          ></input>
          <div className={`custom-checkbox ${selected ? "checked" : ""}`}>
            {selected && (
              <img
                src={checkmarkIcon}
                alt="icon-checkmark"
                className="checkmark-icon"
              />
            )}
          </div>
          <div className="plan-information">
            <p
              style={{
                color: "hsl(213, 96%, 18%)",
                fontWeight: "700",
                padding: "0",
                margin: "0",
                paddingLeft: "10px",
              }}
            >
              Online service
            </p>
            <p
              style={{
                display: "flex",
                color: "hsl(231, 11%, 63%)",
                margin: "0",
                paddingLeft: "10px",
                fontSize: ".875rem",
              }}
            >
              Access to multiplayer games
            </p>
            <p
              style={{
                lineHeight: "1.25rem",
                color: "hsl(243, 100%, 62%)",
                margin: "0",
                paddingLeft: "10px",
                fontSize: ".875rem",
              }}
            >
              +$1/mo
            </p>
          </div>
        </label>
      </div>
    </>
  );
};
