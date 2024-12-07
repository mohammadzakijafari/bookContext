import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow ({ book, onDelete, onEdit }) {

    // creating state change variable
    const [showEdit, setShowEdit] = useState(false);

    // Handling delete Click
    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    // handling onSubmit and wrapping the two function inside one
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    }
    // toggling the content of book show
    let content = <h3> {book.title} </h3>
    if (showEdit) {
        content = <BookEdit book = { book } onSubmit = { handleSubmit } />
    }

    // Handling Edit click
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    return (
        <div className="book-show">
            <img alt="books" src = {`https://picsum.photos/seed/${book.id}/300/200`} />
            
            <div className=""> { content } </div>
            <div className="actions">
                <button className="edit" onClick = { handleEditClick }> Edit </button>
                <button className="delete" onClick = { handleDeleteClick }> Delete </button>
            </div>
        </div>
    )
}

export default BookShow;