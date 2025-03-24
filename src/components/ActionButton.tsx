import classNames from "classnames";

type ActionButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  isFilled: boolean,
  children: React.ReactNode
}

function ActionButton({ onClick, disabled=false, isFilled, children }: ActionButtonProps) {
  const buttonClass = classNames(
    "flex items-center gap-3 border border-primarydark rounded-lg py-1 px-5 font-semibold hover:border-transparent duration-300 cursor-pointer disabled:opacity-80 disabled:cursor-default",
    {"bg-primary text-latte border-primary! hover:border-primary!": isFilled}
  )

  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    className={buttonClass}
    >
      {children}
    </button>
  )
}

export default ActionButton;