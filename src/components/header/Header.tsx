import Greeting from "./Greeting";
import UserArea from "./UserArea";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <header className="flex flex-col gap-6 py-8 px-10">
      <div className="flex justify-between items-center mb-6">
        <Greeting />
        <UserArea />
      </div>
      <Navbar />
      <div className="flex items-center gap-4">
        <hr className="w-full border-primary" />
        <Searchbar />
      </div>
    </header>
  )
}

export default Header;