import { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { BooksContext } from "../../contexts/BooksContext";
import { useSuspenseQuery } from "@tanstack/react-query";
import bookApi from "../../services/api";
import { isBookRead } from "../../utils/helpers";
import IndividualBook from "./components/IndividualBook";
import BookInfo from "./components/BookInfo";
import Rating from "./components/Rating";
import ReadButton from "./components/ReadButton";
import ReadingButton from "./components/ReadingButton";
import WantsToReadButton from "./components/WantsToReadButton";
import Spinner from "../../components/Spinner";
import type { UserBook } from "../../@types";

function BookPage() {
  const { name, key } = useParams();

  const currentUser = useContext(UserContext);
  const books = useContext(BooksContext);

  const { data: book, isPending, isFetching } = useSuspenseQuery({
    queryKey: ["individualBook", name, key],
    queryFn: () => bookApi.getBook(name as string, key as string)
  });

  const bookIsRead = isBookRead(books?.allBooks as UserBook[], book?.key as string);

  const newBook: UserBook = {
    title: book?.title as string,
    author_name: book?.author_name as string,
    first_publish_year: book?.first_publish_year as string,
    cover_edition_key: book?.cover_edition_key as string,
    key: book?.key as string,
    coverUrl: `https://covers.openlibrary.org/b/olid/${book?.cover_edition_key}-L.jpg`,
    book_url: `http://localhost:5173/book/${name}/${key}`,
    uid: currentUser?.user?.uid,
    read: false,
    reading: false,
    wants_to_read: false,
    is_favorite: false,
    rating: 0
  }

  if (isPending || isFetching) return <Spinner />;

  return (
    <section className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:items-start sm:gap-8">
      <section className="w-full sm:w-1/2">
        <IndividualBook
        coverUrl={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`}
        bookTitle={book.title}
        />
      </section>
      
      <section className="flex flex-col gap-20 text-primarydark w-full sm:w-1/2">
        <BookInfo
        bookTitle={book.title}
        author={book.author_name}
        year={book.first_publish_year}
        bookKey={book.key}
        />
        <div className="flex justify-center gap-6 flex-wrap self-center sm:justify-normal sm:self-start">
          <ReadButton newBook={newBook} />
          <ReadingButton newBook={newBook} />
          <WantsToReadButton newBook={newBook} />
        </div>

        {bookIsRead && <Rating bookKey={book.key} />}
      </section>
    </section>
  )
}

export default BookPage;