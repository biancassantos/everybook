import IndividualBook from "./components/IndividualBook";
import BookInfo from "./components/BookInfo";
import Rating from "./components/Rating";
import ReadButton from "./components/ReadButton";
import ReadingButton from "./components/ReadingButton";
import WantsToReadButton from "./components/WantsToReadButton";

function BookPage() {
  return (
    <section className="flex justify-between gap-8">
      <section className="w-1/2">
        <IndividualBook coverUrl="" bookTitle="" />
      </section>
      
      <section className="flex flex-col gap-20 text-primarydark w-1/2">
        <BookInfo />
        <div className="flex gap-6 flex-wrap">
          <ReadButton />
          <ReadingButton />
          <WantsToReadButton />
        </div>
        <Rating />
      </section>
    </section>
  )
}

export default BookPage;