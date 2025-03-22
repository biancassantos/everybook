import { createContext, useState, useEffect } from "react";
import { auth } from "../services/firebase-config";

export const UserContext = createContext<ContextValue | null>(null);

type UserContextProviderProps = {
  children: React.ReactNode
}

type User = {
  displayName: string | null,
  email: string | null,
  uid: string
}

type ContextValue = {
  user: User | null,
  isAuthPending: boolean
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthPending, setIsAuthPending] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(data => {
      if (data) {
        const userData: User = {
          displayName: data.displayName,
          email: data.email,
          uid: data.uid
        }
        setUser(userData);
        setIsAuthPending(false);
      } else {
        setUser(null);
      }
    })

    return () => unsubscribe();
  }, [])

  const value: ContextValue = { user, isAuthPending };

  return <UserContext.Provider value={value}>
    { children }
  </UserContext.Provider>
}