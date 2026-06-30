import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const CreateOpportunityPage = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        {/* Back button */}
        <Link
          to="/dashboard"
          style={{
            color: "#6B7280",
            textDecoration: "none",
            fontSize: "14px",
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
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
          >
            Post an opportunity
          </h1>

          <p
            style={{
              color: "#9CA3AF",
            }}
          >
            Fill in the details below. Students will see this on the home feed.
          </p>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>Title</label>

          <input
            type="text"
            placeholder="e.g. Web Dev Workshop — Technocracy"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #374151",
              backgroundColor: "#1F2937",
              color: "white",
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
            <label style={{ display: "block", marginBottom: "8px" }}>
              Category
            </label>

            <select
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #374151",
                backgroundColor: "#1F2937",
                color: "white",
              }}
            >
              <option>Hackathon</option>
              <option>Internship</option>
              <option>Workshop</option>
              <option>Scholarship</option>
              <option>Competition</option>
              <option>Club Recruitment</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Application deadline
            </label>

            <input
              type="date"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #374151",
                backgroundColor: "#1F2937",
                color: "white",
              }}
            />
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Description
          </label>

          <textarea
            placeholder="Describe the opportunity — what it is, who can apply, what to expect..."
            rows={6}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #374151",
              backgroundColor: "#1F2937",
              color: "white",
              resize: "vertical",
            }}
          />
        </div>

        {/* Registration link */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Registration link
          </label>

          <input
            type="text"
            placeholder="https://unstop.com/your-event"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #374151",
              backgroundColor: "#1F2937",
              color: "white",
            }}
          />
        </div>

        {/* Banner Upload Placeholder */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Banner image
          </label>

          <div
            style={{
              border: "2px dashed #4B5563",
              borderRadius: "12px",
              padding: "40px",
              textAlign: "center",
              color: "#9CA3AF",
            }}
          >
            Click to upload or drag and drop
            <br />
            PNG or JPG, max 2MB
          </div>
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
                border: "1px solid #4B5563",
                backgroundColor: "transparent",
                color: "white",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </Link>

          <button
            style={{
              padding: "12px 20px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#2563EB",
              color: "white",
              cursor: "pointer",
            }}
          >
            Post Opportunity
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateOpportunityPage;
