import { CiCalendar } from "react-icons/ci";
import { MdArrowForward } from "react-icons/md";
import { PiUserPlus } from "react-icons/pi";
import { MoreHorizontal, Settings } from "lucide-react";
import One from "../assets/images/one.png"

export const TripHeader = () => {
  return (
    <div>
        <div className="flex">
            <div className='flex justify-between pt-4'>
            <div className='flex bg-[#fdefdb] px-2 h-6 font-semibold  border border-gray-200 text-sm'> 
            <div className='flex items-center text-[#6d4103] space-x-1'>
                <CiCalendar size={16}/><span>21 March 2024</span>
                <MdArrowForward size={16} /><span>21 April 2024</span>
            </div>
            
            </div>
            </ div>

            <div className=' flex items-center justify-between ml-auto pt-4'>
                <div className="flex items-center justify-center w-40 mr-3 py-3 bg-[#e7f0ff]  rounded-lg">
                    <a href="/"><PiUserPlus className="text-[#0d6efd]" size={20} /></a>
                </div>
                    <MoreHorizontal className="text-[#344054" size={20} />
                </div>

        </div>
    <div className="flex">
        <div>
        <div className="font-[poppins] text-2xl font-extrabold">
            <h2>Bahamas Family Trip</h2>
        </div>
        <div className="font-medium pt-2 pb-3 text-base font-[poppins] text-[#647995]">
            <h6 >New York, United States Of America | Solo Trip</h6>
        </div>
        </div>
        <div className="ml-auto pt-8">
        <div className="flex justify-between items-center">
            <img src={One} alt="" />
            <div className="justify-center"><p className="h-0.5 w-8 bg-gray-300 "></p></div>
            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full bg-white shadow mr-14">
            <a href=""><Settings className="text-gray-500" size={18} /></a>
            </div>
        </div>
        
        
        </div>
        </div>
    </div>
  )
}

