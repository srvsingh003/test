import React from "react";
import bin from "./trash.png";

function Content() {
  const btn = [1, 2, 3];
  const count = [
    {
      heading: "EJournals",

      count: "100",
      btn: "EJournals",
    },
    {
      heading: "Ebooks",

      count: "400",
      btn: "Ebooks",
    },
    {
      heading: "EVideos",

      count: "200",
      btn: "EVideos",
    },
    {
      heading: "Other EResources",

      count: "100",
      btn: "English",
    },
  ];
  return (
    <div className=" p-10 " id="back">
      <h1 className=" text-[#1F5095] text-[23px]  font-semibold">
        Find articles,ejournals,ebooks that are in need of from our E-Resources
      </h1>
      <p className=" text-[#A3AED0] mt-2">
        Find articles,ejournals, ebooks that you are in need of from our 10000+
        repo
      </p>
      <div className=" mt-2">
        <input
          type=" text"
          style={{ border: "1px solid lightgray" }}
          className=" w-[400px] p-[10px] mr-4 rounded-lg"
          placeholder="Search anything"
        />
        {btn.map((e) => (
          <button
            className="p-[10px] rounded-lg mr-2  "
            style={{ border: "1px solid lightgray" }}
          >
            Search Type
          </button>
        ))}
      </div>
      <div className=" flex">
        <div
          className=" flex flex-col p-4 mt-4 "
          style={{ borderRight: "1px solid  lightgray", width: "fit-content" }}
        >
          <span className=" text-[#033086] font-normal">Total Result</span>
          <span className=" font-semibold">100</span>
        </div>
        {count.map((e) => (
          <div
            className=" flex flex-col p-4 mt-4 "
            style={{ width: "fit-content" }}
          >
            <span className=" text-[#033086] font-normal">T{e?.heading}</span>
            <span className=" font-semibold">{e?.count}</span>
          </div>
        ))}
      </div>
      <div className=" flex justify-between items-center mt-8">
        <div className="flex items-center">
          <span>Flter:</span>
          {count.map((e) => (
            <div className=" ml-4 bg-[#033086] w-[120px] h-[40px]  text-white flex justify-center  items-center rounded-[20px] ">
              <span>{e?.btn}</span>
              <span className=" bg-red-600 p-2 rounded-full ml-2">
                <img src={bin} className=" " />
              </span>
            </div>
          ))}
        </div>
        <div>
          <div className="px-6 py-2" style={{ border: "1px solid lightgray" }}>
            Sort By
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
