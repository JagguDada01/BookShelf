
import { Link } from 'react-router';

function BookCard({ book, issueBook, returnBook }) {
  const isAvailable = book.availableCopies > 0;

  return (
    <div className="book-card">

      <div>
        <h3>{book.title}</h3>

        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Available Copies: {book.availableCopies}</p>

        <span className={isAvailable ? 'available-tag' : 'unavailable-tag'}>
          {isAvailable ? 'Available' : 'Not Available'}
        </span>
      </div>

      <div className="card-actions">

        <Link
          to={`/books/${book.id}`}
          className="view-details-link"
        >
          View Details
        </Link>

        {book.isIssued ? (
          <button
            className="btn-action btn-return"
            onClick={() => returnBook(book.id)}
          >
            Return
          </button>
        ) : isAvailable ? (
          <button
            className="btn-action"
            onClick={() => issueBook(book.id)}
          >
            Issue
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

export default BookCard;
