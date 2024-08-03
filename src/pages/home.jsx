import Hero from "../components/hero";
import Testimonials from "../components/testimonils";

const Home = () => {
  return (
    <div className="lg:px-[30px] py-3 lg:py-[30px] grid gap-[30px]">
      <Hero />
      <div className="w-full grid lg:grid-cols-2 gap-[30px]">
        <Testimonials/>
      </div>
    </div>
  );
};

export default Home;
