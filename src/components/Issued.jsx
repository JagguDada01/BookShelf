import BookCard from './BookCard';

function Issued({ books, issueBook, returnBook }) {
  const issuedBooks = books.filter((book) => book.isIssued);

  return (
    <div className="issued-container">

      <h1>Issued Books</h1>

      <p className="intro-text">
        Books currently issued from the library.
      </p>

      {issuedBooks.length === 0 ? (
        <p className="empty-message">
          No books issued yet.
        </p>
      ) : (
        <div className="book-cards-grid">
          {issuedBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              issueBook={issueBook}
              returnBook={returnBook}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Issued;
