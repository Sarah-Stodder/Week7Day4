import { apiClientNoAuth, apiClientTokenAuth } from "./user.js";

const endpoint = "/book";

 const getBook = async (CancelToken) => {
    let error;
    let books;

    const response = await apiClientNoAuth(CancelToken).get(endpoint);
    if (response.ok) {
        books = response.data;
    } else {
        error = "Something went wrong";
    }
    return { books, error };
}

const apiBook = {
    getBook
}

export default apiBook;
