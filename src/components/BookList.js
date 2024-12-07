import BookShow from "./BookShow";

function BookList ({ books, onDelete, onEdit }) {

    // mapping through list of books and passing it to book show component
    const renderedBooks = books.map((book) => {
        return <BookShow book = { book } key = { book.id } onDelete = { onDelete } onEdit = { onEdit } />
    });

    return (
        <div className="book-list"> { renderedBooks } </div>
    )
}

export default BookList;