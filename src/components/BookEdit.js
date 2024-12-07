import { useState } from "react";

function BookEdit ({ book, onSubmit }) {

    // defining an state for edit input
    const [editTitle, setEditTitle] = useState(book.title);

    // handling Edit Click
    const handleEditClick = (event) => {
        setEditTitle(event.target.value);
    }

    // handling edit submit form
    const handleSubmitEdit = (event) => {
        event.preventDefault();

        onSubmit(book.id, editTitle);
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