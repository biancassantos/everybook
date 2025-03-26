import Greeting from "./Greeting";
import UserArea from "./UserArea";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <header className="flex flex-col gap-8 py-8 px-5 max-w-[1580px] mx-auto sm:gap-6 sm:px-10">
      <div className="flex justify-between items-start gap-4 mb-6 xs:items-center">
        <Greeting />
        <UserArea />
      </div>
      <Navbar />
      <div className="flex justify-center items-center gap-4 sm:justify-between">
        <hr className="hidden border-primary sm:inline sm:w-full" />
        <Searchbar />
      </div>
    </header>
  )
}

export default Header;