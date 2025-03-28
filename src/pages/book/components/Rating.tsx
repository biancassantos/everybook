import { useState } from "react";
import useBooksContext from "../../../hooks/useBooksContext";
import useDebounce from "../../../hooks/useDebounce";
import { updateBook } from "../../../services/firebase";
import { bookExists } from "../../../utils/helpers";
import type { UserBook } from "../../../@types";

function Rating({ bookKey }: {bookKey: string}) {
  const [rating, setRating] = useState(0);

  const books = useBooksContext();
  const debouncer = useDebounce(() => updateRating(), 1000);

  const book = bookExists(books?.allBooks as UserBook[], bookKey);
  const id = book?.id ? book.id : undefined;

  const updateRating = () => {
    if (book && id)
      updateBook(id , {...book, rating: rating});
  }

  const handleChange = (value: number) => {
    setRating(value);
    debouncer();
  }

  if (!book) return <p>Loading...</p>

  return (
    <section className="flex flex-col gap-3 justify-self-start self-center sm:self-start">
      <p className="text-xl self-center sm:self-start">
        My rating
      </p>
      <div className="flex items-center gap-3">
        <input 
        type="range" 
        name="rate" 
        id="rate" 
        min={0} 
        max={5} 
        step={0.5}
        defaultValue={!book?.rating ? rating : book?.rating}
        onChange={e => handleChange(Number(e.target.value))}
        className="accent-primary"
        />
        <p className="font-semibold text-xl">
          {!book?.rating ? rating : book?.rating}
        </p>
      </div>
    </section>
  )
}

export default Rating;