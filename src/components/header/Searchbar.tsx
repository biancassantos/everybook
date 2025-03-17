import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { IoSearch, IoClose } from "react-icons/io5"
import SearchList from "./SearchList";

function Searchbar() {
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")

  const debouncer = useDebounce(() => setDebouncedSearch(search), 1000);

  debouncer();

  const clearSearch = () => setSearch("");

  return (
    <section className="flex items-center gap-2 border border-primary bg-latte rounded-full py-1 px-4 self-end relative">
      <IoSearch className="text-primary text-lg" />    
      <input 
      type="text"
      placeholder="Search new book..."
      value={search}
      className="max-w-[150px] py-1 px-2 sm:max-w-full"
      onChange={e => setSearch(e.target.value)}
      />
      <button
      onClick={clearSearch}
      className="cursor-pointer p-1"
      >
        <IoClose className="text-primary text-xl" />
      </button>

      {debouncedSearch != "" && <SearchList searchText={debouncedSearch} />}
    </section>
  )
}

export default Searchbar;