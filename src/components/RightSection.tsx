

import { Hero } from "./Hero"
import { TripHeader } from "./TripHeader"
import { ActivitySection } from "./ActivitySection"
// import { FlightSection } from "./FlightSection"
import Flights from "./flights/Flights"
import Hotels from "./hotels/Hotels"
import Activities from "./activities/Activities"
export const RightSection = () => {
  return (
    <div className="bg-[#ffffff] p-6 border-[#ffffff]  mt-22 ">
        <Hero />
        <TripHeader />
        <ActivitySection />
        <div className="mt-[80px]">
      <div className="">
        <h1 className="font-semibold text-xl text-[#1D2433] mb-1 leading-7">Trip Itineraries</h1>
        <h6 className="font-normal text-base text-[#647995] mb-8 leading-[22px]">
          Your trip itineraries are placed here
        </h6>
      </div>

      <div className='flex flex-col gap-4'>
        <Flights />
        <Hotels />
        <Activities />
      </div>
    </div>
    </div>
  )
}

 
