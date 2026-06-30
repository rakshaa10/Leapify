import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../api/axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("STUDENT");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert("Registration successful");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
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
        Register page — /register
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

      <h2>Create account</h2>

      <p
        style={{
          color: "#6B7280",
          marginBottom: "28px",
        }}
      >
        Join OpportunityHub
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>Full name</label>
          <input
            type="text"
            placeholder="Raksha Gupta"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="you@nitrr.ac.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Account Type</label>

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="STUDENT">Student</option>
            <option value="ORGANIZER">Organizer</option>
          </select>
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
          }}
        >
          Create account
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
        Already have an account? <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
