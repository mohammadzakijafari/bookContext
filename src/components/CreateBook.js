import { useState } from "react";

function CreateBook ({ onCreate }) {

    // defining a title state variable 
    const [title, setTitle] = useState('');

    // Here handling the form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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