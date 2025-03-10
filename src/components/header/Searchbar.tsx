import { IoSearch, IoClose } from "react-icons/io5"

function Searchbar() {
  return (
    <section className="flex items-center gap-2 border border-primary bg-latte rounded-full py-1 px-4 self-end">
      <IoSearch className="text-primary text-lg" />    
      <input 
      type="text"
      placeholder="Search new book..."
      className="py-1 px-2"
      />
      <button className="cursor-pointer p-1">
        <IoClose className="text-primary text-xl" />
      </button>
    </section>
    
  )
}

export default Searchbar;