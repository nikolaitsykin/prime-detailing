import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down_icon.svg";
import {
  exteriorDetailingServices,
  fullDetailingServices,
  interiorDetailingServices,
} from "../../utils/detailingPackages";
import DropdownList from "./DropdownList";

const Dropdown = ({ title, closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="float-start md:float-left overflow-hidden"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button
        className="flex justify-center items-center  text-gray focus:text-white hover:text-white  h-12 text-md m-0 px-3 fill-gray hover:fill-white"
        type="button"
      >
        {title}
        <ArrowDown />
      </button>
      <ul
        className={`${isDropdownOpen ? "block" : "hidden"} 
            z-10 flex-col absolute bg-black min-w-32 md:min-w-36 shadow-lg ml-24 -mt-12 md:m-0`}
      >
        <DropdownList
          options={exteriorDetailingServices}
          closeMenu={closeMenu}
          closeDropdown={closeDropdown}
        />
        <DropdownList
          options={interiorDetailingServices}
          closeMenu={closeMenu}
          closeDropdown={closeDropdown}
        />
        <DropdownList
          options={fullDetailingServices}
          closeMenu={closeMenu}
          closeDropdown={closeDropdown}
        />
      </ul>
    </div>
  );
};

export default Dropdown;
