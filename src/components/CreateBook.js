import { useContext, useState } from "react";
import BooksContext from "../context/books";

function CreateBook () {

    // defining a title state variable 
    const [title, setTitle] = useState('');

    // Accessing data from Context
    const { createBook } = useContext(BooksContext);

    // Here handling the form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    }

    // handling the change when the book title changes
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    return (
        <div className="book-create">
            <h3> Add a Book </h3>
            <form onSubmit = { handleSubmit }>
                <label> Book Title </label>
                <input className="input" value = {title} onChange = { handleTitleChange } />
                <button className="button"> Create Book </button>
            </form>
        </div>
    )
}

export default CreateBook;