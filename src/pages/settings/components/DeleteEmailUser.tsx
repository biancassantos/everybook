import useBooksContext from "../../../hooks/useBooksContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import { deleteUserAccount } from "../../../services/firebase";
import { deleteAllUserBooks } from "../../../utils/helpers";
import DeleteButton from "./DeleteButton";
import { toast } from "sonner";
import type { UserBook } from "../../../@types";

const confirmPasswordSchema = z.object({
  password: z.string().min(8, {message: "Password must be at least 8 characters long"}).nonempty()
})

function DeleteEmailUser() {
  const {
    register, 
    watch,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }} = useForm({resolver: zodResolver(confirmPasswordSchema)});

  const books = useBooksContext();

  const password = watch("password");

  const labelClass = "text-sm mb-1";
  const inputClass = "border border-[#A4A4A4] rounded-md py-1 px-2 w-full";
  const errorClass = "text-sm text-red-500";

  const onSubmit = async () => {
    try {
      await deleteUserAccount(false, true, password);
      deleteAllUserBooks(books?.allBooks as UserBook[]);
      toast.success("Your account was successfully deleted");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete account, check your credentials and try again");
    }
  }

  return (
    <form
    className="flex flex-col gap-4 w-full max-w-[350px]"
    onSubmit={handleSubmit(onSubmit)}
    >
      <section>
        <label 
        htmlFor="password"
        className={labelClass}
        >
          Please confirm your password
        </label>
        <input 
        type="password" 
        id="password" 
        {...register("password")}
        className={classNames(inputClass, {"border-red-500": errors.password})}
        />
        {errors.password && <span className={errorClass}>{errors.password.message}</span>}
      </section>

      <DeleteButton disabled={isSubmitting} />
    </form>
  )
}

export default DeleteEmailUser;