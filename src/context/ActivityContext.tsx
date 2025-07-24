// import { createContext, useContext, useState, type ReactNode } from 'react';
// import type { Activity } from '../data/mockActivities';

// interface ActivityContextType {
//   selectedActivities: Activity[];
//   addSelectedActivity: (activity: Activity) => void;
//   removeSelectedActivity: (activityId: number) => void;
//   clearSelectedActivities: () => void;
// }

// const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

// export const useActivityContext = () => {
//   const context = useContext(ActivityContext);
//   if (!context) {
//     throw new Error('useActivityContext must be used within an ActivityProvider');
//   }
//   return context;
// };

// interface ActivityProviderProps {
//   children: ReactNode;
// }

// export const ActivityProvider = ({ children }: ActivityProviderProps) => {
//   const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);

//   const addSelectedActivity = (activity: Activity) => {
//     setSelectedActivities(prev => {
//       const exists = prev.find(a => a.id === activity.id);
//       if (exists) {
//         return prev;
//       }
//       return [...prev, activity];
//     });
//   };

//   const removeSelectedActivity = (activityId: number) => {
//     setSelectedActivities(prev => prev.filter(activity => activity.id !== activityId));
//   };

//   const clearSelectedActivities = () => {
//     setSelectedActivities([]);
//   };

//   return (
//     <ActivityContext.Provider value={{
//       selectedActivities,
//       addSelectedActivity,
//       removeSelectedActivity,
//       clearSelectedActivities
//     }}>
//       {children}
//     </ActivityContext.Provider>
//   );
// };