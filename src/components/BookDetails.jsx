
import { useParams, Link } from 'react-router';

function BookDetails({ books, issueBook, returnBook }) {
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="details-container">
        <h2>Book Not Found</h2>
        <Link to="/books" className="btn-back">
          Back to Books
        </Link>
      </div>
    );
  }

  const isAvailable = book.availableCopies > 0;

  return (
    <div className="details-container">

      <Link to="/books" className="btn-back">
        Back to Books
      </Link>

      <div className="details-card">

        <h1>{book.title}</h1>

        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Publication Year: {book.year}</p>
        <p>Pages: {book.pages}</p>
        <p>Total Copies: {book.totalCopies}</p>
        <p>Available Copies: {book.availableCopies}</p>

        <p>
          Status: {isAvailable ? 'Available' : 'Not Available'}
        </p>

        {book.isIssued ? (
          <button
            className="btn-action btn-return"
            onClick={() => returnBook(book.id)}
          >
            Return Book
          </button>
        ) : isAvailable ? (
          <button
            className="btn-action"
            onClick={() => issueBook(book.id)}
          >
            Issue Book
          </button>
        ) : (
          <span className="not-available-tag">
            Not Available
          </span>
        )}

      </div>
    </div>
  );
}

export default BookDetails;
