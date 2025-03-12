import classNames from "classnames";

type ActionButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  isFilled: boolean,
  children: React.ReactNode
}

function ActionButton({ onClick, isFilled, children }: ActionButtonProps) {
  const buttonClass = classNames(
    "flex items-center gap-3 border border-primarydark rounded-lg py-1 px-5 font-semibold hover:border-secondary duration-300 cursor-pointer",
    {"bg-primary text-latte border-primary! hover:border-primary!": isFilled}
  )

  return (
    <button 
    onClick={onClick}
    className={buttonClass}
    >
      {children}
    </button>
  )
}

export default ActionButton;