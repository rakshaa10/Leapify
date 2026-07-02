import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "../api/axios";

const DashboardPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyOpportunities = async () => {
      try {
        const response = await axios.get("/opportunities/my-opportunities", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setOpportunities(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMyOpportunities();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this opportunity?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`/opportunities/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setOpportunities(
        opportunities.filter((opportunity) => opportunity.id !== id),
      );
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to delete opportunity");
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
          Loading dashboard...
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
          margin: "50px auto",
          padding: "20px",
          backgroundColor: "#F0F4F8",
          minHeight: "100vh",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            marginTop: "15px",
            color: "#0F172A",
            fontSize: "42px",
          }}
        >
          Your opportunities
        </h1>

        <p
          style={{
            color: "#475569",
            marginTop: "8px",
            marginBottom: "30px",
          }}
        >
          Manage what you've posted
        </p>

        {/* Create Opportunity Button */}
        <Link to="/create-opportunity">
          <button
            style={{
              padding: "14px 24px",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginBottom: "30px",
              fontWeight: "600",
            }}
          >
            + Post New Opportunity
          </button>
        </Link>

        {/* Empty State */}
        {opportunities.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              border: "1px dashed #CBD5E1",
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <h2
              style={{
                color: "#0F172A",
                marginBottom: "10px",
              }}
            >
              No opportunities yet
            </h2>

            <p
              style={{
                color: "#475569",
                marginBottom: "25px",
              }}
            >
              You haven't posted any opportunities yet.
            </p>

            <Link to="/create-opportunity">
              <button
                style={{
                  padding: "12px 20px",
                  backgroundColor: "#2563EB",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Post Your First Opportunity
              </button>
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "14px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <Link
                    to={`/opportunity/${opportunity.id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <h3
                      style={{
                        color: "#0F172A",
                        marginBottom: "8px",
                        cursor: "pointer",
                      }}
                    >
                      {opportunity.title}
                    </h3>
                  </Link>

                  <p
                    style={{
                      color: "#475569",
                    }}
                  >
                    {opportunity.category} •{" "}
                    {new Date(opportunity.deadline).toLocaleDateString()}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <Link to={`/edit-opportunity/${opportunity.id}`}>
                    <button
                      style={{
                        padding: "10px 18px",
                        borderRadius: "8px",
                        border: "1px solid #E2E8F0",
                        backgroundColor: "#FFFFFF",
                        color: "#475569",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(opportunity.id)}
                    style={{
                      padding: "10px 18px",
                      borderRadius: "8px",
                      border: "1px solid #FECACA",
                      backgroundColor: "#FEE2E2",
                      color: "#DC2626",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
