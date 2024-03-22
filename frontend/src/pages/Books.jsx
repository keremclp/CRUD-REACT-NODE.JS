import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8800/books");
        console.log(response);
      } catch (error) {
        console.log(error.message)
      }
    };
    fetchAllBooks();
  }, []);
  return <div>Books</div>;
}

export default Books;