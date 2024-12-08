import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";


function BookList () {

    // Accessing context data from context
    const { books } = useBooksContext();

    // mapping through list of books and passing it to book show component
    const renderedBooks = books.map((book) => {
        return <BookShow book = { book } key = { book.id } />
    });

    return (
        <div className="book-list">
             { renderedBooks } 
        </div>
    );
}

export default BookList;