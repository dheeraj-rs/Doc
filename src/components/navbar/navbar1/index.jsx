import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";

function Navbar1() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="px-3 bg-[#0e1317] border-b border-[#373939]  w-full ">
      <div className=" mx-auto  px-2 sm:px-6 lg:px-8 ">
        <div className="relative max-w-7xl  flex py-7 items-center justify-center bg-transparent z-40">
          <div className="container flex  items-center w-full  justify-between ">
            <div className=" w-full flex justify-between items-center ">
              <div className="flex flex-shrink-0 items-center py-4 z-10  ">
                <img
                  src=""
                  alt="Logo"
                  className="w-[150px] max-w-[150px] h-[34px]"
                />
              </div>
              <div className=" hidden  w-full md:flex md:items-center md:justify-end gap-8">
                <a
                  href="#"
                  className="text-[#ffffff] hover:text-[#B89146]  rounded-md px-3 py-2 text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-[#ffffff] hover:text-[#B89146]  rounded-md px-3 py-2 text-lg font-medium"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="text-[#ffffff] hover:text-[#B89146]  rounded-md px-3 py-2 text-lg font-medium"
                >
                  Room
                </a>
                <a
                  href="#"
                  className="text-[#ffffff] hover:text-[#B89146]  rounded-md px-3 py-2 text-lg font-medium"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-[#ffffff] hover:text-[#B89146]  rounded-md px-3 py-2 text-lg font-medium"
                >
                  Contact
                </a>

                <button className="w-max hidden   px-8 bg-[#B89146] lg:flex  text-lg text-white py-4">
                  <a href="" className="pr-4">
                    BOOK NOW
                  </a>
                  <EastIcon />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center md:hidden z-40">
                {isDropdownOpen ? (
                  <CloseIcon
                    fontSize="large"
                    className="text-white cursor-pointer "
                    onClick={toggleDropdown}
                  />
                ) : (
                  <MenuIcon
                    fontSize="large"
                    className="text-[#ffffff] cursor-pointer "
                    onClick={toggleDropdown}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden absolute w-full left-0 px-3 z-40">
          {isDropdownOpen ? (
            <div className="space-y-1 bg-white px-2 pb-3 pt-2  z-40">
              <a
                href="#"
                className=" lg:text-white py-6 px-4 block hover:bg-gray-200 border-b border-gray-300"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                className=" lg:text-white py-6 px-4 block hover:bg-gray-200 border-b border-gray-300"
              >
                Team
              </a>
              <a
                href="#"
                className=" lg:text-white py-6 px-4 block hover:bg-gray-200 border-b border-gray-300"
              >
                Projects
              </a>
              <a
                href="#"
                className=" lg:text-white py-6 px-4 block hover:bg-gray-200 "
              >
                Calendar
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
