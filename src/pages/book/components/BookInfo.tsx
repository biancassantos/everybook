import FavoriteButton from "./FavoriteButton";
import type { BookProps } from "../../../@types";

function BookInfo({ bookTitle, author, year }: BookProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex justify-between items-center gap-4 w-fit">
        <h1 className="font-playfair text-3xl xs:text-4xl">
          {bookTitle}
        </h1>
        <FavoriteButton />
      </div>
      <p className="text-xl xs:text-2xl">{author}</p>
      <p className="text-xl xs:text-2xl">{year}</p>
    </section>
  )
}

export default BookInfo;