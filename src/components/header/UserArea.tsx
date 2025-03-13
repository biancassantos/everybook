import { FaUserCircle } from "react-icons/fa";
import UserMenu from "./UserMenu";

function UserArea() {
  return (
    <>
      <button className="text-primary text-4xl cursor-pointer relative">
        <FaUserCircle />
      </button>
      <UserMenu />
    </>
  )
}

export default UserArea;