"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../pages/api/firebase";

const CreateProduct = () => {
  const [ime, setIme] = useState("");
  const [cena, setCena] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "proizvodi"), {
        ime,
        cena: parseFloat(cena),
      });
      setIme("");
      setCena("");
      alert("Product added!");
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={ime}
        onChange={(e) => setIme(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={cena}
        onChange={(e) => setCena(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default CreateProduct;
