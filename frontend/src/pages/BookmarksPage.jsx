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
        }}
      >
        <h1>Your Bookmarks</h1>

        <p
          style={{
            color: "#6B7280",
            marginBottom: "30px",
          }}
        >
          Opportunities you've saved
        </p>

        {bookmarks.length === 0 ? (
          <h3>No bookmarks yet.</h3>
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
                  border: "1px solid #ccc",
                  padding: "20px",
                  marginBottom: "20px",
                  borderRadius: "10px",
                }}
              >
                <h3>{bookmark.opportunity.title}</h3>

                <p>{bookmark.opportunity.category}</p>

                <p>
                  Closes{" "}
                  {new Date(bookmark.opportunity.deadline).toLocaleDateString()}
                </p>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    removeBookmark(bookmark.opportunity.id);
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
