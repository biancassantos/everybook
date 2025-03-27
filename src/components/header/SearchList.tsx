import SearchListItem from "./SearchListItem";
import SearchingMessage from "../SearchingMessage";
import type { Book } from "../../@types";

type SearchListProps = {
  books: Book[],
  clearSearch: () => void
}

function SearchList({ books, clearSearch }: SearchListProps) {
  const booksPending = books.length == 0;

  return (
    <section className="absolute top-10.5 right-4 max-w-[210px] max-h-[300px] bg-latte shadow-lg overflow-y-scroll z-index-90 sm:max-w-[260px] sm:w-[260px]">
      {booksPending ? 
        <SearchingMessage /> :
        <ul>
          {books.map((book: Book) => {
            return <SearchListItem 
            key={book.cover_edition_key}
            bookTitle={book.title}
            author={book.author_name}
            coverUrl={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-S.jpg`}
            bookKey={book.key}
            clearSearch={clearSearch}
            />
          })}
        </ul>
      }
    </section>
  )
}

export default SearchList;