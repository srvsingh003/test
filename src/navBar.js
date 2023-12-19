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
        className=" flex flex-col  items-center  "
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
          className=" flex items-center  px-8 "
          style={{
            borderBottom: "1px solid grey",
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

          <span className=" whitespace-nowrap">Serach catlouge</span>
        </span>
        <Content />
        <Journel />
      </span>
    </div>
  );
}

export default NavBar;
