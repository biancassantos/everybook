import { Link } from "react-router";

function UserMenu() {
  return (
    <nav className="absolute right-12 top-19 z-100 shadow-lg">
      <ul className="bg-latte w-[200px] text-primarydark  hover:text-primary duration-300 rounded-md rounded-tr-none">
        <li className="p-3 border-b border-b-primary text-center active:scale-90 duration-300">
          <Link 
          to="/settings"
          className="block"
          >
            Settings
          </Link>
        </li>
        <li className="p-3 text-center">
          <button className="font-semibold w-full cursor-pointer active:scale-90 duration-300">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default UserMenu;