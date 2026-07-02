const SearchBar = ({ search, setSearch }) => {
  return (
    <div
      className="search-container"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "30px",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <input
        className="search-input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title, club, or keyword..."
        style={{
          width: "100%",
          maxWidth: "540px",
          padding: "10px 20px",
          boxSizing: "border-box",
          borderRadius: "13px",
          border: "1px solid #E2E8F0",
          color: "#0F172A",
          background: "#FFFFFF",
          fontSize: "15px",
          outline: "none",
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
        }}
      />
    </div>
  );
};

export default SearchBar;
