import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {

    // Creating books state variable
    const [books, setBooks] = useState([]);

    // fetching books from server api
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    // handling create book function
    const createBook = async (title) => {
        // this is a connection to server using axios
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const newCreatedBooks = [...books, response.data];
        setBooks(newCreatedBooks);
    }
   
    // handling delete book function
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const deletedBook = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(deletedBook);
    }

    // handling delete book function
    const editBookById = async (id, newTitle) => {

        // updating our object array using axios
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });
        const editedBook = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data };
            }
            return book;
        });
        setBooks(editedBook);
    }

    // creating a object to be shared across the app
    const contextValueToShare = {
        books,
        createBook,
        editBookById,
        deleteBookById,
        fetchBooks,
    }

    return(
        <BooksContext.Provider value = { contextValueToShare }>
            { children }
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;