import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "../api/axios";

const CreateOpportunityPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const isEditMode = Boolean(id);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("HACKATHON");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [banner, setBanner] = useState(null);


  useEffect(() => {
    const fetchOpportunity = async () => {
      if (!isEditMode) return;

      try {
        const response = await axios.get(`/opportunities/${id}`);

        const opportunity = response.data;

        setTitle(opportunity.title);
        setCategory(opportunity.category);
        setDeadline(opportunity.deadline.split("T")[0]);
        setDescription(opportunity.description);
        setRegistrationLink(opportunity.registrationLink);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOpportunity();
  }, [id, isEditMode]);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("category", category);
      formData.append("deadline", deadline);
      formData.append("description", description);
      formData.append("registrationLink", registrationLink);

      if (banner) {
        formData.append("banner", banner);
      }

      if (isEditMode) {
        await axios.put(`/opportunities/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            
          },
        });

        alert("Opportunity updated successfully");
      } else {
        await axios.post("/opportunities", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          
          },
        });

        alert("Opportunity created successfully");
      }

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to create opportunity");
    }
  };
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "32px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
        }}
      >
        {/* Back button */}
        <Link
          to="/dashboard"
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
          ← Back to dashboard
        </Link>

        {/* Heading */}
        <div
          style={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              color: "#0F172A",
              marginBottom: "30px",
            }}
          >
            {isEditMode ? "Edit opportunity" : "Post an opportunity"}
          </h1>

          <p
            style={{
              color: "#475569",
            }}
          >
            {isEditMode
              ? "Update your opportunity details."
              : "Fill in the details below. Students will see this on the home feed."}
          </p>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#475569",
            }}
          >
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Web Dev Workshop — Technocracy"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #CBD5E1",
              backgroundColor: "#FFFFFF",
              color: "#0F172A",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#93C5FD";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#CBD5E1";
            }}
          />
        </div>

        {/* Category + Deadline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#475569",
              }}
            >
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#FFFFFF",
                color: "#0F172A",
              }}
            >
              <option value="HACKATHON">Hackathon</option>
              <option value="INTERNSHIP">Internship</option>
              <option value="WORKSHOP">Workshop</option>
              <option value="SCHOLARSHIP">Scholarship</option>
              <option value="COMPETITION">Competition</option>
              <option value="CLUB_RECRUITMENT">Club Recruitment</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#475569",
              }}
            >
              Application deadline
            </label>

            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#FFFFFF",
                color: "#0F172A",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#93C5FD";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#CBD5E1";
              }}
            />
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#475569",
            }}
          >
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the opportunity — what it is, who can apply, what to expect..."
            rows={6}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #CBD5E1",
              backgroundColor: "#FFFFFF",
              color: "#0F172A",
              resize: "vertical",
            }}
          />
        </div>

        {/* Registration link */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#475569",
            }}
          >
            Registration link
          </label>

          <input
            type="text"
            value={registrationLink}
            onChange={(e) => setRegistrationLink(e.target.value)}
            placeholder="https://unstop.com/your-event"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #CBD5E1",
              backgroundColor: "#FFFFFF",
              color: "#0F172A",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#93C5FD";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#CBD5E1";
            }}
          />
        </div>

        {/* Banner Upload */}
        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#475569",
            }}
          >
            Banner image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setBanner(e.target.files[0])}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #CBD5E1",
              backgroundColor: "#FFFFFF",
              color: "#0F172A",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#93C5FD";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#CBD5E1";
            }}
          />

          {banner && (
            <p
              style={{
                color: "#475569",
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              ✓ Selected: {banner.name}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <Link to="/dashboard">
            <button
              style={{
                padding: "12px 20px",
                borderRadius: "10px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                color: "#475569",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#F8FAFC";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FFFFFF";
              }}
            >
              Cancel
            </button>
          </Link>

          <button
            onClick={handleSubmit}
            style={{
              padding: "12px 20px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#2563EB",
              color: "white",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 20px rgba(37,99,235,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            {isEditMode ? "Update Opportunity" : "Post Opportunity"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateOpportunityPage;
