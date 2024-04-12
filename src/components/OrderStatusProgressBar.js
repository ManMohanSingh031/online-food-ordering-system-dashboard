import React from "react";
import Origin from "./Origin";
import Distination from "./Distination";
import Stage from "./Stage";

const OrderStatusProgressBar = ({ stages }) => {
  return (
    <div className="w-full md:w-[95%] h-40 bg-white shadow-lg p-8 m-8">
      <Origin />
      <div className="bg-green-700 rounded-lg p-1 mx-4 md:mx-64 relative">
        {stages.map((stage, index) => (
          <Stage stage={stage} index={index} stagesLength={stages.length} />
        ))}
      </div>
     <Distination />
    </div>
  );
};

export default OrderStatusProgressBar;
