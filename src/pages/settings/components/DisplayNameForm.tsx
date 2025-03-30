import useUserContext from "../../../hooks/useUserContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import ActionButton from "../../../components/ActionButton";
import { changeDisplayName } from "../../../services/firebase";
import { toast } from "sonner";

const displayNameSchema = z.object({
  newDisplayName: z.string().nonempty("Display name must be at least 1 character long").refine(displayName => !displayName.includes(" "), {message: "The display name must consist of only one word"})
})

function DisplayNameForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({resolver: zodResolver(displayNameSchema)});

  const currentUser = useUserContext();

  const newDisplayName = watch("newDisplayName");

  const labelClass = "text-sm mb-1";
  const inputClass = "border border-[#A4A4A4] rounded-md py-1 px-2 w-full";
  const errorClass = "text-sm text-red-500";

  const success = () => toast.success("Name updated successfully!");
  const fail = () => toast.error("Failed to update name");

  const onSubmit = async () => {
    try {
      await changeDisplayName(newDisplayName);
      success();
      setTimeout(() => {
        window.location.reload(); /* Reloads the page so the new name renders (after 1 second, so the user is able to read the toast) */
      }, 1000);
    } catch (error) {
      console.error(error);
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
        htmlFor="newDisplayName"
        className={labelClass}
        >
          Display name
        </label>
        <input
        type="text"
        id="newDisplayName"
        {...register("newDisplayName")}
        defaultValue={currentUser?.user?.displayName ? currentUser?.user?.displayName : "User"}
        className={classNames(inputClass, {"border-red-500": errors.newDisplayName})}
        />
        {errors.newDisplayName && <span className={errorClass}>{errors.newDisplayName.message}</span>}
      </section>
      
      <ActionButton
      isFilled={true}
      disabled={isSubmitting}
      >
        Change name
      </ActionButton>
    </form>
  )
}

export default DisplayNameForm;