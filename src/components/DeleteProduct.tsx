"use client";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../pages/api/firebase";

const DeleteProduct = ({ id }) => {
  const handleDelete = async () => {
    try {
      const productRef = doc(db, "proizvodi", id);
      await deleteDoc(productRef);
      alert("Product deleted!");
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteProduct;
