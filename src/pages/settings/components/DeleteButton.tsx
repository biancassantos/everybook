function DeleteButton({ onClick, disabled=false }: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className="text-white font-semibold bg-red-400 border-2 border-transparent py-1 px-5 rounded-lg cursor-pointer not-disabled:hover:text-red-400 not-disabled:hover:bg-transparent not-disabled:hover:border-red-400 duration-300 disabled:opacity-80 disabled:cursor-default"
    >
      Delete my account
    </button>
  )
}

export default DeleteButton;