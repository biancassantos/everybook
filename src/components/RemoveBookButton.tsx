import { MdDelete } from "react-icons/md";

type RemoveBookButtonProps = React.ComponentPropsWithoutRef<"button"> & {

}

function RemoveBookButton({ onClick }: RemoveBookButtonProps) {
  return (
    <button
    onClick={onClick}
    className="self-start text-3xl hover:text-primarydark duration-300 cursor-pointer"
    >
      <MdDelete />
    </button>
  )
}

export default RemoveBookButton;