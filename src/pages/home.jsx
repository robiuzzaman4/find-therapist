import Hero from "../components/blocks/hero";
import Testimonials from "../components/blocks/testimonials";
import PopularCities from "../components/blocks/popular-cities";

const Home = () => {
  return (
    <div className="lg:px-[30px] py-3 lg:py-[30px] grid gap-[30px] w-full h-full">
      <Hero />
      <div className="w-full h-full grid xl:grid-cols-2 gap-[30px]">
        <Testimonials />
        <PopularCities />
      </div>
    </div>
  );
};

export default Home;
