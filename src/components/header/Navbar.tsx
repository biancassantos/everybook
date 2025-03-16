import NavbarLink from "./NavbarLink";
import { GiBookshelf } from "react-icons/gi";
import { GrInProgress } from "react-icons/gr";
import { FaBookmark } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

function Navbar() {
  return (
    <nav className="self-center md:self-start">
      <ul className="flex gap-3 justify-between sm:gap-5">
        <NavbarLink text="My bookshelf" url="/" icon={<GiBookshelf />} />
        <NavbarLink text="Reading now" url="/reading-now" icon={<GrInProgress />} />
        <NavbarLink text="Next readings" url="/next-readings" icon={<FaBookmark />} />
        <NavbarLink text="Favorites" url="/favorites" icon={<MdFavorite className="text-lg" />} />
      </ul>
    </nav>
  )
}

export default Navbar;