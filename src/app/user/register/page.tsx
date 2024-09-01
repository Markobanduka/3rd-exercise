"use client";

import { useAuth } from "@/app/context/authContext";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { User } from "firebase/auth";

const RegisterPage = () => {
  const { loggedIn }: User | any = useAuth();
  console.log(loggedIn);

  if (loggedIn) {
    window.location.href = "/";
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
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
