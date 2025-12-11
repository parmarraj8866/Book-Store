import React from "react";
import { useForm } from "react-hook-form";
import Api from "../Api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Form() {
  const { register, handleSubmit, reset } = useForm();

  const { id } = useParams();
  const redirect = useNavigate();

  async function singleBook() {
    const res = await Api.get(`/api/book/${id}`);
    reset(res.data.book);
    console.log(res);
  }

  async function add(data) {
    if (id) {
      await Api.put(`/api/book/${id}`, data);
      redirect("/");
    } else {
      await Api.post("/api/book", data);
      redirect("/");
    }

    reset({
      title: "",
      author: "",
      price: "",
      category: "",
      stock: "",
      coverImage: "",
      description: "",
    });
  }

  useEffect(() => {
    singleBook();
  }, [id]);

  return (
    <div className="container my-5 p-5 rounded-3 w-50"
      style={{ background: "#f8f9fa", border: "1px solid #e0e0e0" }}
    >
      <h2 className="mb-3 text-center" style={{ color: "#333", fontWeight: "600" }}>
        {
          id == null ? "Add Book " : "Update Book"
        }
      </h2>

      <form method="post" className="mt-2" onSubmit={handleSubmit(add)}>
        
        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#555" }}>
            Title
          </label>
          <input {...register("title")} type="text" className="form-control"
            placeholder="Enter book title" />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#555" }}>
            Author
          </label>
          <input {...register("author")} type="text" className="form-control"
            placeholder="Enter author name" />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#555" }}>
            Price
          </label>
          <input {...register("price")} type="number" className="form-control"
            placeholder="Enter price" />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#555" }}>
            Category
          </label>
          <input {...register("category")} type="text" className="form-control"
            placeholder="Enter category" />
        </div>



        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#555" }}>
            Stock
          </label>
          <input {...register("stock")} type="number" className="form-control"
            placeholder="Enter stock" />
        </div>


        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#555" }}>
            Description
          </label>
          <textarea {...register("description")} className="form-control"
          maxLength={"50"}
            placeholder="Enter description" rows={3}></textarea>
        </div>

        <div className="mt-4 d-flex justify-content-between">
          {id == null ? (
            <button type="submit" className="btn btn-success px-4" style={{ fontWeight: 500 }}>
              Submit
            </button>
          ) : (
            <button type="submit" className="btn btn-warning px-4" style={{ fontWeight: 500 }}>
              Update
            </button>
          )}
         
        </div>
      </form>
    </div>
  );
}
