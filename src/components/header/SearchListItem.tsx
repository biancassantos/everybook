import { Link } from "react-router";
import { formatToUrlParam } from "../../utils/helpers";
import type { BookProps } from "../../@types";

type SearchListItemProps = BookProps & {
  clearSearch: () => void
}

function SearchListItem({ coverUrl, bookTitle, author, bookKey, clearSearch }: SearchListItemProps) {
  const formattedTitle = formatToUrlParam(bookTitle);
  const formattedKey = (bookKey as string).split("/")[2]; /* Gets only the key part of the string '/works/:key' */

  return (
    <li className="p-4 not-last:border-b border-b-primary">
      <Link 
      to={`/book/${formattedTitle}/${formattedKey}`}
      onClick={clearSearch}
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