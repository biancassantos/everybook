type AuthButtonProps = {
  text: string
}

function AuthButton({ text }: AuthButtonProps) {
  return (
    <button className="bg-primary py-2 px-12 mt-4 rounded-lg self-center text-lg text-white font-semibold cursor-pointer hover:bg-primarydark duration-300 active:scale-90 md:py-3">
      {text}
    </button>
  )
}

export default AuthButton;