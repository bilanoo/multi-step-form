import useInputFormStore from "../../stores/InputFormStore.store";
import "./planType.css";

interface PlanTypeProps {
  iconSource: string;
  planName: string;
  planPrice: string;
  isSelected: boolean;
  handleClick: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}
export const PlanType = ({
  iconSource,
  planName,
  planPrice,
  isSelected,
  handleClick,
}: PlanTypeProps) => {
  const { planTypeSwitch } = useInputFormStore((state) => state);

  return (
    <>
      <div className="plan-type-container">
        <input
          type="radio"
          name={"plan-type"}
          id={planName}
          value={planName}
        ></input>

        <label
          className={`plan-type-container ${isSelected ? "selected" : ""}`}
          htmlFor={planName}
          onClick={handleClick}
          id={planName.toLowerCase()}
        >
          <img
            src={iconSource}
            alt="plan-type-icon"
            className="plan-type-icon"
          />
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
              {planName}
            </p>
            <p
              style={{
                color: "hsl(231, 11%, 63%)",
                margin: "0",
                paddingLeft: "10px",
                fontSize: ".875rem",
              }}
            >
              ${planPrice}/mo
            </p>
            {planTypeSwitch && (
              <p
                style={{
                  paddingTop: 0,
                  width: "fit-content",
                  height: "fit-content",
                  color: "hsl(213, 96%, 18%)",
                  fontWeight: "700",
                  margin: "0",
                  paddingLeft: "10px",
                  fontSize: ".77rem",
                }}
              >
                2 months free
              </p>
            )}
          </div>
        </label>
      </div>
    </>
  );
};
