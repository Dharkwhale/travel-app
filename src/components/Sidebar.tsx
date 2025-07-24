
import { Link, useLocation } from "react-router-dom";
import Activities from "../assets/side_icons/Activities.svg";
import Hotels from "../assets/side_icons/Hotels.svg";
import Flights from "../assets/side_icons/Flights.svg";
import Student from "../assets/side_icons/Student.svg";
import Visa from "../assets/side_icons/Visa.svg";
import Immigration from "../assets/side_icons/Immigration.svg";
import Medical from "../assets/side_icons/Immigration.svg";
import Packages from "../assets/side_icons/Package.svg";
import { ChevronsUpDown } from "lucide-react";

export const Sidebar = () => {
  const location = useLocation();

  const sidebarItems = [
    { icon: Activities, label: "Activities", path: "/activities" },
    { icon: Hotels, label: "Hotels", path: "/hotels" },
    { icon: Flights, label: "Flights", path: "/flights" },
    { icon: Student, label: "Study", path: "/study" },
    { icon: Visa, label: "Visa", path: "/visa" },
    { icon: Immigration, label: "Immigration", path: "/immigration" },
    { icon: Medical, label: "Medical", path: "/medical" },
    { icon: Packages, label: "Vacation Packages", path: "/packages" },
  ];

  return (
    <div className="border-[#ffffff] font-poppins  rounded-md h-[700px] w-[350px] bg-[#ffffff]  mt-22">
      <div className="pt-6 pl-6 ">
        {/* Sidebar items */}
        {sidebarItems.map((item, index) => (
          <Link key={index} to={item.path} className="block">
            <div className={`flex items-center gap-3 pb-6 hover:bg-gray-50 mx-2 px-3 py-2 rounded-md transition-colors ${
              location.pathname === item.path ? 'bg-blue-50' : ''
            }`}>
              <img src={item.icon} width={22} height={22} className="" alt={item.label} />
              <h3 className={`font-[poppins] text-sm gap-7 ${
                location.pathname === item.path ? 'text-blue-600 font-semibold' : 'text-[#647995]'
              }`}>
                {item.label}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Dropdown Card */}
      <div className="pt-12">
      <div className="rounded-md bg-[#f0f2f5] py-3 h-[72px] mx-4 flex items-center justify-between px-4  cursor-pointer"
           
      > 
          <div className="flex items-center justify-center gap-2">    
        <div className="rounded-md bg-[#0d6efd] w-[40px] h-[40px] flex items-center justify-center text-white text-sm font-semibold">
          GO
        </div>
        <div className="flex gap-2 justify-center items-center text-xs font-[poppins] text-gray-700">
          <p>Personal Account</p>
          <ChevronsUpDown size={22} />
        </div>
        </div> 
      </div>
      </div>
    </div>
  );
};
