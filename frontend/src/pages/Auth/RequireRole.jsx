import React from "react";
import { useUser } from "@clerk/clerk-react";

const RequireRole = ({ allowedRoles, children }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  const role = user?.publicMetadata?.role;

  if (allowedRoles.includes(role)) {
    return children;
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
      <p className="mt-2 text-gray-700">
        You do not have permission to view this page.
      </p>
    </div>
  );
};

export default RequireRole;
