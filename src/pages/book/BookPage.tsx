import IndividualBook from "./components/IndividualBook";
import BookInfo from "./components/BookInfo";
import Rating from "./components/Rating";
import ReadButton from "./components/ReadButton";
import ReadingButton from "./components/ReadingButton";
import WantsToReadButton from "./components/WantsToReadButton";

function BookPage() {
  return (
    <section className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:items-start sm:gap-8">
      <section className="w-full sm:w-1/2">
        <IndividualBook coverUrl="" bookTitle="" />
      </section>
      
      <section className="flex flex-col gap-20 text-primarydark w-full sm:w-1/2">
        <BookInfo bookTitle="Grimm's Lost Princess" author="Autor" year="1920" />
        <div className="flex justify-center gap-6 flex-wrap self-center sm:justify-normal sm:self-start">
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