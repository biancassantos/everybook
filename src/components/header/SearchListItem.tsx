import { Link } from "react-router";

type SearchListItemProps = {
  coverUrl: string,
  bookTitle: string,
  author: string
}

function SearchListItem({ coverUrl, bookTitle, author }: SearchListItemProps) {
  return (
    <li className="p-4 not-last:border-b border-b-primary">
      <Link 
      to=""
      className="flex gap-3 text-primarydark"
      >
        <img 
        src={coverUrl} 
        alt={`${bookTitle}'s book cover`}
        className="max-w-[60px]"
        />
        <section>
          <h3 className="font-semibold">
            {bookTitle}
          </h3>
          <p className="text-sm">
            {author}
          </p>
        </section>
      </Link>
    </li>
  )
}

export default SearchListItem;