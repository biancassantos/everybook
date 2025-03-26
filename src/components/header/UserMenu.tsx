import { Link, useNavigate } from "react-router";
import { logout } from "../../services/firebase";
import classNames from "classnames";

type UserMenuProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function UserMenu({ isOpen, setIsOpen }: UserMenuProps) {
  const navigate = useNavigate();

  const signOut = () => {
    setIsOpen(false);
    logout();
    navigate("/login");
  }

  const navClass = classNames("absolute right-6 top-21 z-100 shadow-lg invisible sm:right-12", {"visible": isOpen})

  return (
    <nav className={navClass}>
      <ul className="bg-latte w-[150px] text-primarydark hover:text-primary transition-colors duration-300 rounded-md rounded-tr-none before:size-4 before:bg-latte before:absolute before:right-1 before:top-[-7px] before:rotate-45">
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
          onClick={signOut}
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