import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "busiwapp42",
  database: "crud-react-node.js",
});

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
  console.log("Hello this is the backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  let book = req.body;

  console.log(book);

  let query = `INSERT INTO books (title , description, cover ) VALUES (?)`;
  const values = [book.title, book.description, book.cover];
  db.query(query, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json("Book created  successfully!");
  });
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
