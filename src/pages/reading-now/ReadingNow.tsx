import useBooksContext from "../../hooks/useBooksContext";
import BookListLayout from "../../layouts/BookListLayout";
import BookListItem from "../../components/BookListItem";
import EmptyMessage from "../../components/EmptyMessage";

function ReadingNow() {
  const books = useBooksContext();
  const readingBooks = books?.allBooks.filter(book => book.reading === true);

  if (readingBooks && readingBooks?.length == 0) return <EmptyMessage msg="Not reading any books." />;

  return (
    <BookListLayout>
      {readingBooks?.map(book => {
        return <BookListItem 
        key={book.key}
        bookTitle={book.title}
        author={book.author_name}
        coverUrl={book.coverUrl}
        bookUrl={book.book_url}
        bookKey={book.key}
        />
      })}
    </BookListLayout>
  )
}

export default ReadingNow;