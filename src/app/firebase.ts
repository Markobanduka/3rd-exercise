import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXJRYXq_db__GWrHgtBPYyEixPtHNxPNQ",
  authDomain: "fir-next-e7275.firebaseapp.com",
  projectId: "fir-next-e7275",
  storageBucket: "fir-next-e7275.appspot.com",
  messagingSenderId: "233532962190",
  appId: "1:233532962190:web:500d5390864d4ab6a2a0df",
  measurementId: "G-MF977DZ9BM",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
