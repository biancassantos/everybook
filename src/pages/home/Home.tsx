import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import BookshelfLayout from "../../layouts/BookshelfLayout";
import ShelfBook from "../../components/ShelfBook";

function Home() {
  const books = useContext(BooksContext);
  const readBooks = books?.allBooks.filter(book => book.read === true);

  if (!readBooks) return <p>No read books yet.</p>

  return (
    <BookshelfLayout>
      {readBooks?.map(book => {
        return <ShelfBook 
        key={book.key}
        bookTitle={book.title}
        author={book.author_name}
        bookUrl={book.book_url}
        bookKey={book.key}
        coverUrl={book.coverUrl}
        year={book.first_publish_year}
        />
      })}
    </BookshelfLayout>
  )
}

export default Home;