import { Link } from "react-router";
import AuthButton from "../../../components/AuthButton";

function LoginForm() {
  const labelClass = "text-sm mb-1";
  const inputClass = "border border-[#A4A4A4] rounded-md py-1 px-2 w-full";

  return (
    <form className="flex flex-col gap-4 w-full max-w-[350px]">
      <section className="flex flex-col">
        <label 
        htmlFor="email"
        className={labelClass}
        >
          E-mail
        </label>
        <input 
        type="text" 
        name="email" 
        id="email" 
        className={inputClass}
        />
      </section>
      <section className="flex flex-col">
        <label 
        htmlFor="password"
        className={labelClass}
        >
          Password
        </label>
        <input 
        type="password" 
        name="password" 
        id="password" 
        className={inputClass}
        />
      </section>
      <p className="text-sm self-end">
        <Link to="#" className=" hover:text-primarydark duration-300">
          Forgot your password?
        </Link>
      </p>
      <AuthButton text="Sign In" />
    </form>
  )
}

export default LoginForm;