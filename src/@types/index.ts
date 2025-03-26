import { CollectionReference, DocumentData } from "firebase/firestore";

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
  bookKey? : string,
  bookUrl?: string
}

export type NodeChildrenProps = {
  children: React.ReactNode
}

export type UserBook = Book & {
  book_url: string,
  uid: string | undefined,
  id?: string,
  read: boolean,
  reading: boolean,
  wants_to_read: boolean,
  is_favorite: boolean,
  rating?: number
}

export type BooksCollection = CollectionReference<DocumentData, DocumentData>;