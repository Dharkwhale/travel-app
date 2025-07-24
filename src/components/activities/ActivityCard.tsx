

import { IoIosClose } from "react-icons/io";
import { PiPlusBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { PiClock } from "react-icons/pi";
import { truncateText } from "../../utils/truncateText";
import type { ActivityCardProps } from "../../constants/interface";
import caret from "../../assets/images/caret.svg";

const ActivityCard = ({
  cardImage,
  cardTitle,
  description,
  currency,
  price,
  averageRatings,
  overallRating,
  isAdded,
  onToggleActivity = () => {},
}: ActivityCardProps & { isAdded?: boolean; onToggleActivity?: () => void }) => {
  return (
    <div className="w-[100%] h-[260px] flex rounded overflow-hidden my-4">
      <div className="w-[97%] bg-white p-4 flex gap-4">
        <div className="card-img">
          <img src={cardImage} alt="empty_image" className="card-img h-[232px] w-[224px] object-cover rounded  overflow-hidden" />
        </div>

        <div className="flex flex-col gap-4 w-[100%]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold m-0">{cardTitle}</h3>
              <div className="text-sm max-w-[400px]">
                <span>{truncateText(description)}</span>
              </div>
              <div className="flex gap-4 font-medium">
                <div className="flexSubCenter gap-1 flex text-[#0054E4] text-sm">
                  <IoLocationOutline size={16} />
                  <span>Directions</span>
                </div>
                <div className="flexSubCenter gap-1 flex text-gray-100 text-sm">
                  <FaStar size={16} color={"#F4B93E"} />
                  <span className="text-[#676E7E]">{averageRatings}</span>
                  <span className="text-[#676E7E]">({overallRating})</span>
                </div>
                <div className="flexSubCenter gap-1 flex text-gray-100 text-sm">
                  <PiClock size={16} color={"#344054"} />
                  <span className="text-[#676E7E]">1 Hour</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <div>
                <span className="text-xl ml-2">{currency}</span>
                <span className="text-xl font-semibold ml-2">{price}</span>
              </div>
              <span className="text-[12px] ml-4">10:30 AM on Mar 19</span>
            </div>
          </div>
          <hr className="text-[#E4E7EC] " />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-[#647995] text-sm font-medium">
              <span>What's included: </span>
              <span>Admission to the Empire State Building</span>
              <span className=" text-[#0D6EFD] text-sm">See more</span>
            </div>
            <div>
              <img
                src={caret}
                width={90}
                height={60}
                alt="empty_image"
              />
            </div>
          </div>
          <hr className="h-[1px] w-[100%] text-[#E4E7EC] pb-3"/>

          <div className="flex justify-between text-sm font-medium text-[#0D6EFD]">
            <div className="flex gap-4">
              <span>Activity Details </span>
              <span>Price Details</span>
            </div>
            <span>Edit Details</span>
          </div>
        </div>
      </div>

      <div
        className={`w-[3%] flex items-center justify-center cursor-pointer ${
          isAdded ? "bg-red-50" : "bg-green-50"
        }`}
        onClick={onToggleActivity}
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

export default ActivityCard;
