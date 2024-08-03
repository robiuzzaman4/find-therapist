import Hero from "../components/blocks/hero";
import Testimonials from "../components/blocks/testimonials";
import PopularCities from "../components/blocks/popular-cities";
import Therapists from "../components/blocks/therapists";
import { useEffect, useState } from "react";

const Home = () => {
  // search state
  const [search, setSearch] = useState("");
  // fetch therapists data
  const [therapists, setTherapists] = useState([]);
  const [originalTherapists, setOriginalTherapists] = useState([]);

  useEffect(() => {
    fetch("/therapists.json")
      .then((response) => response.json())
      .then((data) => {
        setTherapists(data);
        // Store the original data
        setOriginalTherapists(data);
      })
      .catch((error) =>
        console.error("Error fetching therapists data:", error)
      );
  }, []);

  // handle search
  const handleSearch = () => {
    if (search?.length > 0) {
      const regex = new RegExp(search, "i"); // 'i' for case-insensitive
      const results = originalTherapists?.filter((t) =>
        regex.test(t?.location)
      );
      setTherapists(results);
    }
  };

  // handle clear search
  const handleClearSearch = () => {
    setSearch("");
    // Reset to the original data
    setTherapists(originalTherapists);
  };

  return (
    <div className="lg:px-[30px] py-3 lg:py-[30px] grid gap-[30px] w-full h-full">
      <Hero
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
      />
      <div className="w-full overflow-hidden">
        <Therapists therapists={therapists} />
      </div>
      <div className="w-full h-full grid xl:grid-cols-2 gap-[30px]">
        <Testimonials />
        <PopularCities />
      </div>
    </div>
  );
};

export default Home;
