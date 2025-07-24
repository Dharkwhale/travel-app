import { useState } from "react";
import logo from "../assets/images/logo.svg";
import house from "../assets/images/House.svg";
import Wallet from "../assets/images/Wallet.svg";
import ChartPieSlice from "../assets/images/ChartPieSlice.svg";
import ListChecks from "../assets/images/ListChecks.svg";
import HandCoins from "../assets/images/HandCoins.svg";
import PlusSquare from "../assets/images/PlusSquare.svg";
import Basket from "../assets/images/Basket.svg";
import Bell from "../assets/images/Bell.svg";
import SearchBar from "./SearchBar";
import Ellipse from "../assets/images/Ellipse.svg";
import { ChevronDown } from "lucide-react";
import type { Activity, FlightData, Hotel } from "../constants/interface";


export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [addedActivities, setAddedActivities] = useState<Activity[]>([]);
  // const [addedFlights, setAddedFlights] = useState<FlightData[]>([]);
  // const [addedHotels, setAddedHotels] = useState<Hotel[]>([]);


  const [flights, setFlights] = useState<FlightData[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);


  const handleFlightAddRemove = (flight: FlightData) => {
    const flightIndex = flights.findIndex(
      (f) => f.iataCode === flight.iataCode
    );
    if (flightIndex === -1) {
      setFlights([...flights, flight]);
    } else {
      setFlights(flights.filter((f) => f.iataCode !== flight.iataCode));
    }
  };

  const handleActivityAddRemove = (activity: Activity) => {
    const activityIndex = activities.findIndex((a) => a.id === activity.id);
    if (activityIndex === -1) {
      setActivities([...activities, activity]);
    } else {
      setActivities(activities.filter((a) => a.id !== activity.id));
    }
  };

  const handleHotelAddRemove = (hotel: Hotel) => {
    const hotelIndex = hotels.findIndex((h) => h.hotel_id === hotel.hotel_id);
    if (hotelIndex === -1) {
      setHotels([...hotels, hotel]);
    } else {
      setHotels(hotels.filter((h) => h.hotel_id !== hotel.hotel_id)); 
    }
  };

  const toggleProfileDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="flex justify-between text-small items-center pt-4 pb-4 pr-6 pl-6 bg-white shadow-sm fixed top-0 z-10 w-full">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-6">
        <a href="/"><img src={logo} width={48} height={48} className="" alt="Logo" /></a>
        <div className="rounded-md border-[#d3d6da] bg-[#F0F2F5]">
        <SearchBar
            onActivityAddRemove={handleActivityAddRemove}
            onFlightAddRemove={handleFlightAddRemove}
            onHotelAddRemove={handleHotelAddRemove}
          />
        </div>
      </div>

      {/* Right: Navigation Icons */}
      <div className="flex items-center gap-5">
        {[
          { icon: house, label: "Home" },
          { icon: ChartPieSlice, label: "Dashboard" },
          { icon: Wallet, label: "Wallet" },
          { icon: ListChecks, label: "Plan a trip", highlight: true },
          { icon: HandCoins, label: "Commission for life" },
        ].map(({ icon, label, highlight }, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={icon} alt={label} width={22} height={22} className=" cursor-pointer" />
            <span
              className={`font-[poppins] pt-2 text-xs ${
                highlight ? "text-[#1d2433]" : "text-[#647995]"
              }`}
            >
              {label}
            </span>
          </div>
        ))}

        {/* Divider */}
        <div className="w-[1px] h-12 bg-gray-300"></div>

        {/* Subscribe Button */}
        <button className="px-4 py-2 bg-[#0d6efd] rounded-md h-10 w-24 text-[#e0edfe] text-sm font-medium cursor-pointer">
          Subscribe
        </button>

        {/* More Items */}
        {[
          { icon: Bell, label: "Notification" },
          { icon: Basket, label: "Carts" },
          { icon: PlusSquare, label: "Create" },
        ].map(({ icon, label }, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={icon} alt={label} width={22} height={22} className=" cursor-pointer" />
            <span className="text-sm pt-2 font-semibold text-[#647995]">{label}</span>
          </div>
        ))}

        {/* Profile */}
        <div className="relative ml-4">
          <div
            onClick={toggleProfileDropdown}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Ellipse} alt="Profile" width={42} height={42} className=" rounded-full" />
            <ChevronDown size={20} />
          </div>

          {/* Profile Dropdown */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg p-3 w-48 z-10">
              <p className="text-sm font-medium text-gray-700">My Profile</p>
              <p className="text-sm font-medium text-gray-700 mt-2">Settings</p>
              <p className="text-sm font-medium text-red-600 mt-2 cursor-pointer">Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
