import { MapPinIcon } from "@heroicons/react/20/solid";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-ft-white flex items-center gap-[15px] p-2.5 border border-ft-gray-200 rounded-[10px] h-full">
      <img
        src={item?.reviewerImg}
        alt={item?.therapi}
        className="w-[130px] h-full min-h-[140px] lg:min-h-[160px] rounded-lg object-cover"
      />
      <div className="grid gap-4">
        <span className="grid gap-2">
          <p className="text-sm font-normal text-ft-gray-500 flex items-center gap-1">
            <MapPinIcon className="h-4 w-4 shrink-0" /> {item?.location}
          </p>
          <p className="text-sm font-medium text-[#232F3C]">
            {item?.therapi}{" "}
            <span className="text-ft-blue-500 italic font-semibold">
              by {item?.therapist}
            </span>
          </p>
        </span>
        <p className="text-sm font-normal leading-6 text-ft-gray-500 line-clamp-3">
          {item?.review}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
