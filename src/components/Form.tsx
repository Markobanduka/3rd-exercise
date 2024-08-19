// src/components/Form.tsx
"use client";
import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        description,
      }),
    });

    const data = await response.json();
    console.log("Product added:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product price"
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Product description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default Form;
