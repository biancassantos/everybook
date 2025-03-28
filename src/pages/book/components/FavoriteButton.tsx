import useBooksContext from "../../../hooks/useBooksContext";
import { bookExists, isBookFavorite } from "../../../utils/helpers";
import { updateBook } from "../../../services/firebase";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import type { UserBook } from "../../../@types";

function FavoriteButton({ bookKey }: {bookKey: string}) {
  const books = useBooksContext();

  const book = bookExists(books?.allBooks as UserBook[], bookKey);
  const bookIsFavorite = isBookFavorite(books?.allBooks as UserBook[], bookKey);
  const id = book?.id ? book.id : undefined;

  const onClick = () => {
    if (book && bookIsFavorite && id) {
      updateBook(id , {...book, is_favorite: false});
      
    } else if (book && !bookIsFavorite && id) {
      updateBook(id , {...book, is_favorite: true});
    }
  }

  return (
    <button 
    onClick={onClick}
    className="text-3xl cursor-pointer"
    >
      {bookIsFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
    </button>
  )
}

export default FavoriteButton;