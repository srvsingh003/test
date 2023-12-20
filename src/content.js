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
    <div className="p-4 sm:p-10 sm:bg-[#f6f6f6] bg-white">
      <h1 className=" text-[#1F5095] text-[23px]  font-semibold">
        Find articles,ejournals,ebooks that are in need of from our E-Resources
      </h1>
      <p className=" text-[#A3AED0] mt-2">
        Find articles,ejournals, ebooks that you are in need of from our 10000+
        repo
      </p>
      <div className=" mt-2 sm:flex">
        <input
          type=" text"
          style={{ border: "1px solid lightgray" }}
          className="w-[307px] sm:w-[400px] p-[10px] mr-4 rounded-lg"
          placeholder="Search anything"
        />
        <div className="flex sm:block mt-2">
          {btn.map((e) => (
            <button
              className=" px-[4px] py-2 sm:p-[10px] rounded-lg mr-2  bg-white "
              style={{ border: "1px solid lightgray" }}
            >
              Search Type
            </button>
          ))}
        </div>
      </div>
      <div className=" flex flex-wrap sm:flex-nowraps">
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
      <div className=" flex  mt-8 sm:flex-row sm:justify-between flex-col">
        <div className="sm:flex sm:items-center   flex-row ">
          <span>Flter:</span>
          <div className=" flex flex-wrap sm:flex-nowrap  ">
            {count.map((e) => (
              <div className="mt-4 ml-4 bg-[#033086] w-[100px] sm:w-[120px] sm:h-[40px] h-[35px] text-white flex justify-center  items-center rounded-[20px] ">
                <span className=" text-[11px] sm:text-base">{e?.btn}</span>
                <span className="p-[6px] bg-red-600 sm:p-2 rounded-full ml-2">
                  <img src={bin} className=" " />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex mt-[100px] justify-end sm:block">
          <div className="px-6 py-2" style={{ border: "1px solid lightgray" }}>
            Sort By
          </div>
          <div
            className="sm:hidden px-6 py-2 ml-2"
            style={{ border: "1px solid lightgray" }}
          >
            Filter By
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
