import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import BookListLayout from "../../layouts/BookListLayout";
import BookListItem from "../../components/BookListItem";

function ReadingNow() {
  const books = useContext(BooksContext);
  const readingBooks = books?.allBooks.filter(book => book.reading === true);

  if (!readingBooks) return <p>Not reading any books.</p>

  return (
    <BookListLayout>
      {readingBooks.map(book => {
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

export default ReadingNow;