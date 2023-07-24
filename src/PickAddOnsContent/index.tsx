import "./PickAddOnsContent.css";

import { AddOn } from "./AddOn";

export const PickAddOnsContent = () => {
  return (
    <>
      <div className="all-add-ons-containers">
        <AddOn />
        <AddOn />
        <AddOn />
      </div>
    </>
  );
};
