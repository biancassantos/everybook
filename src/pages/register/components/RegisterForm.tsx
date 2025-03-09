import AuthButton from "../../../components/AuthButton";

function RegisterForm() {
  const labelClass = "text-sm mb-1";
  const inputClass = "border border-[#A4A4A4] rounded-md py-1 px-2 w-full";

  return (
    <form className="flex flex-col gap-4 w-full max-w-[350px]">
      <section className="flex flex-col">
        <label
        htmlFor="firstName"
        className={labelClass}
        >
          First Name
        </label>
        <input
        type="text"
        name="firstName"
        id="firstName"
        className={inputClass}
        />
      </section>
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
      <section className="flex flex-col">
        <label
        htmlFor="confirmPassword"
        className={labelClass}
        >
          Confirm Password
        </label>
        <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        className={inputClass}
        />
      </section>
      <AuthButton text="Sign Up" />
    </form>
  )
}

export default RegisterForm;