import React from "react";
import { MapPin, Radio, Truck } from "lucide-react";
import Card from "../../components/ui/Card";

const RealTimeTracking = () => {
  const trackingData = [
    {
      id: 1,
      driver: "Peter Kamau",
      location: "Ngong Road",
      status: "On Route",
    },
    {
      id: 2,
      driver: "Mary Otieno",
      location: "Thika Superhighway",
      status: "Near Destination",
    },
  ];

  return (
    <div className="p-6 space-y-5">
      <h1 className="text-3xl font-semibold flex items-center gap-2">
        <Radio /> Real-Time Tracking
      </h1>

      <p className="text-gray-500">
        Monitor live movement of pickups from donors to recipient communities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {trackingData.map((track) => (
          <Card key={track.id} className="rounded-xl shadow-sm border">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Truck /> {track.driver}
              </h2>
              <p className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} /> {track.location}
              </p>
              <span className="text-primary font-medium">{track.status}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RealTimeTracking;
