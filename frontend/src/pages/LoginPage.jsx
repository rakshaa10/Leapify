import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      login(response.data.user, response.data.token);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "80px auto",
        padding: "32px",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        backgroundColor: "#F8F9FB",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          color: "#9CA3AF",
          marginBottom: "24px",
        }}
      >
        Login page — /login
      </div>

      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "32px",
        }}
      >
        Opport<span style={{ color: "#2563EB" }}>unity</span>Hub
      </div>

      <h2
        style={{
          fontSize: "28px",
          marginBottom: "6px",
        }}
      >
        Welcome back
      </h2>

      <p
        style={{
          color: "#6B7280",
          marginBottom: "28px",
        }}
      >
        Sign in to your account
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>Email address</label>

          <input
            type="email"
            placeholder="you@nitrr.ac.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Password</label>

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
      </form>

      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
          color: "#9CA3AF",
        }}
      >
        —
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#6B7280",
        }}
      >
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default LoginPage;
