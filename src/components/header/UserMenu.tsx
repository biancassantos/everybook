import { Link } from "react-router";
import classNames from "classnames";

type UserMenuProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function UserMenu({ isOpen, setIsOpen }: UserMenuProps) {
  const navClass = classNames("absolute right-12 top-19 z-100 shadow-lg invisible",
    {"visible": isOpen}
  )

  return (
    <nav className={navClass}>
      <ul className="bg-latte w-[200px] text-primarydark hover:text-primary transition-colors duration-300 rounded-md rounded-tr-none">
        <li className="p-3 border-b border-b-primary text-center active:scale-90 transition-transform duration-300">
          <Link 
          to="/settings"
          className="block"
          onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
        </li>
        <li className="p-3 text-center">
          <button 
          onClick={() => setIsOpen(false)}
          className="font-semibold w-full cursor-pointer active:scale-90 transition-transform duration-300"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default UserMenu;