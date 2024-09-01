"use client";

import { useAuth } from "./app/context/authContext";

import { auth } from "./app/firebase";

const Logout = () => {
  const { loggedIn } = useAuth();
  console.log(loggedIn);

  const logoutUser = (e) => {
    e.preventDefault();
    auth.signOut();
    window.location.reload();
  };

  return (
    <>
      <div>
        {loggedIn ? (
          <button onClick={(e) => logoutUser(e)}>Logout</button>
        ) : (
          <a href="user/login">Login</a>
        )}
      </div>
    </>
  );
};

export default Logout;
