
import  { useEffect, useState } from "react";
import ActivityCard from "../components/activities/ActivityCard";
import EmptyStateCard from "../components/empty/EmptyStateCard";
import { PiRoadHorizonBold } from "react-icons/pi";
import type { Activity } from "../constants/interface";
import { searchNewActivities } from "../api/bookingAPI";
import LoadingScreen from "../components/LoadingScreen";
import Layout from "../Layout"

export const ActivityList = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await searchNewActivities();
        setActivities(data);
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

    if (loading) return <LoadingScreen />;

    
  return (
    <Layout>
    <div className="w-[100%] p-6 mt-22 pb-20 gap-16 bg-white rounded">
      <div className="mb-8">
        <h1 className="font-bold text-xl text-[#1d2433] mb-1">
          Activity Itineraries
        </h1>
        <h6 className="font-normal text-base text-[#6479a3]">
          All activites informations are placed here
        </h6>
      </div>

      <div className="bg-[#0054E4] p-4 rounded">
        <div className="flex gap-2 items-end mb-3">
          <PiRoadHorizonBold size={22} color={"#fff"} />
          <span className="white-subheading text-[#ffffff]"> Activities</span>
        </div>

        {activities.length > 0 ? (
          activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              cardImage={activity.primaryPhoto?.small}
              cardTitle={activity.name}
              description={activity.shortDescription}
              currency={activity.representativePrice.currency}
              price={activity.representativePrice.chargeAmount}
              averageRatings={
                activity.reviewsStats?.combinedNumericStats?.average
              }
              overallRating={activity.reviewsStats?.combinedNumericStats?.total}
            />
          ))
        ) : (
          <EmptyStateCard
            emptyImage={"/images/EmptyActivity.svg"}
            emptyLink={"/activities"}
            emptyButton={"Add Activity"}
          />
        )}
      </div>
    </div>
    </Layout>
  );
};


