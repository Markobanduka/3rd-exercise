"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { User } from "firebase/auth";
import { auth } from "@/app/firebase";

interface AuthContextType {
  user: User | null;
  loggedIn: boolean;
  isLoading: boolean;
}
const AuthContext = createContext<AuthContextType | {}>({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return auth.onAuthStateChanged(setupInitialUser);
  }, []);

  const setupInitialUser = async (authUser: User | null) => {
    if (authUser) {
      setUser(authUser);
      setLoggedIn(true);
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
