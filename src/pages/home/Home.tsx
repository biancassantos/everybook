import useBooksContext from "../../hooks/useBooksContext";
import BookshelfLayout from "../../layouts/BookshelfLayout";
import ShelfBook from "../../components/ShelfBook";
import EmptyMessage from "../../components/EmptyMessage";
import Spinner from "../../components/Spinner";

function Home() {
  const books = useBooksContext();
  const readBooks = books?.allBooks.filter(book => book.read === true);

  if (readBooks && readBooks?.length == 0) return <EmptyMessage msg="No read books yet." />;

  if (!books) return <Spinner />;

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