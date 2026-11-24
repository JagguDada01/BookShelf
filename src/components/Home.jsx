
import { Link } from 'react-router';

function Home({ books }) {
  const totalBooks = books.length;

  const issuedBooks = books.filter((book) => book.isIssued);

  const unavailableBooks = books.filter(
    (book) => book.availableCopies === 0
  );

  return (
    <div className="home-container">

      <div className="header-section">
        <h1>Library Book Manager</h1>
        <p className="intro-text">
          Welcome to BookShelf. Manage your books, issue books
          and keep track of your library.
        </p>
      </div>

      <div className="content-grid">

        <div className="card">
          <h3>Library Overview</h3>
          <p>Total Books: {totalBooks}</p>
          <p>Issued Books: {issuedBooks.length}</p>
          <p>Not Available: {unavailableBooks.length}</p>
        </div>

        <div className="card">
          <h3>About the Library</h3>
          <p>Explore books from different genres.</p>
          <p>Issue available books and return them when finished.</p>
          <p>Check your currently issued books anytime.</p>
        </div>

      </div>

      <hr />

      <div className="action-buttons">
        <Link to="/books" className="btn btn-primary">
          Browse Books
        </Link>

        <Link to="/issued" className="btn btn-secondary">
          View Issued Books
        </Link>
      </div>

    </div>
  );
}

export default Home;
