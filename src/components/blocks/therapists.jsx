import SectionTitle from "../shared/section-title";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../ui/embla-carousel-arrow-button";
import TherapistCard from "../ui/therapist-card";

const Therapists = ({ therapists }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex flex-col gap-[18px] relative w-full h-full">
      <SectionTitle title="Featured Therapist" className="px-4" />
      <div className="bg-ft-white h-full px-4 py-6 lg:px-[30px] lg:py-[30px] rounded-[10px]  relative">
        <div ref={emblaRef} className="lg:mx-[60px] overflow-hidden">
          <div className="flex gap-[25px] w-full">
            {therapists && therapists?.length > 0 ? (
              therapists?.map((therapist) => (
                <TherapistCard key={therapist?.id} therapist={therapist} />
              ))
            ) : (
              <div className="pt-4 pb-8 text-xs text-center w-fit mx-auto font-medium">
                No results found! <br /> Try like this:{" "}
                <span className="text-ft-blue-500">Fresno, CA</span> |{" "}
                <span className="text-ft-blue-500">Los Angeles, CA</span> |
                <span className="text-ft-blue-500">Chicago, IL</span> |{" "}
                <span className="text-ft-blue-500">Washington, D.C.</span> |
              </div>
            )}
          </div>

          {/* arrow */}
          <div className="hidden lg:block absolute top-[45%] left-[30px]">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className="hidden lg:block absolute top-[45%] right-[30px]">
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapists;

// {/* arrows */}
// {/* <div className="embla__controls">
//   <div className="embla__buttons">
//     <PrevButton
//       onClick={onPrevButtonClick}
//       disabled={prevBtnDisabled}
//     />
//     <NextButton
//       onClick={onNextButtonClick}
//       disabled={nextBtnDisabled}
//     />

//   </div> */}
