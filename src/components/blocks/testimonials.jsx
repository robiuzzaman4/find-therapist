import { testimonials } from "../../constants";
import SectionTitle from "../shared/section-title";

import useEmblaCarousel from "embla-carousel-react";

import { DotButton, useDotButton } from "../ui/embla-carousel-dot-button";
import TestimonialCard from "../ui/testimonial-card";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <div className="flex flex-col gap-[18px] relative w-full h-full">
      <SectionTitle title="Featured Testimonial" className="px-4" />
      <div
        className="bg-ft-white h-full px-4 py-6 lg:px-[30px] lg:py-[30px] rounded-[10px] overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-[30px]">
          <div className="grid gap-5 embla__slide">
            {testimonials.slice(0, 2).map((item) => (
              <TestimonialCard item={item} key={item?.id} />
            ))}
          </div>
          <div className="grid gap-5 embla__slide">
            {testimonials.slice(2, 4).map((item) => (
              <TestimonialCard item={item} key={item?.id} />
            ))}
          </div>
          <div className="grid gap-5 embla__slide">
            {testimonials.slice(4, 6).map((item) => (
              <TestimonialCard item={item} key={item?.id} />
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="mt-6">
          <div className="flex items-center justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot h-[9px] w-[9px] rounded-full bg-ft-gray-500".concat(
                  index === selectedIndex
                    ? "bg-ft-blue-500 embla__dot--selected"
                    : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
