
import { useState } from 'react';
import BookCard from './BookCard';

function Books({ books, issueBook, returnBook }) {
  const [genre, setGenre] = useState('All');
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesGenre = genre === 'All' || book.genre === genre;

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  return (
    <div>
      <div className="header-section">
        <h1>All Books</h1>
        <p className="intro-text">
          Browse and find your favourite books.
        </p>
      </div>

      <div className="filter-wrapper">
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          placeholder="Search title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Biography">Biography</option>
          <option value="Fiction">Fiction</option>
          <option value="Technology">Technology</option>
          <option value="Self-Help">Self-Help</option>
        </select>
      </div>

      <p className="result-text">
        Showing {filteredBooks.length} books
      </p>

      <div className="book-cards-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              issueBook={issueBook}
              returnBook={returnBook}
            />
          ))
        ) : (
          <p className="empty-message">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default Books;
