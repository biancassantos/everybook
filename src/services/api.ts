import axios from "axios";
import type { Book } from "../@types";

const getBooks = async (bookName: string): Promise<Book[]> => {
  const request = await axios.get(`https://openlibrary.org/search.json?q=${bookName}&limit=12`);
  return request.data.docs;
}

const getBook = async (bookName: string, key: string): Promise<Book> => {
  const request = await axios.get(`https://openlibrary.org/search.json?q=${bookName}/works/${key}`);
  return request.data.docs[0];
}

export default { getBooks, getBook }