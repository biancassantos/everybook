import axios from "axios";
import type { Book } from "../@types";

async function getBooks(bookName: string): Promise<Book[]> {
  const request = await axios.get(`https://openlibrary.org/search.json?q=${bookName}&limit=12`);
  return request.data.docs;
}

async function getBook(bookName: string, key: string): Promise<Book> {
  const request = await axios.get(`https://openlibrary.org/search.json?q=${bookName}/works/${key}`);
  return request.data.docs[0];
}

export default { getBooks, getBook }