import { Link } from "react-router";
import classNames from "classnames";

type UserMenuProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function UserMenu({ isOpen, setIsOpen }: UserMenuProps) {
  const navClass = classNames("absolute right-7 top-20 z-100 shadow-lg invisible xs:top-19 sm:right-12",
    {"visible": isOpen}
  )

  return (
    <nav className={navClass}>
      <ul className="bg-latte w-[180px] text-primarydark hover:text-primary transition-colors duration-300 rounded-md rounded-tr-none xs:w-[200px]">
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