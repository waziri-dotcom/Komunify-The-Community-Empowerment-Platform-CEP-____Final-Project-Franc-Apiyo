import React from "react";
import { BadgeCheck, Search, Users } from "lucide-react";
import Button from "../../components/ui/button";
import Card from "../../components/ui/Card";

const RecipientVerification = () => {
  const recipients = [
    {
      id: 1,
      name: "Kibera Community Center",
      status: "Verified",
      members: 320,
    },
    {
      id: 2,
      name: "Huruma Youth Group",
      status: "Pending",
      members: 120,
    },
  ];

  return (
    <div className="p-6 space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          <BadgeCheck /> Recipient Verification
        </h1>

        <Button variant="outline" className="flex items-center gap-2">
          <Search size={16} /> Search Recipients
        </Button>
      </div>

      <p className="text-gray-500">Approve, reject, or verify community beneficiaries.</p>

      <div className="space-y-4">
        {recipients.map((rec) => (
          <Card key={rec.id} className="rounded-xl border shadow-sm">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{rec.name}</h2>
                <p className="flex items-center gap-2 text-gray-600">
                  <Users size={16} /> {rec.members} Members
                </p>
              </div>

              <Button
                variant={rec.status === "Verified" ? "secondary" : "default"}
              >
                {rec.status}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipientVerification;
