
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import booksData from './data/books';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import Issued from './components/Issued';
import NotFound from './components/NotFound';

function App() {
  const [books, setBooks] = useState(booksData);

  const issueBook = (id) => {
    const updated = books.map((book) => {
      if (book.id === id && !book.isIssued && book.availableCopies > 0) {
        return {
          ...book,
          isIssued: true,
          availableCopies: book.availableCopies - 1
        };
      }

      return book;
    });

    setBooks(updated);
  };

  const returnBook = (id) => {
    const updated = books.map((book) => {
      if (book.id === id && book.isIssued) {
        return {
          ...book,
          isIssued: false,
          availableCopies: book.availableCopies + 1
        };
      }

      return book;
    });

    setBooks(updated);
  };

  return (
    <BrowserRouter>
      <div className="app-container">

        <Navbar books={books} />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Home books={books} />}
            />

            <Route
              path="/books"
              element={
                <Books
                  books={books}
                  issueBook={issueBook}
                  returnBook={returnBook}
                />
              }
            />

            <Route
              path="/books/:id"
              element={
                <BookDetails
                  books={books}
                  issueBook={issueBook}
                  returnBook={returnBook}
                />
              }
            />

            <Route
              path="/issued"
              element={
                <Issued
                  books={books}
                  issueBook={issueBook}
                  returnBook={returnBook}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
