import React from "react";
import book from "./Group.png";
import icon from "./gr.png";
import Filter from "./filter";

function Journel() {
  var i = [1, 2, 3];
  var books = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className=" flex p-8">
      <div
        className=" w-[30%]  "
        style={{ borderRight: "1px solid lightgray" }}
      >
        <Filter />
      </div>
      <div className=" w-[70%]">
        {books.map((e) => (
          <div className=" rounded-xl h-[158px] ml-4 bg-blue p-4 flex justify-between bg-[#faf8f8] mt-2">
            <div className=" flex">
              <div className=" h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]">
                <img src={book} className="h-[39px] w-[32px] " />
              </div>
              <div className=" ml-4">
                <span>Journal of chemical technology and biotechnology </span>
                <span
                  className=" px-2 py-[5px] text-[#F38D15] font-medium bg-gray-50 rounded-md"
                  style={{ border: "1px solid green" }}
                >
                  Ebook
                </span>
                <p className=" mt-6 text-[#1F5095]">
                  by Wiley InterScience (Online service); Wiley Online Library;
                  Blieberger, Johann; Strohmeier, Alfred , 2019
                </p>
                <p className=" mt-2 text-[#1F5095]">ISBN : 8878 87888 578</p>
              </div>
            </div>
            <div className=" flex flex-row">
              {i.map((e) => (
                <div className=" mr-3 ">
                  <img src={icon} className=" w-[9px] h-[12px]" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journel;
