import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { RightSection } from '../components/RightSection';
// import { FlightProvider } from '../context/FlightContext';
import { FlightList } from '../pages/flights';
import { HotelList } from '../pages/hotels';
import { ActivityList } from '../pages/activities';

export const Router = () => {
    return (
        <BrowserRouter>
            {/* <FlightProvider> */}
                {/* <HotelProvider> */}
                {/* <ActivityProvider> */}
                    <div className="">
                    <Navbar />
                    <div className="bg-[#f0f2f5] p-6 flex gap-10">
                        <Sidebar />
                        <Routes>
                        <Route path="/" element={<RightSection />} /> 
                        <Route path="/flights" element={<FlightList />}/>
                        <Route path="/hotels" element={<HotelList />} />
                        <Route path="/activities" element={<ActivityList />} /> 
                        </Routes>
                    </div>
                    </div>
                {/* </ActivityProvider> */}
                {/* </HotelProvider> */}
            {/* </FlightProvider> */}
            </BrowserRouter>
  );
}

