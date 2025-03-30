import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import ActionButton from "../../../components/ActionButton";
import { changeUserPassword } from "../../../services/firebase";
import { getErrorMessage } from "../../../utils/helpers";
import { toast } from "sonner";

const changePasswordSchema = z.object({
  password: z.string().min(8, {message: "Password must be at least 8 characters long"}).nonempty(),
  newPassword: z.string().min(8, {message: "New password must be at least 8 characters long"}).nonempty()
})

function ChangePasswordForm() {
  const {
      register,
      watch,
      handleSubmit,
      formState: {
        errors,
        isSubmitting
      }
    } = useForm({resolver: zodResolver(changePasswordSchema)});

  const [generalError, setGeneralError] = useState(""); /* Mainly Firebase errors */

  const password = watch("password");
  const newPassword = watch("newPassword");

  const labelClass = "text-sm mb-1";
  const inputClass = "border border-[#A4A4A4] rounded-md py-1 px-2 w-full";
  const errorClass = "text-sm text-red-500";

  const success = () => toast.success("Password changed successfully!");
  const fail = () => toast.error("Failed to change password");

  const onSubmit = async () => {
    try {
      await changeUserPassword(password, newPassword);
      success();
    } catch (error) {
      const message = getErrorMessage(error);
      if (message) setGeneralError(message);
      fail();
    }
  }

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col items-start gap-4 w-full max-w-[300px]"
    >
      <section className="flex flex-col w-full">
        <label
        htmlFor="password"
        className={labelClass}
        >
          Current password
        </label>
        <input
        type="password"
        id="password"
        {...register("password")}
        className={classNames(inputClass, {"border-red-500": errors.password})}
        />
        {errors.password && <span className={errorClass}>{errors.password.message}</span>}
      </section>

      <section className="flex flex-col w-full">
        <label
        htmlFor="newPassword"
        className={labelClass}
        >
          New password
        </label>
        <input
        type="password"
        id="newPassword"
        {...register("newPassword")}
        className={classNames(inputClass, {"border-red-500": errors.newPassword})}
        />
        {errors.newPassword && <span className={errorClass}>{errors.newPassword.message}</span>}

        {generalError && <span className={errorClass}>{generalError}</span>}
      </section>
      
      <ActionButton
      isFilled={true}
      disabled={isSubmitting}
      >
        Change password
      </ActionButton>
    </form>
  )
}

export default ChangePasswordForm;