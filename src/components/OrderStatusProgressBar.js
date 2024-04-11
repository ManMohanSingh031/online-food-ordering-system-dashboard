import React from "react";
import Origin from "./Origin";
import Distination from "./Distination";

const Stage = ({ stage, index, stagesLength }) => (
  <div
    key={index}
    className="stage text-black rounded-full p-0 absolute"
    style={{ left: `${(index / (stagesLength - 1)) * 100}%` }}
  >
    <div className="relative">
      <div
        className={`w-10 h-10 ${
          stage.completed ? "bg-green-700" : "bg-zinc-200"
        } rounded-full absolute transform -translate-x-1/2 -translate-y-1/2`}
      />
      <div
        className={`w-5 h-5 ${
          stage.completed ? "bg-white" : "bg-green-700"
        } rounded-full absolute transform -translate-x-1/2 -translate-y-1/2`}
      />
    </div>
    <div className="text-lg text-center mt-10">
      {stage.name}<br/> <span className="text-zinc-600 "> {stage.time} </span>
    </div>
  </div>
);

const OrderStatusProgressBar = ({ stages }) => {
  return (
    <div className="w-[95%] h-40 bg-white shadow-lg p-8 m-8">
      <Origin />
      <div className="bg-green-700 rounded-lg p-1 mx-64 relative">
        {stages.map((stage, index) => (
          <Stage stage={stage} index={index} stagesLength={stages.length} />
        ))}
      </div>
     <Distination />
    </div>
  );
};

export default OrderStatusProgressBar;
