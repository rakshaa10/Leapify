import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../api/axios";
import Navbar from "../components/Navbar";

const BookmarksPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookmarks = async () => {
    try {
      const response = await axios.get("/bookmarks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setBookmarks(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const removeBookmark = async (opportunityId) => {
    try {
      await axios.delete(`/bookmarks/${opportunityId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setBookmarks(
        bookmarks.filter(
          (bookmark) => bookmark.opportunity.id !== opportunityId,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <h2
          style={{
            textAlign: "center",
            marginTop: "100px",
            color: "#0F172A",
          }}
        >
          Loading bookmarks...
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
          backgroundColor: "#F0F4F8",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            color: "#0F172A",
            marginBottom: "25px",
          }}
        >
          Your Bookmarks
        </h1>

        <p
          style={{
            color: "#475569",
            padding: "10px 10px",
            marginBottom: "30px",
          }}
        >
          Opportunities you've saved
        </p>

        {bookmarks.length === 0 ? (
          <h3
            style={{
              color: "#475569",
            }}
          >
            No bookmarks yet.
          </h3>
        ) : (
          bookmarks.map((bookmark) => (
            <Link
              key={bookmark.id}
              to={`/opportunity/${bookmark.opportunity.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  padding: "24px",
                  marginBottom: "20px",
                  borderRadius: "14px",
                }}
              >
                <h2
                  style={{
                    color: "#0F172A",
                    marginBottom: "16px",
                  }}
                >
                  {bookmark.opportunity.title}
                </h2>

                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#E0EAFF",
                    color: "#1D4ED8",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "500",
                    marginBottom: "16px",
                  }}
                >
                  {bookmark.opportunity.category}
                </span>

                <p
                  style={{
                    color: "#2563EB",
                    fontWeight: "600",
                    marginBottom: "18px",
                  }}
                >
                  Closes{" "}
                  {new Date(bookmark.opportunity.deadline).toLocaleDateString()}
                </p>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    removeBookmark(bookmark.opportunity.id);
                  }}
                  style={{
                    backgroundColor: "#FEE2E2",
                    color: "#DC2626",
                    border: "1px solid #FECACA",
                    borderRadius: "6px",
                    padding: "8px 14px",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Remove Bookmark
                </button>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default BookmarksPage;
