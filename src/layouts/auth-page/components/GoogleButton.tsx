import googleIcon from "../../../assets/imgs/google-icon.png";

function GoogleButton() {
  return (
    <button className="flex items-center gap-3 border border-primary py-1 px-3 rounded-lg text-sm cursor-pointer hover:border-transparent hover:text-primarydark duration-300 active:scale-90 xs:text-base">
      <img 
      src={googleIcon} 
      alt="Google logo icon"
      className="size-[28px]"
      />
      Continue with Google
    </button>
  )
}

export default GoogleButton;