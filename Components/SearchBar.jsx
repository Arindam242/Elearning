import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = () => {
  return (
    <div className="w-full h-24 my-4 bg-gray-200 flex items-center p-5 justify-between">
      <div className="flex items-center bg-white rounded-md px-4 w-5/12 py-2 space-x-2 focus:bg-white">
        <SearchIcon className="h-5 text-gray-500 " />
        <input
          type="text"
          className="focus:outline-none px-4    text-gray-500  leading-tight "
          placeholder="course name , auhtor or theme"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div>
          {/* <label htmlFor="language">Any language</label> */}
          <select id="language" className="outline-none bg-transparent ">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
        <div>
          <label htmlFor="withcertificate">With certificate</label>
          <input className="ml-3" id="withcertificate" type="checkbox" />
        </div>
        <div>
          <label htmlFor="Free">Free</label>
          <input className="ml-3" id="Free" type="checkbox" />
        </div>
        <button className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-800 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
