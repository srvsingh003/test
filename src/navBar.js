import React from "react";
import home from "./category-2.png";
import search from "./search-normal.png";

import Content from "./content";
import Journel from "./journel";

function NavBar() {
  const nav = ["Home", "Resources", "Favorites", "Search"];
  return (
    <div className="  flex flex-row ">
      <div
        className=" sm:flex sm:flex-col  sm:items-center hidden "
        // style={{ height: " }}
        style={{ height: "100vh", borderRight: "1px solid  lightgrey" }}
      >
        {nav.map((e) => (
          <div className=" mt-[30px]">
            <span className="w-[100px] flex items-center flex-col justify-center">
              <img src={home} className=" h-[20px] w-[20px] " />
              <span className=" mt-2">{e}</span>
            </span>
          </div>
        ))}
      </div>
      <span className=" flex flex-col w-[100%]">
        <span
          className=" flex items-center  sm:px-8  px-3"
          style={{
            borderBottom: "1px solid lightgray",
            height: "70px",
            //   background: "grey",
          }}
        >
          <div
            className=" p-3 rounded-full   bg-gray-300 mr-2 "
            //   style={{ border: "1px solid grey" }}
          >
            <img src={search} className=" h-5 w-5 " />
          </div>

          <span className=" whitespace-nowrap text-[#1F5095] font-semibold texx-[15px]">
            Search Catalogue
          </span>
        </span>
        <Content />
        <Journel />
      </span>
    </div>
  );
}

export default NavBar;
