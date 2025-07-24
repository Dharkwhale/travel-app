// import { createContext, useContext, useState, type ReactNode } from 'react';
// import type { MockFlight } from '../data/mockFlights';

// interface FlightContextType {
//   selectedFlights: MockFlight[];
//   addSelectedFlight: (flight: MockFlight) => void;
//   removeSelectedFlight: (flightId: string) => void;
//   clearSelectedFlights: () => void;
// }

// const FlightContext = createContext<FlightContextType | undefined>(undefined);

// export const useFlightContext = () => {
//   const context = useContext(FlightContext);
//   if (!context) {
//     throw new Error('useFlightContext must be used within a FlightProvider');
//   }
//   return context;
// };

// interface FlightProviderProps {
//   children: ReactNode;
// }

// export const FlightProvider = ({ children }: FlightProviderProps) => {
//   const [selectedFlights, setSelectedFlights] = useState<MockFlight[]>([]);

//   const addSelectedFlight = (flight: MockFlight) => {
//     setSelectedFlights(prev => {
//       // Check if flight is already selected
//       const exists = prev.find(f => f.id === flight.id);
//       if (exists) {
//         return prev;
//       }
//       return [...prev, flight];
//     });
//   };

//   const removeSelectedFlight = (flightId: string) => {
//     setSelectedFlights(prev => prev.filter(flight => flight.id !== flightId));
//   };

//   const clearSelectedFlights = () => {
//     setSelectedFlights([]);
//   };

//   return (
//     <FlightContext.Provider value={{
//       selectedFlights,
//       addSelectedFlight,
//       removeSelectedFlight,
//       clearSelectedFlights
//     }}>
//       {children}
//     </FlightContext.Provider>
//   );
// };