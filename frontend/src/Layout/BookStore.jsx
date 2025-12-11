import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { NavLink } from "react-router-dom";

export default function BookTable() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const res = await Api.get("/api/book");
    setBooks(res.data.book);
  }

  async function trash(id) {
    await Api.delete(`/api/book/${id}`);
    getBooks();
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div
      className="container my-5 p-4 rounded-3"
      style={{ background: "#f8f9fa", border: "1px solid #e0e0e0" }}
    >
      <h2
        className="text-center mb-4"
        style={{ color: "#333", fontWeight: 600 }}
      >
        Books Store
      </h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead style={{ background: "#e9ecef" }}>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books &&
              books.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>₹{book.price}</td>
                  <td>{book.category}</td>
                  <td>{book.stock}</td>

                  <td
                    className="px-2"
                    style={{
                      maxWidth: "200px",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {book.description}
                  </td>

                  <td className="d-flex justify-content-center">
                    <button
                      onClick={() => trash(book._id)}
                      className="btn btn-danger btn-sm px-3"
                    >
                      Delete
                    </button>

                    <NavLink
                      to={`/api/book/${book._id}`}
                      className="btn btn-warning btn-sm px-3 ms-2"
                    >
                      Update
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
