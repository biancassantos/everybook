import { Link } from "react-router";
import RemoveBookButton from "./RemoveBookButton";
import type { BookProps } from "../@types/types";

function BookListItem({ coverUrl, bookTitle, author }: BookProps) {
  return (
    <li className="flex justify-between text-primary py-6 px-3 border-b border-b-primary xs:py-8 xs:px-5 sm:py-10 sm:px-8">
      <div className="flex gap-3 xs:gap-6 sm:gap-8">
        <Link to="">
          <img 
          src={coverUrl} 
          alt={`${bookTitle}'s book cover`}
          className="max-w-[65px] xs:max-w-[80px] sm:max-w-[100px]"
          />
        </Link>
        
        <section>
          <h2 className="text-lg font-semibold xs:text-xl">
            {bookTitle}
          </h2>
          <p className="text-base xs:text-lg">
            {author}
          </p>
        </section>
      </div>

      <RemoveBookButton />
    </li>
  )
}

export default BookListItem;