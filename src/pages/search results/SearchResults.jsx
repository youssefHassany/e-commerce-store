import React, { useContext } from "react";
import { FetchedDataContext } from "../../App";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const { searchList } = useContext(FetchedDataContext);
  return (
    <div className="w-screen mt-14 bg-gray-200">
      <h1 className="text-center text-2xl my-4 font-medium p-3">
        ({searchList.length}) Items Found
      </h1>
      {searchList.map((item) => (
        <div className="p-4 w-full h-full">
          <Link
            to={`/product/${item.id}`}
            className="w-full lg:w-10/12 mx-auto rounded shadow-lg bg-white p-1 flex gap-3 items-center"
          >
            <>
              <img src={item.imgSrc} className="w-28" />
            </>
            <div>
              <p className="text-2xl">{item.name}</p>
              <p className="font-bold">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
