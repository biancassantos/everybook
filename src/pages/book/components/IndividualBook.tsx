type IndividualBookProps = {
  coverUrl: string,
  bookTitle: string
}

function IndividualBook({ coverUrl, bookTitle }: IndividualBookProps) {
  return (
    <img 
    src={coverUrl} 
    alt={`${bookTitle}'s book cover`}
    className="w-[55%] shadow-book mx-auto"
    />
  )
}

export default IndividualBook;