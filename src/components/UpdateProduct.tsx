"use client";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../pages/api/firebase";
import { useState } from "react";

const UpdateProduct = ({ id, currentIme, currentCena }) => {
  const [ime, setIme] = useState(currentIme);
  const [cena, setCena] = useState(currentCena);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const productRef = doc(db, "proizvodi", id);
      await updateDoc(productRef, {
        ime,
        cena: parseFloat(cena),
      });
      alert("Product updated!");
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={ime}
        onChange={(e) => setIme(e.target.value)}
        required
      />
      <input
        type="number"
        value={cena}
        onChange={(e) => setCena(e.target.value)}
        required
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
