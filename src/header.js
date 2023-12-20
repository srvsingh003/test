import React from "react";
import bell from "./notif.png";
import flag from "./United.svg";
import logo from "./823c648304080.png";
import ham from "./menu.png";
import vector from "./Vector.png";
function Header() {
  return (
    <div>
      <div
        className="px-4 py-4 flex justify-between sm:px-10 sm:py-6"
        style={{ borderBottom: "1px solid lightgray" }}
      >
        {" "}
        <div
          className="sm:hidden  block p-3 mr-2"
          style={{
            border: "1px solid #221FB91A",
            borderRadius: "50%",
          }}
        >
          <img src={ham} alt="" className=" w-5 h-5" />
        </div>
        <span className=" flex flex-row items-center ml-[-10px] sm:ml-0">
          <span className=" flex">
            <img src={logo} className=" w-[37px] h-[37px] " />
          </span>
          <div className=" text-[#1F5095] w-[219px] hidden sm:block sm:ml-2">
            Indian Institute of Technlogy Mumbai
          </div>
        </span>
        <input
          type=" text"
          className=" w-[552px] hidden sm:block"
          style={{ border: "1px solid #0B37753D", borderRadius: "5px" }}
        />
        <div className=" flex flex-row justify-center items-center sm:ml-0 ml-[97px]">
          <span
            className=" p-3 mr-2"
            style={{
              border: "1px solid #221FB91A",
              borderRadius: "50%",
            }}
          >
            <img src={bell} className=" h-4 w-4" />
          </span>
          <span
            className=" p-3 mr-2 sm:hidden"
            style={{
              border: "1px solid #221FB91A",
              borderRadius: "50%",
            }}
          >
            <img src={vector} className=" h-4 w-4" />
          </span>
          <button
            style={{ border: "1px solid #221FB91A " }}
            className=" rounded-[20px] w-[120px] h-[38px] px-2 justify-center items-center hidden sm:flex"
          >
            <img src={flag} className=" h-[22px] w-[22px] mr-2" />

            <select>
              <option>En</option>
            </select>
          </button>
        </div>
        <div className=" flex justify-center  items-center">
          <img
            src=" https://m.media-amazon.com/images/M/MV5BNzUyMzBmNzQtZjkxMy00MzI0LTlkMzMtMmQ2YzllMDliMTMzXkEyXkFqcGdeQXVyNjAzNTQ5Njc@._V1_.jpg"
            className=" w-[38px] h-[38px]  rounded-full mr-2 "
          />
          <span className="  flex-col hidden sm:flex">
            <span className=" text-[#151D48]  font-semibold">hi alex</span>
            <span className=" text-[#737791] text-[12px]">1234@gmail.com</span>
          </span>
        </div>
      </div>
      <div>
        {/* {sidenav.map((e) => (
          <div>{e.heading}</div>
        ))} */}

        {/* <div>hy</div>
        <div>hy</div>
        <div>hy</div>
        <div>hy</div> */}
      </div>
    </div>
  );
}

export default Header;
