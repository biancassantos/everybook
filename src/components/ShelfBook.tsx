import { Link } from "react-router";
import type { BookProps } from "../@types";

type ShelfBookProps = BookProps & {
  bookUrl: string
}

function ShelfBook({ coverUrl, bookTitle, bookUrl }: ShelfBookProps) {
  return (
    <section className="flex justify-center items-end border-b-16 border-primary">
      <Link to={bookUrl}>
        <img 
        src={coverUrl} 
        alt={`${bookTitle}'s cover`} 
        className="max-w-[100px] hover:shadow-book duration-300 sm:max-w-[120px]"
        />
      </Link>
    </section>
  )
}

export default ShelfBook;