const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory books data store
let books = [
  {
    id: 1,
    title: "A Little Life",
    author: "Hanya Yanagihara",
    genre: "Novel",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
  },
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET a specific book by ID
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((t) => t.id === id);
  if (!book) return res.status(404).json({ error: "Book not found." });
  res.json(book);
});

// POST Add a new book
app.post("/books", (req, res) => {
  const { title, author, genre } = req.body;
  if (!title || !author || !genre)
    return res
      .status(400)
      .json({ error: "Title, author, and genre are required!" });

  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update an existing book's details
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((t) => t.id === id);
  if (!book) return res.status(404).json({ error: "Book not found." });

  const { title, author, genre } = req.body;
  if (!title || !author || !genre)
    return res
      .status(400)
      .json({ error: "Title, author, and genre are required!" });

  book.title = title;
  book.author = author;
  book.genre = genre;
  res.json(book);
});

// DELETE a book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Book not found." });

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook);
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
