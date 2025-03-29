import { deleteUserAccount } from "../../../services/firebase";
import DeleteButton from "./DeleteButton";
import { toast } from "sonner";

function DeleteGoogleUser() {
  const onClick = async () => {
    try {
      await deleteUserAccount(true, false);
      toast.success("Your account was successfully deleted");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete account, check your credentials and try again");
    }
    
  }

  return (
    <>
      <DeleteButton onClick={onClick} />
    </>
  )
}

export default DeleteGoogleUser;