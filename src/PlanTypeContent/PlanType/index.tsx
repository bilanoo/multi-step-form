import "./planType.css";

interface PlanTypeProps {
  iconSource: string;
  planName: string;
  planPrice: string;
}
export const PlanType = ({
  iconSource,
  planName,
  planPrice,
}: PlanTypeProps) => {
  return (
    <>
      <div className="plan-type-container">
        <input
          type="radio"
          name={"plan-type"}
          id={planName}
          value={planName}
        ></input>

        <label htmlFor={planName}>
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
          </div>
        </label>
      </div>
    </>
  );
};
