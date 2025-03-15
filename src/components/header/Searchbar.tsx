import { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5"
import SearchList from "./SearchList";

function Searchbar() {
  const [search, setSearch] = useState("")

  const clearSearch = () => {
    setSearch("")
  }

  return (
    <section className="flex items-center gap-2 border border-primary bg-latte rounded-full py-1 px-4 self-end relative">
      <IoSearch className="text-primary text-lg" />    
      <input 
      type="text"
      placeholder="Search new book..."
      value={search}
      className="py-1 px-2"
      onChange={e => setSearch(e.target.value)}
      />
      <button
      onClick={clearSearch}
      className="cursor-pointer p-1"
      >
        <IoClose className="text-primary text-xl" />
      </button>

      {search != "" && <SearchList />}
    </section>
  )
}

export default Searchbar;