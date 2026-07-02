import { Link } from "react-router-dom";

const OpportunityCard = ({ opportunity }) => {
  return (
    <Link
      to={`/opportunity/${opportunity.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 16px 40px rgba(15,23,42,0.12)";
          e.currentTarget.style.borderColor = "#93C5FD";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,0.08)";
          e.currentTarget.style.borderColor = "#E2E8F0";
        }}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid #E2E8F0",
          width: "100%",
          maxWidth: "320px",
          marginTop: "20px",
          boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
          transition: "all 0.25s ease",
          cursor: "pointer",
        }}
      >
        {/* Banner */}
        {opportunity.bannerUrl ? (
          <img
            src={opportunity.bannerUrl}
            alt={opportunity.title}
            style={{
              width: "100%",
              height: "90px",
              objectFit: "contain",
              backgroundColor: "#FFFFFF",
            }}
          />
        ) : (
          <div
            style={{
              height: "110px",
              backgroundColor: "#2563EB",
            }}
          />
        )}

        {/* Content */}
        <div
          style={{
            padding: "20px",
            borderTop: "1px solid #E2E8F0",
          }}
        >
          <span
            style={{
              backgroundColor: "#E0EAFF",
              color: "#1D4ED8",
              padding: "5px 12px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {opportunity.category}
          </span>

          <h3
            style={{
              marginTop: "20px",
              color: "#0F172A",
              fontSize: "21.5px",
              fontWeight: "700",
              lineHeight: "1.25",
              minHeight: "78px",
            }}
          >
            {opportunity.title}
          </h3>

          <p
            style={{
              color: "#475569",
              fontSize: "16px",
              minHeight: "24px",
              marginTop: "20px",
            }}
          >
            {opportunity.organizer}
          </p>

          <p
            style={{
              marginTop: "2px",
              color: "#2563EB",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Closes {opportunity.deadline}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OpportunityCard;
