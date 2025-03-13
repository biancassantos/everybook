import { Link } from "react-router";
import RemoveBookButton from "./RemoveBookButton";

type BookListItemProps = {
  coverUrl: string,
  bookTitle: string,
  author: string
}

function BookListItem({ coverUrl, bookTitle, author }: BookListItemProps) {
  return (
    <li className="flex justify-between text-primary py-10 px-8 border-b border-b-primary">
      <div className="flex gap-8">
        <Link to="">
          <img 
          src={coverUrl} 
          alt={`${bookTitle}'s book cover`}
          className="max-w-[100px]"
          />
        </Link>
        
        <section>
          <h2 className="text-xl font-semibold">
            {bookTitle}
          </h2>
          <p className="text-lg">
            {author}
          </p>
        </section>
      </div>

      <RemoveBookButton />
    </li>
  )
}

export default BookListItem;