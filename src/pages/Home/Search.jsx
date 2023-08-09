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
    <>
      <form
        className={`mt-20 mx-auto shadow-lg w-9/12 p-5`}
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
        className={`w-9/12 bg-white p-3 shadow-xl mx-auto my-2 rounded h-fit max-h-40 overflow-y-scroll ${
          isListShown ? "" : "hidden"
        }`}
      >
        <ul>
          {searchList.map((item, idx) => (
            <li
              key={idx * 10}
              className="p-2 border-b border-gray-300 hover:bg-gray-300 cursor-pointer flex justify-between"
              onClick={() => setSearch(item.name)}
            >
              <p>{item.name}</p>
              <img src={item.imgSrc} className="w-8" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
