import { auth, db, googleProvider } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail, updateProfile, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { addDoc, updateDoc, doc } from "firebase/firestore";
import type { BooksCollection, UserBook } from "../@types";

export const signUpWithEmail = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithEmail = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
}

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
}

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
}

export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
}

export const changeDisplayName = async (newDisplayName: string) => {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {displayName: newDisplayName});
  }
}

export const changeUserPassword = async (password: string, newPassword: string) => {
  if (auth.currentUser) {
    const email = auth.currentUser.email as string;
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(auth.currentUser, credential);
    await updatePassword(auth.currentUser, newPassword);
  }
}

export const addBook = async (colRef: BooksCollection, book: UserBook) => {
  try {
    await addDoc(colRef, book);
  } catch (error) {
    console.error(error);
  }
}

export const updateBook = async (id: string, book: UserBook) => {
  try {
    const bookDoc = doc(db, "books", id);
    await updateDoc(bookDoc, book);
  } catch (error) {
    console.error(error);
  }
}