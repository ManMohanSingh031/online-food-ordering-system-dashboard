import React from "react";

const Origin = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-6 w-6 top-[-35px] left-20 rounded-full bg-green-600 float-left relative">
        <div className="h-3 w-3 rounded-full bg-white flex justify-center absolute">
          <div className="h-16 w-0.5 top-4 bg-green-600 absolute">
            <div className="h-2 w-2 rounded-full bg-green-600 absolute bottom-0 right-[-3px]"></div>
            <span className="absolute text-lg bottom-[-30px] left-[-20px]">
              Origin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Origin;
