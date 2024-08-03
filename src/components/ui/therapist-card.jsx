import { MapPinIcon } from "@heroicons/react/24/solid";
import car from "../../assets/icons/car.svg";

const TherapistCard = ({ therapist }) => {
  return (
    <div
      key={therapist?.id}
      className="w-full min-w-[240px] max-w-[300px] bg-ft-white border border-ft-gray-200 rounded-[10px]"
    >
      {/* top section */}
      <div className="p-2.5 grid gap-5">
        <img
          src={therapist?.img}
          alt={`${therapist?.name}'s image`}
          className="w-full h-[146px] object-cover rounded-md"
        />
        <div className="grid gap-[15px]">
          <h5 className="text-sm text-ft-black font-medium">
            {therapist?.name}
          </h5>
          <span className="grid gap-3 text-ft-gray-500">
            <p className="text-[13px] font-normal text-ft-gray-500 flex items-center gap-1.5">
              <MapPinIcon className="size-[14px]" />
              {""}
              {therapist?.location}
            </p>
            <p className="text-[13px] font-normal text-ft-gray-500 flex items-center gap-1.5">
              <img src={car} alt="car logo" className="h-[14px] w-[14px]" />
              {""}
              {therapist?.chember}
            </p>
          </span>
        </div>
      </div>
      {/* bottom section */}
      <button className="py-4 bg-ft-gray-400 text-ft-black hover:bg-ft-blue-500 hover:text-ft-white text-sm font-medium w-full rounded-b-[10px] hover:transition hover:duration-300">
        See Details
      </button>
    </div>
  );
};

export default TherapistCard;
