import { useContext, useEffect } from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import BooksContext from "./context/books";


function App () {

    // Accessing data from context component
    const { fetchBooks } = useContext(BooksContext);
    // using useEffect for rendering purpose
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="app">
            <h1> Reading List </h1>
            <BookList />
            <CreateBook />
        </div>
    )
}

export default App;