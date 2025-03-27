import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import useDebounce from "../../hooks/useDebounce";
import bookApi from "../../services/api";
import { IoSearch, IoClose } from "react-icons/io5"
import SearchList from "./SearchList";
import { formatToUrlParam } from "../../utils/helpers";

function Searchbar() {
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")

  const debouncer = useDebounce(() => setDebouncedSearch(search), 1000);
  const bookNameParam = formatToUrlParam(debouncedSearch);

  const clearSearch = () => setSearch("");

  const { data: books } = useSuspenseQuery({
    queryKey: ["books", bookNameParam],
    queryFn: () => bookApi.getBooks(bookNameParam)
  });

  debouncer();

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

      {search != "" && <SearchList books={books} clearSearch={clearSearch} />}
    </section>
  )
}

export default Searchbar;