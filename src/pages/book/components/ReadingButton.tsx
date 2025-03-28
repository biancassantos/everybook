import useBooksContext from "../../../hooks/useBooksContext";
import { addBook, updateBook } from "../../../services/firebase";
import { bookExists, isReadingBook } from "../../../utils/helpers";
import ActionButton from "../../../components/ActionButton";
import { GrInProgress } from "react-icons/gr";
import type { UserBook } from "../../../@types";

function ReadingButton({ newBook }: {newBook: UserBook}) {
  const books = useBooksContext();
  
  const book = bookExists(books?.allBooks as UserBook[], newBook.key);
  const isReading = isReadingBook(books?.allBooks as UserBook[], newBook.key);
  const id = book?.id ? book.id : undefined;

  const onClick = () => {
    if (book && isReading && id) {
      updateBook(id , {...book, reading: false});

    } else if (book && !isReading && id) {
      updateBook(id, {...book, reading: true, wants_to_read: false});

    } else {
      if (books?.booksCollectionRef)
        addBook(books?.booksCollectionRef, {...newBook, reading: true});
    }
  }

  return (
    <ActionButton 
    onClick={onClick}
    isFilled={isReading}
    >
      <GrInProgress /> Reading
    </ActionButton>
  )
}

export default ReadingButton;