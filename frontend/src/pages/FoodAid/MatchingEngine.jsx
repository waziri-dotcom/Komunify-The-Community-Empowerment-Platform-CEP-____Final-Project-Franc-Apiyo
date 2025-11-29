import React from "react";
import { Shuffle, CheckCircle, Users } from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/button";

const MatchingEngine = () => {
  const matches = [
    {
      id: 1,
      donor: "Java House - Westlands",
      recipient: "Kibera Community Center",
      status: "Pending Pickup",
    },
    {
      id: 2,
      donor: "Carrefour Nairobi",
      recipient: "Huruma Orphanage",
      status: "Matched",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold flex items-center gap-2">
        <Shuffle /> Matching Engine
      </h1>

      <p className="text-gray-500">
        This engine automatically pairs donors with nearest verified beneficiaries.
      </p>

      <div className="space-y-4">
        {matches.map((match) => (
          <Card key={match.id} className="border shadow-sm rounded-xl">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{match.donor}</h2>
                <span className="text-sm text-gray-500">{match.status}</span>
              </div>

              <p className="flex items-center gap-2">
                <Users className="text-primary" /> Recipient:{" "}
                <strong>{match.recipient}</strong>
              </p>

              <Button className="flex items-center gap-2">
                <CheckCircle size={16} /> Confirm Match
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MatchingEngine;
