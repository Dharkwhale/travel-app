// import { createContext, useContext, useState, type ReactNode } from 'react';
// import type { MockHotel } from '../data/mockHotels';

// interface HotelContextType {
//   selectedHotels: MockHotel[];
//   addSelectedHotel: (hotel: MockHotel) => void;
//   removeSelectedHotel: (hotelId: string) => void;
//   clearSelectedHotels: () => void;
// }

// const HotelContext = createContext<HotelContextType | undefined>(undefined);

// export const useHotelContext = () => {
//   const context = useContext(HotelContext);
//   if (!context) {
//     throw new Error('useHotelContext must be used within a HotelProvider');
//   }
//   return context;
// };

// interface HotelProviderProps {
//   children: ReactNode;
// }

// export const HotelProvider = ({ children }: HotelProviderProps) => {
//   const [selectedHotels, setSelectedHotels] = useState<MockHotel[]>([]);

//   const addSelectedHotel = (hotel: MockHotel) => {
//     setSelectedHotels(prev => {
//       // Check if hotel is already selected
//       const exists = prev.find(h => h.id === hotel.id);
//       if (exists) {
//         return prev;
//       }
//       return [...prev, hotel];
//     });
//   };

//   const removeSelectedHotel = (hotelId: string) => {
//     setSelectedHotels(prev => prev.filter(hotel => hotel.id !== hotelId));
//   };

//   const clearSelectedHotels = () => {
//     setSelectedHotels([]);
//   };

//   return (
//     <HotelContext.Provider value={{
//       selectedHotels,
//       addSelectedHotel,
//       removeSelectedHotel,
//       clearSelectedHotels
//     }}>
//       {children}
//     </HotelContext.Provider>
//   );
// };