

export const ActivitySection = () => {
  return (
    <div className="flex gap-2">
    <div className="rounded-lg border border-[#000031] p-4 w-[270px] h-[193px] bg-[#000031] ">
        <h3 className="text-[#ffffff] font-bold pb-2 text-base">
            Activities
        </h3>
<p className="text-[#ffffff] text-sm leading-[22px]">
            Build, personalize, and optimize your itineraries with our trip planner 
        </p>
        <div className="mt-12">
          <p className="rounded-md py-3 font-medium pb-2 text-center px-6 text-white text-sm bg-[#0d6efd]">
            <a href="/activities">Add Activities</a>
          </p>
        
        </div>
    </div>

    <div className="rounded-lg border border-[#e7f0ff] p-4 w-[270px] h-[193px] bg-[#e7f0ff] ">
        <h3 className="text-[#1d2433] font-bold pb-2 text-base">
            Hotels
        </h3>
        <p className="text-[#1d2433] text-sm leading-[22px]">
            Build, personalize, and optimize your itineraries with our trip planner 
        </p>
        <div className="mt-12">
          <p className="rounded-md py-3 pb-2 font-medium text-center px-6 text-white text-sm bg-[#0d6efd]">
            <a href="/hotels">Add Hotels</a>
          </p>
        
        </div>
    </div>

    <div className="rounded-lg border border-[#0d6efd] p-4 w-[270px] h-[193px] bg-[#0d6efd] ">
        <h3 className="text-[#ffffff] font-bold pb-2 text-base">
            Flights
        </h3>
        <p className="text-[#ffffff] text-sm leading-[22px]">
            Build, personalize, and optimize your itineraries with our trip planner 
        </p>
        <div className="mt-12">
          <p className="rounded-md py-3 pb-2 font-medium text-center px-6 text-[#0d6efd] text-sm bg-[#ffffff]">
            <a href="/flights">Add Flights</a>
          </p>
        
        </div>
    </div>
    </div>
  )
}

