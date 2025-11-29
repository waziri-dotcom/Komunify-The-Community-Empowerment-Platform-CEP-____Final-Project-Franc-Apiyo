import React from "react";
import { PlusCircle, Store, Trash2 } from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/button";

const SurplusListings = () => {
  const listings = [
    {
      id: 1,
      donor: "Java House - Westlands",
      foodType: "Cooked Meals",
      quantity: "45 Packs",
      expiry: "Today, 7:00 PM",
    },
    {
      id: 2,
      donor: "Carrefour Nairobi",
      foodType: "Fresh Vegetables",
      quantity: "32 KG",
      expiry: "Tomorrow, 10:00 AM",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Surplus Food Listings</h1>
        <Button className="flex items-center gap-2">
          <PlusCircle size={18} /> Add New Listing
        </Button>
      </div>

      <p className="text-gray-500">
        View all donated surplus food awaiting matching with verified recipients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((item) => (
          <Card key={item.id} className="rounded-xl shadow-sm border">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Store className="text-primary" />
                <h2 className="font-bold text-lg">{item.donor}</h2>
              </div>
              <p><strong>Food Type:</strong> {item.foodType}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Expiry:</strong> {item.expiry}</p>

              <Button variant="destructive" className="flex gap-2 mt-3 w-full">
                <Trash2 size={16} /> Remove Listing
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SurplusListings;
