const categories = [
  "All",
  "Hackathon",
  "Internship",
  "Workshop",
  "Scholarship",
  "Competition",
  "Club Recruitment",
];

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <div
      className="category-container"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        flexWrap: "wrap",
        marginTop: "24px",
      }}
    >
      {categories.map((item) => (
        <button
          key={item}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 20px rgba(15,23,42,0.08)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow =
              (item === "All" && category === "") ||
              category ===
                (item === "Club Recruitment"
                  ? "CLUB_RECRUITMENT"
                  : item.toUpperCase())
                ? "0 6px 18px rgba(37,99,235,0.25)"
                : "0 2px 8px rgba(15,23,42,0.04)";
          }}
          onClick={() =>
            setCategory(
              item === "All"
                ? ""
                : item === "Club Recruitment"
                  ? "CLUB_RECRUITMENT"
                  : item.toUpperCase(),
            )
          }
          style={{
            padding: "10px 18px",
            borderRadius: "999px",

            border:
              (item === "All" && category === "") ||
              category ===
                (item === "Club Recruitment"
                  ? "CLUB_RECRUITMENT"
                  : item.toUpperCase())
                ? "1px solid transparent"
                : "1px solid #CBD5E1",

            background:
              (item === "All" && category === "") ||
              category ===
                (item === "Club Recruitment"
                  ? "CLUB_RECRUITMENT"
                  : item.toUpperCase())
                ? "#2563EB"
                : "#FFFFFF",

            color:
              (item === "All" && category === "") ||
              category ===
                (item === "Club Recruitment"
                  ? "CLUB_RECRUITMENT"
                  : item.toUpperCase())
                ? "#FFFFFF"
                : "#475569",

            fontSize: "14px",
            fontWeight: "500",

            boxShadow:
              (item === "All" && category === "") ||
              category ===
                (item === "Club Recruitment"
                  ? "CLUB_RECRUITMENT"
                  : item.toUpperCase())
                ? "0 6px 18px rgba(37,99,235,0.25)"
                : "0 2px 8px rgba(15,23,42,0.04)",

            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
