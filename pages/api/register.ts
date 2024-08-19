import type { NextApiRequest, NextApiResponse } from "next";
import { addProduct } from "@/services/productService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { title, price, description } = req.body;

      const result = await addProduct({ title, price, description });

      res.status(200).json({
        message: "Product added successfully",
        product: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error adding product",
        error: (error as Error).message,
      });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
