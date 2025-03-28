import useBooksContext from "../../../hooks/useBooksContext";
import ActionButton from "../../../components/ActionButton";
import { addBook, updateBook } from "../../../services/firebase";
import { bookExists, isBookRead } from "../../../utils/helpers";
import { FaCheck } from "react-icons/fa";
import type { UserBook } from "../../../@types";

function ReadButton({ newBook }: {newBook: UserBook}) {
  const books = useBooksContext();

  const book = bookExists(books?.allBooks as UserBook[], newBook.key);
  const bookIsRead = isBookRead(books?.allBooks as UserBook[], newBook.key);
  const id = book?.id ? book.id : undefined;

  const onClick = () => {
    if (book && bookIsRead && id) {
      updateBook(id , {...book, read: false, is_favorite: false, rating: 0});

    } else if (book && !bookIsRead && id) {
      updateBook(id, {...book, read: true});

    } else {
      if (books?.booksCollectionRef)
        addBook(books?.booksCollectionRef, {...newBook, read: true});
    }
  }

  return (
    <ActionButton 
    onClick={onClick}
    isFilled={bookIsRead}
    >
      <FaCheck /> Read
    </ActionButton>
  )
}

export default ReadButton;