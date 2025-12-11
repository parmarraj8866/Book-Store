import React from "react";
import Form from "./Layout/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import BookStore from "./Layout/BookStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";

export default function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route element={  <BookStore />} path="/"/>
          <Route element={ <Form />} path="/api/book/:id"/>
          <Route element={ <Form />} path="/add"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
