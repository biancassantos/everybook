import FavoriteButton from "./FavoriteButton";

type BookInfoProps = {
  bookTitle: string,
  author: string,
  year: string
}

function BookInfo({ bookTitle, author, year }: BookInfoProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex justify-between items-center gap-4 w-fit">
        <h1 className="font-playfair text-4xl">
          {bookTitle}
        </h1>
        <FavoriteButton />
      </div>
      <p className="text-2xl">{author}</p>
      <p className="text-2xl">{year}</p>
    </section>
  )
}

export default BookInfo;