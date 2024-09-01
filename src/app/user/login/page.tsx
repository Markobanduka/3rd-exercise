"use client";

import { useAuth } from "@/app/context/authContext";
import { auth } from "@/app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";

const Login = () => {
  signInWithEmailAndPassword(auth, "banduka46@gmail.com", "123456");

  const { loggedIn } = useAuth();

  if (loggedIn) {
    window.location.href = "/";
  }

  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const loginUser = async (e: FormEvent) => {
    e.preventDefault();

    if (email === null || password === null) {
      alert("Please enter both email and password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="pass"
          placeholder="Password"
        />
        <button onClick={loginUser}>Login</button>
      </form>
    </div>
  );
};

export default Login;
