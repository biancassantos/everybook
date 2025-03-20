import axios from "axios";

async function getBooks(bookName: string) {
  try {
    const request = await axios.get(`https://openlibrary.org/search.json?q=${bookName}&limit=12`);
    return request.data.docs;

  } catch (error) {
    console.error(`Error fetching books: ${error}`)
  }
}

export default { getBooks }