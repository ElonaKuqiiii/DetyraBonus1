import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { useRouter } from "expo-router";

const router = useRouter();

import { useState } from "react";
import { app } from "../firebase";

export default function Register() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



  const HandleSignUp = async (e) => {
    e.preventDefault();
    if(!emailRegex.test(email)){
      alert("Email format is invalid!");
      return;
    }
    if (!passwordRegex.test(password)) {
  alert("Password must be at least 8 characters, include uppercase, lowercase, number, and symbol.");
  return;
}

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    router.push("/userexists");

    } catch (error) {
      console.log(error.code);
        if (error.code === "auth/user-not-found") {
      alert("Ky email nuk ekziston. Ju lutem regjistrohuni.");
    } 
    else if (error.code === "auth/wrong-password") {
      alert("Password-i është i gabuar.");
    }
    else if (error.code === "auth/invalid-email") {
      alert("Email nuk është në format të rregullt.");
    }
    else if (error.code === "auth/missing-password") {
      alert("Ju lutem shkruani password-in.");
    }
    else {
      alert("Dicka shkoi keq: " + error.message);
    }
    }
  };

  const HandleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
   router.push("/userexists");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 350,
          backgroundColor: "white",
          padding: 22,
          borderRadius: 12,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <form onSubmit={HandleSignUp}>
          {/* INPUT EMAIL */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
              marginBottom: 12,
            }}
            required
          />

          {/* INPUT PASSWORD */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 6,
              border: "1px solid #ccc",
              marginBottom: 15,
            }}
            required
          />

          {/* LOGIN BUTTON */}
          <button
            type="button"
            onClick={HandleLogin}
            style={{
              width: "100%",
              padding: 12,
              backgroundColor: "black",
              color: "white",
              borderRadius: 6,
              border: "none",
              marginBottom: 12,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Log in
          </button>

          {/* SIGN UP BUTTON */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 12,
              backgroundColor: "black",
              color: "white",
              borderRadius: 6,
              border: "none",
              marginBottom: 12,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            onClick={HandleGoogleLogin}
            style={{
              width: "100%",
              padding: 12,
              backgroundColor: "#e8f0fe",
              borderRadius: 6,
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 18 }}>🟦</span>
            Continue With Google
          </button>
        </form>
      </div>
    </div>
  );
}
