import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import UserMenu from "./UserMenu";

function UserArea() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-primary text-4xl cursor-pointer relative hover:text-primarydark duration-300"
      >
        <FaUserCircle />
      </button>
      <UserMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default UserArea;