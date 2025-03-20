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
      className="flex items-start gap-3 text-primarydark"
      >
        <img 
        src={coverUrl} 
        alt={`${bookTitle}'s book cover`}
        className="w-full max-w-[50px]"
        />
        <section>
          <h3 className="text-sm font-semibold xs:text-base">
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