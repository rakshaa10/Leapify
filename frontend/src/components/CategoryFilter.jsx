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
            border: "1px solid #D1D5DB",

            backgroundColor:
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
                : "#1E3A5F",

            cursor: "pointer",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
