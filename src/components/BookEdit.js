import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit ({ book, onSubmit }) {

    // defining an state for edit input
    const [editTitle, setEditTitle] = useState(book.title);

    // Accessing data from context
    const { editBookById } = useContext(BooksContext);

    // handling Edit Click
    const handleEditClick = (event) => {
        setEditTitle(event.target.value);
    }

    // handling edit submit form
    const handleSubmitEdit = (event) => {
        event.preventDefault();

        onSubmit();
        editBookById(book.id, editTitle);
    }
    return (
        <form className="book-edit" onSubmit = { handleSubmitEdit }>
            <label> Title </label>
            <input className="input" value={ editTitle } onChange = { handleEditClick } />
            <button className="button is-primary"> Save </button>
        </form>
    )
}

export default BookEdit;