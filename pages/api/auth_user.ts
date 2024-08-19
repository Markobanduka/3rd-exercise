import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username, password } = req.body;

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    res
      .status(200)
      .json({ message: "Logged in successfully", token: data.token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging in", error: (error as Error).message });
    console.error(error);
  }
}
