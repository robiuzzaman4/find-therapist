import { cities } from "../../constants";
import SectionTitle from "../shared/section-title";


const PopularCities = () => {
  return (
    <div className="flex flex-col gap-[18px] relative w-full h-full">
      <SectionTitle title="Popular Cities" className="px-4" />
      <div className="bg-ft-white h-full rounded-[10px] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {cities.slice(0, 3).map((city, index) => (
                <th
                  key={index}
                  className="text-sm text-left font-normal underline text-ft-blue-500 px-4 py-4 2xl:px-[30px] lg:py-[25px] border-b border-b-ft-gray-200 whitespace-nowrap"
                >
                  {city}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {cities.slice(3, 6).map((city, index) => (
                <th
                  key={index}
                  className="text-sm text-left font-normal underline text-ft-blue-500 px-4 py-4 2xl:px-[30px] lg:py-[25px] border-b border-b-ft-gray-200 whitespace-nowrap"
                >
                  {city}
                </th>
              ))}
            </tr>
            <tr>
              {cities.slice(6, 9).map((city, index) => (
                <th
                  key={index}
                  className="text-sm text-left font-normal underline text-ft-blue-500 px-4 py-4 2xl:px-[30px] lg:py-[25px] border-b border-b-ft-gray-200 whitespace-nowrap"
                >
                  {city}
                </th>
              ))}
            </tr>
            <tr>
              {cities.slice(9, 12).map((city, index) => (
                <th
                  key={index}
                  className="text-sm text-left font-normal underline text-ft-blue-500 px-4 py-4 2xl:px-[30px] lg:py-[25px] border-b border-b-ft-gray-200 whitespace-nowrap"
                >
                  {city}
                </th>
              ))}
            </tr>
            <tr>
              {cities.slice(12, 15).map((city, index) => (
                <th
                  key={index}
                  className="text-sm text-left font-normal underline text-ft-blue-500 px-4 py-4 2xl:px-[30px] lg:py-[25px] border-b border-b-ft-gray-200 whitespace-nowrap"
                >
                  {city}
                </th>
              ))}
            </tr>
            <tr>
              {cities.slice(15, 18).map((city, index) => (
                <th
                  key={index}
                  className="text-sm text-left font-normal underline text-ft-blue-500 px-4 py-4 2xl:px-[30px] lg:py-[25px] border-b border-b-ft-gray-200 whitespace-nowrap"
                >
                  {city}
                </th>
              ))}
            </tr>
            <tr>
              {cities.slice(18, 22).map((city, index) => (
                <th
                  key={index}
                  className="text-sm text-left font-normal underline text-ft-blue-500 px-4 py-4 2xl:px-[30px] lg:py-[25px] border-b border-b-ft-gray-200 whitespace-nowrap"
                >
                  {city}
                </th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularCities;
