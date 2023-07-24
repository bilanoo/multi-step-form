import checkmarkIcon from "../../assets/images/icon-checkmark.svg";
import "./AddOn.css";

interface AddOnProps {
  name: string;
  price: number;
  description: string;
  isSelected: boolean;
  id: string;
  handleClick: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}
export const AddOn = ({
  name,
  price,
  description,
  isSelected,
  id,
  handleClick,
}: AddOnProps) => {
  return (
    <>
      <div className="plan-type-container">
        <label
          className={`${isSelected ? "selected" : ""}`}
          htmlFor={id}
          id={id}
          onClick={handleClick}
        >
          <input type="checkbox" name={"plan-type"} value={id} id={id}></input>
          <div className={`custom-checkbox ${isSelected ? "checked" : ""}`}>
            {isSelected && (
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
              {name}
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
              {description}
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
              +${price}/mo
            </p>
          </div>
        </label>
      </div>
    </>
  );
};
