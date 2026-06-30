import { useState } from "react";

import OpportunityGrid from "../components/OpportunityGrid";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  return (
    <>
      <Navbar />

      <HeroSection
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <OpportunityGrid search={search} category={category} />
    </>
  );
};

export default HomePage;
