import type { BookProps } from "../../../@types/types";

function IndividualBook({ coverUrl, bookTitle }: BookProps) {
  return (
    <img 
    src={coverUrl} 
    alt={`${bookTitle}'s book cover`}
    className="w-[65%] shadow-book mx-auto sm:w-[70%] lg:w-[55%]"
    />
  )
}

export default IndividualBook;