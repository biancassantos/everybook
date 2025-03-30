import { createContext, useState, useEffect } from "react";
import { auth } from "../configs/firebase-config";
import { getUserFirstName } from "../utils/helpers";
import { NodeChildrenProps } from "../@types";

export const UserContext = createContext<ContextValue | null>(null);

type User = {
  displayName: string | null,
  email: string | null,
  uid: string
}

type ContextValue = {
  user: User | null,
  isAuthPending: boolean,
  isGoogleUser: boolean | undefined,
  isEmailUser: boolean | undefined
}

export function UserContextProvider({ children }: NodeChildrenProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthPending, setIsAuthPending] = useState(true);

  /* Checks the auth provider */
  const isGoogleUser = auth.currentUser?.providerData.some(provider => provider.providerId === "google.com");
  const isEmailUser = auth.currentUser?.providerData.some(provider => provider.providerId === "password");

  useEffect(() => { /* Gets the user data every time the auth state changes */
    const unsubscribe = auth.onAuthStateChanged(data => {
      if (data) {
        const userData: User = {
          displayName: getUserFirstName(data.displayName),
          email: data.email,
          uid: data.uid
        }
        setUser(userData);
      } else {
        setUser(null); /* No user logged in */
      }
      
      setIsAuthPending(false);
    })

    return () => unsubscribe();
  }, [])

  const value: ContextValue = { user, isAuthPending, isGoogleUser, isEmailUser };

  return <UserContext.Provider value={value}>
    { children }
  </UserContext.Provider>
}