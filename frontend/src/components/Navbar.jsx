import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navLinkStyle = {
  textDecoration: "none",
  color: "#93C5FD",
  fontWeight: "500",
  fontSize: "16px",
};

const actionButtonStyle = {
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  border: "1px solid #374151",
  backgroundColor: "#1F2937",
  color: "#F3F4F6",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
};

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        borderBottom: "1px solid #374151",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "30px",
          fontWeight: "700",
          color: "#2563EB",
        }}
      >
        OpportunityHub
      </Link>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {!user && (
          <>
            <Link to="/login" style={actionButtonStyle}>
              Login
            </Link>

            <Link to="/register" style={actionButtonStyle}>
              Register
            </Link>
          </>
        )}

        {user && (
          <>
            {user.role === "ORGANIZER" && (
              <Link to="/dashboard" style={navLinkStyle}>
                Dashboard
              </Link>
            )}

            <Link to="/bookmarks" style={navLinkStyle}>
              Bookmarks
            </Link>

            <button onClick={logout} style={actionButtonStyle}>
              Logout
            </button>

            <div
              style={{
                color: "#F3F4F6",
                fontWeight: "600",
                padding: "8px 12px",
                backgroundColor: "#1F2937",
                borderRadius: "999px",
              }}
            >
              {user.name}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
