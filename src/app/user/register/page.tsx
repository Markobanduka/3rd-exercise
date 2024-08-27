"use client";

import { useAuth } from "@/app/context/authContext";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { User } from "firebase/auth";

const RegisterPage = () => {
  const { user }: User | any = useAuth();
  console.log(user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-red-500 p-3">
        <input
          type="email"
          placeholder="Email"
          className="mx-1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn outline-double" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterPage;
