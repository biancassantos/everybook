import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthButton from "../../../components/AuthButton";
import classNames from "classnames";
import { resetPassword } from "../../../services/firebase";
import ConfirmationMessage from "./ConfirmationMessage";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid e-mail").nonempty()
})

function ForgotPasswordForm() {
  const {
    register, 
    watch,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful
    }} = useForm({resolver: zodResolver(forgotPasswordSchema)});

  const email = watch("email");

  const labelClass = "text-sm mb-1";
  const inputClass = "border border-[#A4A4A4] rounded-md py-1 px-2 w-full";
  const errorClass = "text-sm text-red-500";

  const onSubmit = async () => {
    try {
      await resetPassword(email);
    } catch (error) {
      console.error(error);
    }
  }

  if (isSubmitSuccessful) return <ConfirmationMessage email={email} />;

  return (
    <section className="flex flex-col items-center gap-8 w-full max-w-[400px]">
      <p className="text-center">Please inform the e-mail address associated with your account to reset your password.</p>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full max-w-[350px]"
      >
        <section className="flex flex-col">
          <label 
          htmlFor="email"
          className={labelClass}
          >
            E-mail:
          </label>
          <input
          type="text"
          id="email"
          {...register("email")}
          className={classNames(inputClass, {"border-red-500": errors.email})}
          />
          {errors.email && <span className={errorClass}>{errors.email.message}</span>}
        </section>
        <AuthButton 
        disabled={isSubmitting ? true : false} 
        text="Reset password"
        />

        <Link 
        to="/"
        className="self-center p-3 hover:text-primarydark duration-300"
        >
          Cancel
        </Link>
      </form>
    </section>
  )
}

export default ForgotPasswordForm;