import { useContext } from "react";
import { BooksContext } from "../../../contexts/BooksContext";
import { addBook, updateBook } from "../../../services/firebase";
import { bookExists, wantsToReadBook } from "../../../utils/helpers";
import ActionButton from "../../../components/ActionButton";
import { FaBookmark } from "react-icons/fa";
import type { UserBook } from "../../../@types";

function WantsToReadButton({ newBook }: {newBook: UserBook}) {
  const books = useContext(BooksContext);
  
  const book = bookExists(books?.allBooks as UserBook[], newBook.key);
  const wantsToRead = wantsToReadBook(books?.allBooks as UserBook[], newBook.key);
  const id = book?.id ? book.id : undefined;

  const onClick = () => {
    if (book && wantsToRead && id) {
      updateBook(id , {...book, wants_to_read: false});

    } else if (book && !wantsToRead && id) {
      updateBook(id, {...book, wants_to_read: true, reading: false});

    } else {
      if (books?.booksCollectionRef)
        addBook(books?.booksCollectionRef, {...newBook, wants_to_read: true});
    }
  }

  return (
    <ActionButton 
    onClick={onClick}
    isFilled={wantsToRead}
    >
      <FaBookmark /> Wants to read
    </ActionButton>
  )
}

export default WantsToReadButton;