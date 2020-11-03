import axios from "axios";

const url = "https://example-data.draftbit.com";

export const BooksData = async books => {
  let booksUrl = null;
  if (books) {
    booksUrl = `${url}/books`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(booksUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};
