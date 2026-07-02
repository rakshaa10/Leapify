import { useEffect, useState } from "react";
import axios from "../api/axios";

import OpportunityCard from "./OpportunityCard";

const OpportunityGrid = ({ search, category }) => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await axios.get(
          `/opportunities?search=${search}&category=${category}`,
        );

        console.log(response.data);

        setOpportunities(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [search, category]);

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "80px",
          color: "#475569",
          fontSize: "18px",
          backgroundColor: "#F0F4F8",
        }}
      >
        Loading opportunities...
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#F0F4F8",
        width: "100%",
      }}
    >
      <div
        className="opportunity-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 320px))",
          gap: "24px",
          padding: "40px 20px",

          justifyContent: "center",

          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {opportunities.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px",
              width: "100%",
            }}
          >
            <h2
              style={{
                color: "#0F172A",
                marginBottom: "12px",
              }}
            >
              No opportunities found
            </h2>

            <p
              style={{
                color: "#475569",
              }}
            >
              Try changing your search keyword or category filter.
            </p>
          </div>
        ) : (
          opportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={{
                ...opportunity,
                organizer: opportunity.organizer?.name || "Unknown Organizer",
                deadline: new Date(opportunity.deadline).toLocaleDateString(),
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OpportunityGrid;
