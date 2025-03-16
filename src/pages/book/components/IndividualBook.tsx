type IndividualBookProps = {
  coverUrl: string,
  bookTitle: string
}

function IndividualBook({ coverUrl, bookTitle }: IndividualBookProps) {
  return (
    <img 
    src={coverUrl} 
    alt={`${bookTitle}'s book cover`}
    className="w-[65%] shadow-book mx-auto sm:w-[70%] lg:w-[55%]"
    />
  )
}

export default IndividualBook;