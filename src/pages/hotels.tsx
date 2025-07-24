
import {useEffect, useState} from "react";
import HotelCard from "../components/hotels/HotelCard";
import EmptyStateCard from "../components/empty/EmptyStateCard";
import { PiWarehouseBold } from "react-icons/pi";
import { searchNewHotels } from "../api/bookingAPI";
import type { Hotel } from "../constants/interface";
import LoadingScreen from "../components/LoadingScreen";

export const HotelList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await searchNewHotels();
        console.log("Fetched hotels:", data);
        setHotels(data);
        
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);
    console.log(hotels);


  if (loading) return <LoadingScreen />

  return (
    <div className="w-[100%] p-6 mt-22 pb-20 gap-16 bg-white rounded">
      <div className="mb-8">
        <h1 className="font-bold text-xl text-[#1d2433] mb-1">
          Hotel Itineraries
        </h1>
        <h6 className="font-normal text-base text-[#6479a3]">
          All bookings for hotel are here
        </h6>
      </div>

      <div className="bg-[#344054] p-4 rounded">
        <div className="flexBetween">
          <div className="flex gap-2 items-end">
            <PiWarehouseBold size={22} color={"#fff"} />
            <span className="white-subheading text-[#ffffff]"> Hotels</span>
          </div>
        </div>

        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <HotelCard
              key={hotel.hotel_id}
              cardImage={hotel.property.photoUrls[0]}
              cardTitle={hotel.property.name}
              address={hotel.property.countryCode}
              currency={hotel.property.priceBreakdown.grossPrice.currency}
              excludedPrice={hotel.property.priceBreakdown.excludedPrice.value}
              grossPrice={hotel.property.priceBreakdown.grossPrice.value}
              reviewScore={hotel.property.reviewScore}
              reviewCount={hotel.property.reviewCount}
              checkInDate={hotel.property.checkinDate}
              checkOutDate={hotel.property.checkoutDate}
            />
          ))
        ) : (
          <EmptyStateCard
            emptyImage={"/images/EmptyHotel.svg"}
            emptyLink={"/hotels"}
            emptyButton={"Add Hotel"}
          />
        )}
      </div>
    </div>
  );
};

