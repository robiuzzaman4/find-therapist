import heroBg from "../../assets/images/hero-texture-grp.svg";

const Hero = () => {
  return (
    <div className="w-full bg-ft-white rounded-[10px] px-4 py-6 md:px-[30px] md:py-[30px] grid lg:grid-cols-2 gap-[56px] lg:gap-[100px] xl:gap-[156px]">
      {/* hero left section */}
      <div className="flex flex-col gap-[30px]">
        <span className="flex flex-col gap-3">
          <h4 className="text-xl text-ft-black font-medium leading-[30px]">
            I&rsquo;m Looking for Massage Therapist Near...
          </h4>
          <p>
            In using this site, I agree to be bound by the{" "}
            <span className="text-ft-blue-500 underline">Terms of Service</span>{" "}
            and{" "}
            <span className="text-ft-blue-500 underline">Privacy Policy</span>
          </p>
        </span>
        {/* search bar */}
        <div className="hidden lg:block w-full relative">
          <input
            type="text"
            className="h-full w-full bg-ft-gray-400 rounded-[10px] focus-visible:outline-none px-5 py-5 text-ft-gray-500 text-sm"
            placeholder="ZIP code or city name"
          />
          <button className="h-10 w-[84px] rounded-[10px] bg-ft-blue-500 text-ft-white font-medium text-sm absolute top-2.5 right-2.5">
            Go
          </button>
        </div>
      </div>

      {/* hero right section */}
      <div className="w-full h-full">
        <img
          src={heroBg}
          alt="hero bg"
          className="w-full h-full ml-auto object-contain"
        />
      </div>
      {/* search bar */}
      <div className="lg:hidden w-full relative">
        <input
          type="text"
          className="h-full w-full bg-ft-gray-400 rounded-[10px] focus-visible:outline-none px-5 py-5 text-ft-gray-500 text-sm"
          placeholder="ZIP code or city name"
        />
        <button className="h-10 w-[84px] rounded-[10px] bg-ft-blue-500 text-ft-white font-medium text-sm absolute top-2.5 right-2.5">
          Go
        </button>
      </div>
    </div>
  );
};

export default Hero;
