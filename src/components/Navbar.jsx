
import { Link } from 'react-router';

function Navbar({ books }) {
  const issuedCount = books.filter((book) => book.isIssued).length;

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="logo">
          BookShelf
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/books" className="nav-link">Books</Link>
          <Link to="/issued" className="nav-link">
            Issued ({issuedCount})
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
