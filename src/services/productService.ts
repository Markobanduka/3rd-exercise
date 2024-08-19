interface AddProductProps {
  title: string;
  price: number;
  description: string;
}

export const addProduct = async ({
  title,
  price,
  description,
}: AddProductProps) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}products/add`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          price,
          description,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add product to the external API");
    }

    const data = await response.json();
    console.log("Product added to external API:", data);
    return data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
