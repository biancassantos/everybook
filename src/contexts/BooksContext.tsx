import { createContext, useState, useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import { db } from "../services/firebase-config";
import { collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import type { NodeChildrenProps, BooksCollection, UserBook } from "../@types";

type ContextValue = {
  booksCollectionRef: BooksCollection,
  allBooks: UserBook[]
}

export const BooksContext = createContext<ContextValue | null>(null);

export function BooksContextProvider({ children }: NodeChildrenProps) {
  const [allBooks, setAllBooks] = useState<UserBook[] | []>([]);
  const booksCollectionRef = collection(db, "books");

  const currentUser = useUserContext();
  const uid = currentUser?.user?.uid;

  useEffect(() => {
    const unsubscribe = onSnapshot(booksCollectionRef, snapshot => {
      const list: unknown[] = [];

      snapshot.docs.forEach(doc => {
        if (doc.data().uid === uid) {
          list.push({...doc.data(), id: doc.id});
        }
      });

      setAllBooks(list as UserBook[]);
    })

    return () => unsubscribe();
  }, [booksCollectionRef, uid])

  const value: ContextValue = { booksCollectionRef, allBooks }

  return <BooksContext.Provider value={value}>
    {children}
  </BooksContext.Provider>
}