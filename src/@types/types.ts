export type Book = {
  title: string,
  author_name: string,
  first_publish_year: string,
  coverUrl: string,
  cover_edition_key: string,
  key: string
}

export type BookProps = {
  coverUrl?: string,
  bookTitle: string,
  author?: string,
  year?: string,
  bookKey? : string
}

export type LayoutProps = {
  children: React.ReactNode
}