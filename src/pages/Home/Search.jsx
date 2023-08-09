import React, { useContext, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { FetchedDataContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [isListShown, setIsListShown] = useState(false);

  const { search, setSearch, searchList, handleSearch } =
    useContext(FetchedDataContext);

  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  return (
    <div
      className={`w-full h-[90vh] flex flex-col justify-center items-center hero relative`}
    >
      <div className="absolute w-full h-full bg-black opacity-80 top-0 left-0 z-0"></div>
      <form
        className={`bg-white shadow-xl w-9/12 p-5 relative z-10 rounded`}
        onSubmit={(e) => handleSearchSubmit(e)}
      >
        <input
          type="text"
          className={`w-11/12 focus:outline-none`}
          placeholder="Search for a product"
          value={search}
          onChange={handleSearch}
          onFocus={() => setIsListShown(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsListShown(false);
            }, 100)
          }
        />
        <button type="submit">
          {" "}
          <FaSistrix />{" "}
        </button>
      </form>

      <div
        className={`w-9/12 bg-white p-3 shadow-xl mx-auto my-2 rounded h-fit max-h-40 overflow-y-scroll relative z-10 ${
          isListShown ? "" : "hidden"
        }`}
      >
        <ul>
          {searchList.map((item, idx) => (
            <li
              key={idx * 10}
              className="p-2 border-b border-gray-300 hover:bg-gray-300 cursor-pointer flex justify-between"
              onClick={() => setSearch(item.title)}
            >
              <p>{item.title}</p>
              <img src={item.image} className="w-8" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
