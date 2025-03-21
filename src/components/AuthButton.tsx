type AuthButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  text: string
}

function AuthButton({ text, disabled=false }: AuthButtonProps) {
  return (
    <button 
    disabled={disabled}
    type="submit"
    className="bg-primary py-2 px-12 mt-4 rounded-lg self-center text-lg text-white font-semibold cursor-pointer hover:bg-primarydark duration-300 active:scale-90 disabled:opacity-80 disabled:cursor-default md:py-3">
      {text}
    </button>
  )
}

export default AuthButton;