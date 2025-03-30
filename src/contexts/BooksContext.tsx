import { createContext, useState, useEffect, useMemo } from "react";
import useUserContext from "../hooks/useUserContext";
import { db } from "../configs/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { deleteBook } from "../services/firebase";
import type { NodeChildrenProps, BooksCollection, UserBook } from "../@types";

type ContextValue = {
  booksCollectionRef: BooksCollection,
  allBooks: UserBook[]
}

export const BooksContext = createContext<ContextValue | null>(null);

export function BooksContextProvider({ children }: NodeChildrenProps) {
  const [allBooks, setAllBooks] = useState<UserBook[] | []>([]); /* Books connected to the user account */
  const [allDbBooks, setAllDbBooks] = useState<UserBook[] | []>([]); /* All the books in the database */

  const booksCollectionRef = useMemo(() => collection(db, "books"), []);

  const currentUser = useUserContext();
  const uid = currentUser?.user?.uid;

  const cleanDb = () => { /* Deletes all the 'loose' books in the database */
    allDbBooks.forEach(book => {
      if (!book.read && !book.reading && !book.wants_to_read) {
        deleteBook(book.id as string);
      }
    })
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(booksCollectionRef, snapshot => {
      const userBooks: unknown[] = [];
      const dbBooks: unknown[] = [];

      snapshot.docs.forEach(doc => {
        if (doc.data().uid === uid) {
          userBooks.push({...doc.data(), id: doc.id});
        }

        dbBooks.push({...doc.data(), id: doc.id});
      });

      setAllBooks(userBooks as UserBook[]);
      setAllDbBooks(dbBooks as UserBook[]);
    })

    return () => unsubscribe();
  }, [booksCollectionRef, uid])

  cleanDb();
    
  const value: ContextValue = { booksCollectionRef, allBooks }

  return <BooksContext.Provider value={value}>
    {children}
  </BooksContext.Provider>
}