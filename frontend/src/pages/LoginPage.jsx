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
        minHeight: "100vh",
        backgroundColor: "#F0F4F8",
        padding: "60px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "420px",
          margin: "0 auto",
          padding: "32px",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "32px",
            color: "#0F172A",
          }}
        >
          Opport<span style={{ color: "#2563EB" }}>unity</span>Hub
        </div>

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "6px",
            color: "#0F172A",
          }}
        >
          Welcome back
        </h2>

        <p
          style={{
            color: "#475569",
            marginBottom: "28px",
          }}
        >
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                color: "#475569",
              }}
            >
              Email address
            </label>

            <input
              type="email"
              placeholder="you@nitrr.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px 14px",
                borderRadius: "8px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#F8FAFC",
                color: "#0F172A",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                color: "#475569",
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "12px 14px",
                borderRadius: "8px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#F8FAFC",
                color: "#0F172A",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
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
            color: "#E2E8F0",
          }}
        >
          —
        </div>

        <div
          style={{
            textAlign: "center",
            color: "#475569",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#2563EB",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
