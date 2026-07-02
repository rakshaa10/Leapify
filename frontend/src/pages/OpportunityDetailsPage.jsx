import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import axios from "../api/axios";

const OpportunityDetailsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useAuth();

  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    const fetchOpportunity = async () => {
      try {
        const response = await axios.get(`/opportunities/${id}`);

        console.log(response.data);

        setOpportunity(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOpportunity();
  }, [id]);

  const handleBookmark = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        `/bookmarks/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      alert("Opportunity bookmarked successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to bookmark opportunity");
    }
  };

  if (!opportunity) {
    return (
      <>
        <Navbar />
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1050px",
          width: "100%",
          margin: "0 auto",
          padding: "40px 24px 80px",
          boxSizing: "border-box",
          backgroundColor: "#F0F4F8",
          minHeight: "100vh",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#d0edfa";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#FFFFFF";
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            border: "1px solid #E2E8F0",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            color: "#475569",
            fontWeight: "500",
            cursor: "pointer",
            marginBottom: "32px",
            transition: "all 0.2s ease",
          }}
        >
          ← Back to opportunities
        </button>

        {/* Banner */}
        {opportunity.bannerUrl ? (
          <img
            src={opportunity.bannerUrl}
            alt={opportunity.title}
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "24px",
              marginBottom: "40px",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "260px",
              backgroundColor: "#2563EB",
              borderRadius: "24px",
              marginBottom: "40px",
            }}
          />
        )}

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {/* Left */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
            }}
          >
            <span
              style={{
                backgroundColor: "#E0F2FE",
                color: "#075985",
                border: "1px solid #BAE6FD",
                padding: "7px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {opportunity.category}
            </span>

            <h1
              style={{
                color: "#0F172A",
                fontSize: "40px",
                lineHeight: "1.2",
                marginTop: "16px",
                marginBottom: "16px",
                letterSpacing: "-0.5px",
              }}
            >
              {opportunity.title}
            </h1>

            <p
              style={{
                color: "#475569",
                fontSize: "17px",
              }}
            >
              Posted by {opportunity.organizer?.name}
            </p>
          </div>

          {/* Right Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              minWidth: "190px",
            }}
          >
            <button
              onClick={() => {
                if (opportunity.registrationLink) {
                  window.open(opportunity.registrationLink, "_blank");
                } else {
                  alert("Registration link not available.");
                }
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 24px rgba(37,99,235,0.25)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
              style={{
                padding: "15px 24px",
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                transition: "all 0.2s ease",
              }}
            >
              Register Now
            </button>

            <button
              onClick={handleBookmark}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#d0edfa";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FFFFFF";
              }}
              style={{
                padding: "15px 24px",
                backgroundColor: "#FFFFFF",
                color: "#0F172A",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                transition: "all 0.2s ease",
              }}
            >
              Save Opportunity
            </button>
          </div>
        </div>

        {/* Metadata */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
            marginTop: "40px",
            padding: "30px 40px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "20px",
          }}
        >
          <div>
            <h4
              style={{
                color: "#94A3B8",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Deadline
            </h4>

            <p
              style={{
                color: "#0F172A",
                fontWeight: "500",
              }}
            >
              {new Date(opportunity.deadline).toLocaleDateString()}
            </p>
          </div>

          <div>
            <h4
              style={{
                color: "#94A3B8",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Category
            </h4>

            <p
              style={{
                color: "#0F172A",
                fontWeight: "500",
              }}
            >
              {opportunity.category}
            </p>
          </div>

          <div>
            <h4
              style={{
                color: "#94A3B8",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Organizer
            </h4>

            <p
              style={{
                color: "#0F172A",
                fontWeight: "500",
              }}
            >
              {opportunity.organizer?.name}
            </p>
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            marginTop: "60px",
            maxWidth: "900px",
          }}
        >
          <h2
            style={{
              color: "#0F172A",
              marginBottom: "24px",
            }}
          >
            About this opportunity
          </h2>

          <p
            style={{
              color: "#475569",
              lineHeight: "2",
              fontSize: "17px",
              maxWidth: "820px",
            }}
          >
            {opportunity.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default OpportunityDetailsPage;
