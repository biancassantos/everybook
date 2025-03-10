import NavbarLink from "./NavbarLink";
import { GiBookshelf } from "react-icons/gi";
import { FaBookOpen, FaBookmark, FaStar } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="self-start">
      <ul className="flex gap-5 justify-between">
        <NavbarLink text="My bookshelf" url="/" icon={<GiBookshelf />} />
        <NavbarLink text="Reading now" url="/reading" icon={<FaBookOpen />} />
        <NavbarLink text="Next reads" url="/next-reads" icon={<FaBookmark />} />
        <NavbarLink text="Favorites" url="/favorites" icon={<FaStar />} />
      </ul>
    </nav>
  )
}

export default Navbar;