import NavbarLink from "./NavbarLink";
import { GiBookshelf } from "react-icons/gi";
import { GrInProgress } from "react-icons/gr";
import { FaBookmark } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

function Navbar() {
  return (
    <nav className="self-start">
      <ul className="flex gap-5 justify-between">
        <NavbarLink text="My bookshelf" url="/" icon={<GiBookshelf />} />
        <NavbarLink text="Reading now" url="/reading" icon={<GrInProgress />} />
        <NavbarLink text="Next readings" url="/next-readings" icon={<FaBookmark />} />
        <NavbarLink text="Favorites" url="/favorites" icon={<MdFavorite className="text-lg" />} />
      </ul>
    </nav>
  )
}

export default Navbar;