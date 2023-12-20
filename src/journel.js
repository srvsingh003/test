import React from "react";
import book from "./Group.png";
import icon from "./gr.png";
import Filter from "./filter";

function Journel() {
  var i = [1, 2, 3];
  var books = [1, 2, 3, 4, 5, 6, 7];
  var page = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex sm:p-8 p-0">
      <div
        className="sm:w-[30%] hidden sm:block"
        style={{ borderRight: "1px solid lightgray" }}
      >
        <Filter />
      </div>
      <div className=" sm:w-[70%] ">
        {books.map((e) => (
          <div className=" h-[225px] rounded-xl sm:h-[158px] sm:ml-4 bg-blue p-4 flex justify-between bg-[#faf8f8] mt-2">
            <div className=" flex">
              <div className=" flex flex-col  justify-center  items-center sm:block">
                <div className=" h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]">
                  <img src={book} className="h-[39px] w-[32px] " />
                </div>
                <div
                  className=" sm:hidden
                                  px-2 py-[5px] text-[#F38D15] font-mediumsm: bg-gray-50 rounded-md ml-4
                "
                  style={{ border: "1px solid green" }}
                >
                  Ebook
                </div>
              </div>
              <div className=" ml-4">
                <span className=" flex">
                  <span>Journal of chemical technology and biotechnology </span>
                  <span
                    className="hidden sm:px-2 sm:py-[5px] sm:text-[#F38D15] sm:font-mediumsm: bg-gray-50 sm:rounded-md sm:block sm:ml-4"
                    style={{ border: "1px solid green" }}
                  >
                    Ebook
                  </span>
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
        <div className=" flex justify-center  mt-6">
          <div className=" rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white">
            <button>&lt;</button>
          </div>
          {page.map((e) => (
            <div className=" rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white">
              <button>{e}</button>
            </div>
          ))}
          <div className=" rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white">
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journel;
