# 📚 BookShelf - Library Management System

A modern, responsive web application for managing library books, tracking inventory, and handling book issuance and returns. Built with **React 19**, **React Router**, and **Vite**.

---

## 🚀 Features

- **📊 Library Overview (Dashboard / Home)**:
  - Quick statistics: total books, currently issued books, and out-of-stock titles.
  - Quick navigation shortcuts to book browsing and issued lists.

- **🔍 Search & Filter Books**:
  - Live search by title or author name.
  - Genre filter (Fiction, Biography, Technology, Self-Help, and All).
  - Real-time result counter and responsive card layout.

- **📖 Book Details View (`/books/:id`)**:
  - Detailed metadata including author, publication year, genre, total pages, and copy availability.
  - Direct issue/return actions reflecting live stock counts.

- **📦 Issued Books Management (`/issued`)**:
  - Dedicated page tracking all currently checked-out books.
  - Real-time badge counter on the navigation bar.
  - Instant one-click book return functionality.

- **⚡ Dynamic Stock & State Management**:
  - Automatic tracking of available vs. total copies.
  - Disables issuance when available copies reach 0.
  - Instant state synchronization across all views.

- **🚫 404 Error Handling**:
  - User-friendly fallback route for non-existent pages with direct return to home.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Routing:** [React Router](https://reactrouter.com/) (v8)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** Custom Vanilla CSS (Modern CSS variables, flexbox, and grid)
- **Linting:** [ESLint](https://eslint.org/)

---

## 📂 Project Structure

```text
assignment-7/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components & pages
│   │   ├── BookCard.jsx    # Individual book display card
│   │   ├── BookDetails.jsx # Detailed single-book view (/books/:id)
│   │   ├── Books.jsx       # Books listing, filter & search page (/books)
│   │   ├── Home.jsx        # Landing page with stats & overview (/)
│   │   ├── Issued.jsx      # Currently issued books list (/issued)
│   │   ├── Navbar.jsx      # Top navigation with live issued badge
│   │   └── NotFound.jsx    # 404 page handler
│   ├── data/
│   │   └── books.js        # Initial library book dataset
│   ├── App.css             # Component-level styles
│   ├── App.jsx             # Main application layout & global state
│   ├── index.css           # Global typography, reset & theme styles
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry template
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite configuration
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

### Installation

1. Clone or navigate to the project root directory:
   ```bash
   cd assignment-7
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Bundles and optimizes the app for production in the `dist/` directory. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🗺️ Routes Summary

| Path | Component | Purpose |
| :--- | :--- | :--- |
| `/` | `Home` | Overview metrics and intro cards |
| `/books` | `Books` | Full catalog with search and genre filters |
| `/books/:id` | `BookDetails` | Detailed view for an individual book |
| `/issued` | `Issued` | List of currently issued books |
| `*` | `NotFound` | 404 catch-all page |
# BookShelf
