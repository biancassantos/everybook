import useBooksContext from "../../../hooks/useBooksContext";
import FavoriteButton from "./FavoriteButton";
import { isBookRead } from "../../../utils/helpers";
import type { BookProps, UserBook } from "../../../@types";

function BookInfo({ bookTitle, author, year, bookKey }: BookProps) {
  const books = useBooksContext();

  const bookIsRead = isBookRead(books?.allBooks as UserBook[], bookKey as string);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex justify-between items-center gap-4 w-fit">
        <h1 className="font-playfair text-3xl xs:text-4xl">
          {bookTitle}
        </h1>
        
        {bookIsRead && <FavoriteButton bookKey={bookKey as string} />}
      </div>
      <p className="text-xl xs:text-2xl">{author}</p>
      <p className="text-xl xs:text-2xl">{year}</p>
    </section>
  )
}

export default BookInfo;