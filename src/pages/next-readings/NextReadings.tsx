import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import BookListLayout from "../../layouts/BookListLayout"
import BookListItem from "../../components/BookListItem"
import EmptyMessage from "../../components/EmptyMessage";

function NextReadings() {
  const books = useContext(BooksContext);
  const nextBooks = books?.allBooks.filter(book => book.wants_to_read === true);

  if (nextBooks && nextBooks?.length == 0) return <EmptyMessage msg="No books to read next." />

  return (
    <BookListLayout>
      {nextBooks?.map(book => {
        return <BookListItem 
        key={book.key}
        bookTitle={book.title}
        author={book.author_name}
        coverUrl={book.coverUrl}
        bookUrl={book.book_url}
        />
      })}
    </BookListLayout>
  )
}

export default NextReadings;