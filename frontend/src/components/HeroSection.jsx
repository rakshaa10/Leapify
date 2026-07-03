import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

const HeroSection = ({ search, setSearch, category, setCategory }) => {
  return (
    <section
      className="hero-section"
      style={{
        padding: "130px 20px",
        backgroundColor: "#d1dff8", // Hero background
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#2563EB",
          fontWeight: "700",
          letterSpacing: "2px",
          fontSize: "18px",
          marginBottom: "25px",
        }}
      >
        NIT RAIPUR
      </p>

      <h1
        className="hero-title"
        style={{
          fontSize: "clamp(36px, 8vw, 64px)",
          color: "#0F172A", // Primary text color
          marginTop: "0",
          marginBottom: "25px",
          lineHeight: "1",
          fontWeight: "700",
          letterSpacing: "-2px",
        }}
      >
        Your next opportunity starts here!
      </h1>

      <p
        className="hero-subtitle"
        style={{
          color: "#475569", // Secondary text color
          fontSize: "clamp(15px, 3vw, 20px)",
          maxWidth: "750px",
          margin: "0 auto 0px",
          lineHeight: "1.7",
        }}
      >
        Discover hackathons, internships, workshops, scholarships, and campus
        opportunities — all in one place.
      </p>

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter category={category} setCategory={setCategory} />
    </section>
  );
};

export default HeroSection;
