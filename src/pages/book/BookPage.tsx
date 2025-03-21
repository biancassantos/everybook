import { useEffect, useState } from "react";
import { useParams } from "react-router";
import bookApi from "../../services/api";
import IndividualBook from "./components/IndividualBook";
import BookInfo from "./components/BookInfo";
import Rating from "./components/Rating";
import ReadButton from "./components/ReadButton";
import ReadingButton from "./components/ReadingButton";
import WantsToReadButton from "./components/WantsToReadButton";
import type { Book } from "../../@types/types";

function BookPage() {
  const [book, setBook] = useState<Book | null>(null);
  const { name, key } = useParams();

  useEffect(() => {
    if (name && key) {
      bookApi
        .getBook(name, key)
        .then(data => setBook(data[0]))
    }
  }, [name, key])

  if (!book) return <h1>Loading...</h1>

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
        />
        <div className="flex justify-center gap-6 flex-wrap self-center sm:justify-normal sm:self-start">
          <ReadButton />
          <ReadingButton />
          <WantsToReadButton />
        </div>
        <Rating />
      </section>
    </section>
  )
}

export default BookPage;