import React from "react";
import { Calendar, Truck, Clock } from "lucide-react";
import Card from "../../components/ui/Card";

const PickupSchedule = () => {
  const pickups = [
    {
      id: 1,
      donor: "Java House",
      time: "Today - 5:30 PM",
      driver: "Peter Kamau",
      vehicle: "KDA 456L",
    },
    {
      id: 2,
      donor: "Carrefour",
      time: "Tomorrow - 9:00 AM",
      driver: "Mary Otieno",
      vehicle: "KCC 789F",
    },
  ];

  return (
    <div className="p-6 space-y-5">
      <h1 className="text-3xl font-semibold flex items-center gap-2">
        <Calendar /> Pickup Schedule
      </h1>

      <p className="text-gray-500">See all scheduled pickups and assigned drivers.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {pickups.map((pickup) => (
          <Card key={pickup.id} className="rounded-xl border shadow-sm">
            <CardContent className="p-4 space-y-3">
              <h2 className="font-bold text-xl">{pickup.donor}</h2>

              <p className="flex items-center gap-2">
                <Clock /> {pickup.time}
              </p>

              <p className="flex items-center gap-2">
                <Truck /> Driver: {pickup.driver} ({pickup.vehicle})
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PickupSchedule;
