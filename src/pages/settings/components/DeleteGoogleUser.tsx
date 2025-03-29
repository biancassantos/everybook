import useBooksContext from "../../../hooks/useBooksContext";
import { deleteUserAccount } from "../../../services/firebase";
import { deleteAllUserBooks } from "../../../utils/helpers";
import DeleteButton from "./DeleteButton";
import { toast } from "sonner";
import type { UserBook } from "../../../@types";

function DeleteGoogleUser() {
  const books = useBooksContext();

  const onClick = async () => {
    try {
      await deleteUserAccount(true, false);
      deleteAllUserBooks(books?.allBooks as UserBook[]);
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