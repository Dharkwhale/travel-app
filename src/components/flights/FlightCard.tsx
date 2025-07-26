
import { IoIosClose } from "react-icons/io";
import {
  PiSuitcaseRolling,
  PiFilmSlateBold,
  PiForkKnifeBold,
  PiUsbBold,
  PiPlusBold,
} from "react-icons/pi";
import type { FlightCardProps } from "../../constants/interface";

const FlightCard = ({
  cardImage,
  cardTitle,
  currency,
  totalPrice,
  isAdded = false,
  onToggleFlight = () => {},
}: FlightCardProps & { isAdded?: boolean; onToggleFlight?: () => void }) => {
  return (
    <div className="w-[100%] h-[260px] flex rounded overflow-hidden my-4">
      <div className="w-[97%] bg-white p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-4">
            <img src={cardImage} className="w-9 h-9" alt={"flight_img"} />
            <div className="flex flex-col gap-1">
              <div className="text-xl font-semibold">
                <span>{cardTitle}</span>
              </div>
              <div className="flex gap-2 font-medium">
                <div className="flexSubCenter text-[#676E7E] text-sm">
                  <span>AA-829</span>
                </div>
                <div className="w-[70px] h-[25px] rounded-md px-1 py-1 items-center justify-center flex font-extralight text-white bg-blue-800 text-[11px]">
                  First Class
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex flex-col justify-end items-center">
              <span className="text-xl font-semibold ">08:35</span>
              <span className="pl-4 text-xs">Sun, 20 Aug</span>
            </div>
            <img
              src={"/images/time.svg"}
              className="h-[90px] w-[300px]"
              alt={"flight_img"}
            />
            <div className="flex flex-col justify-start items-center">
              <span className="text-xl font-semibold">21:00</span>
              <span className="pl-4 text-xs">Sun, 22 Aug</span>
            </div>
          </div>
          <div>
            <span className="text-xl ml-2">{currency}</span>
            <span className="text-xl font-semibold ml-2">{totalPrice}</span>
          </div>
        </div>
        <hr className="text-[#E4E7EC]" />
        <div className="flex gap-4 text-[#647995] text-sm font-medium">
          <span>Facilities: </span>
          <div className="flexCenter flex gap-1">
            <PiSuitcaseRolling size={16} />
            <span>Baggage: 20kg, Cabin Baggage: 8kg</span>
          </div>
          <div className="flexCenter flex gap-1">
            <PiFilmSlateBold size={16} />
            <span>In Flight Entertainment</span>
          </div>
          <div className="flexCenter flex gap-1">
            <PiForkKnifeBold size={16} /> <span>In Flight meal</span>
          </div>
          <div className="flexCenter flex gap-1">
            <PiUsbBold size={16} />
            <span>USB Port </span>
          </div>
        </div>
        <hr className="text-[#E4E7EC]" />
        <div className="flex justify-between text-sm font-medium text-[#0D6EFD]">
          <div className="flex gap-4 pt-3">
            <span>Flight Details </span>
            <span>Price Details</span>
          </div>
          <span className="pt-3">Edit Details</span>
        </div>
      </div>

      <div
        className={`w-[3%] flex items-center justify-center cursor-pointer ${
          isAdded ? "bg-red-50" : "bg-green-50"
        }`}
        onClick={onToggleFlight}
      >
        {isAdded ? (
          <IoIosClose size={32} color={"#9E0A05"} />
        ) : (
          <PiPlusBold size={20} color={"#0A9E05"} />
        )}
      </div>
    </div>
  );
};

export default FlightCard;
