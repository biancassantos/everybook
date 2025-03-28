import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { updateBook } from "../services/firebase";
import { bookExists, wantsToReadBook, isReadingBook } from "../utils/helpers";
import { MdDelete } from "react-icons/md";
import type { UserBook } from "../@types";

function RemoveBookButton({ bookKey }: {bookKey: string}) {
  const books = useContext(BooksContext);
    
  const book = bookExists(books?.allBooks as UserBook[], bookKey);
  const wantsToRead = wantsToReadBook(books?.allBooks as UserBook[], bookKey);
  const isReading = isReadingBook(books?.allBooks as UserBook[], bookKey);
  const id = book?.id ? book.id : undefined;

  const onClick = () => {
    if (book && id && wantsToRead) {
      updateBook(id , {...book, wants_to_read: false});

    } else if (book && id && isReading) {
      updateBook(id, {...book, reading: false});
    }
  }

  return (
    <button
    onClick={onClick}
    className="self-start text-2xl hover:text-primarydark duration-300 cursor-pointer xs:text-3xl"
    >
      <MdDelete />
    </button>
  )
}

export default RemoveBookButton;