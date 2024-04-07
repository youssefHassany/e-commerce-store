"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { SearchDialogue } from "./SearchDialogue";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");
  return (
    <div>
      {/* shown in large screens */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search/${searchVal}`);
          setSearchVal("");
        }}
        className="hidden md:flex gap-1"
      >
        <Input
          placeholder="Search for a product..."
          required
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="bg-zinc-900 p-2 w-56 border-zinc-700 rounded-lg"
        />
        <Button type="submit">
          <FaSearch />
        </Button>
      </form>
      {/* shown in small screens */}
      <div className="md:hidden">
        <SearchDialogue />
      </div>
    </div>
  );
};

export default SearchBox;
