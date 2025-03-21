import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpWithEmail } from "../../../services/firebase";
import { getErrorMessage } from "../../../utils/helpers";
import classNames from "classnames";
import AuthButton from "../../../components/AuthButton";

const registerSchema = z.object({
  email: z.string().email("Invalid email").nonempty(),
  password: z.string().min(8, {message: "Password must be at least 8 characters long"}).nonempty(),
  confirmPassword: z.string().nonempty("Please confirm the password")
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match", 
  path: ["confirmPassword"]
})

function RegisterForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }} = useForm({resolver: zodResolver(registerSchema)});

  const [generalError, setGeneralError] = useState("");

  const navigate = useNavigate();

  const email = watch("email");
  const password = watch("password");

  const labelClass = "text-sm mb-1";
  const inputClass = "border border-[#A4A4A4] rounded-md py-1 px-2 w-full";
  const errorClass = "text-sm text-red-500";

  const onSubmit = async () => {
    try {
      await signUpWithEmail(email, password);
      navigate("/");
    } catch (error) {
      const message = getErrorMessage(error);
      if (message) setGeneralError(message);
    }
  }

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-4 w-full max-w-[350px]"
    >
      {generalError && <span className={errorClass}>{generalError}</span>}

      <section className="flex flex-col">
        <label
        htmlFor="email"
        className={labelClass}
        >
          E-mail
        </label>
        <input
        type="text"
        id="email"
        {...register("email")}
        className={classNames(inputClass, {"border-red-500": errors.email})}
        />
        {errors.email && <span className={errorClass}>{errors.email.message}</span>}
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
        id="password"
        {...register("password")}
        className={classNames(inputClass, {"border-red-500": errors.password})}
        />
        {errors.password && <span className={errorClass}>{errors.password.message}</span>}
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
        id="confirmPassword"
        {...register("confirmPassword")}
        className={classNames(inputClass, {"border-red-500": errors.confirmPassword})}
        />
        {errors.confirmPassword && <span className={errorClass}>{errors.confirmPassword.message}</span>}
      </section>
      
      <AuthButton 
      disabled={isSubmitting ? true : false}
      text="Sign Up"
      />
    </form>
  )
}

export default RegisterForm;