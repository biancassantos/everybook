import { auth, db, googleProvider } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail, updateProfile, EmailAuthProvider, reauthenticateWithCredential, updatePassword, GoogleAuthProvider, reauthenticateWithPopup, deleteUser } from "firebase/auth";
import { addDoc, updateDoc, doc } from "firebase/firestore";
import type { BooksCollection, UserBook } from "../@types";

const user = auth.currentUser;
const userEmail = user?.email as string;

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
  if (user) {
    await updateProfile(user, {displayName: newDisplayName});
  }
}

export const changeUserPassword = async (password: string, newPassword: string) => {
  if (user) {
    const credential = EmailAuthProvider.credential(userEmail, password);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
  }
}

export const deleteUserAccount = async (isGoogleUser: boolean, isEmailUser: boolean, password?: string) => {
  if (user) {
    if (isGoogleUser) {
      const googleProvider = new GoogleAuthProvider();
      await reauthenticateWithPopup(user, googleProvider);
      await deleteUser(user);

    } else if (isEmailUser) {
      const credential = EmailAuthProvider.credential(userEmail, password as string);
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
    }
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