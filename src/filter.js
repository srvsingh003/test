import React from "react";
import arrow from "./arrow-up.png";
import { useState } from "react";
function Filter() {
  const [Open, setOpen] = useState(false);
  return (
    <div className={`p-4 ${Open ? " border-b " : ""}`}>
      <div className=" flex  justify-between  items-center">
        <span>Access</span>
        <span className="" onClick={() => setOpen(!Open)}>
          {" "}
          <img src={arrow} />
        </span>
      </div>
      {Open && (
        <div className={`mt-4 flex  items-center  `}>
          <span className=" mr-4 flex items-center">
            <input
              type="checkbox"
              checked
              className=" mr-2 w-[18px] h-[18px]"
            />
            Show All
          </span>
          <span className=" flex items-center">
            <input type="checkbox" className=" mr-2  w-[18px] h-[18px]" />
            Open Acces Only
          </span>
        </div>
      )}
    </div>
  );
}

export default Filter;
