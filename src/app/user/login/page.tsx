"use client";

import { FormEvent, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const loginUser = async (e: FormEvent) => {
    e.preventDefault();
    console.log(username, password);

    if (username === null || password === null) {
      alert("Please enter both username and password");
      return;
    }
    const response = await fetch("/api/auth_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status !== 200) {
      alert("Something went wrong, try again later");
      return;
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
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
