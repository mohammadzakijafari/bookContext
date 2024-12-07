import { useEffect, useState } from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import axios from "axios";

function App () {

    // Creating books state variable
    const [books, setBooks] = useState([]);

    // fetching books from server api
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    // using useEffect for rendering purpose
    useEffect(() => {
        fetchBooks();
    }, []);

    // handling create book function
    const createBook = async (title) => {
        // this is a connection to server using axios
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const newCreatedBooks = [...books, response.data];
        setBooks(newCreatedBooks);

        // ------------------------ this section was for working only with react without using server apis --------------------- 

        // const createddBooks = [
        //     ...books,
        //     {
        //         id: Math.round(Math.random() * 999),
        //         title
        //     }
        // ]
        // setBooks(createddBooks);
    }
   
    // handling delete book function
    const deleteBook = async (id) => {
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


        // ------------------------ this section was for working only with react without using server apis --------------------- 
        // const editedBook = books.map((book) => {
        //     if (book.id === id) {
        //         return {...book, title: newTitle};
        //     }
        //     return book;
        // });
        // setBooks(editedBook);
    }

    return (
        <div className="app">
            <h1> Reading List </h1>
            <BookList books = { books } onDelete = { deleteBook } onEdit = { editBookById } />
            <CreateBook onCreate = {createBook } />
        </div>
    )
}

export default App;