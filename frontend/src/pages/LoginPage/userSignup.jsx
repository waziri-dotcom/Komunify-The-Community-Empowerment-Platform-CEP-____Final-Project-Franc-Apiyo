import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const UserSignup = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-100 flex items-center justify-center p-6">
      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full border border-emerald-200"
      >
        {/* Branding */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-emerald-700"
          >
            Komunify
          </motion.h1>

          <p className="text-gray-500 mt-2">
            Join the movement empowering communities.
          </p>
        </div>

        {/* Clerk Signup Component */}
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-emerald-600 hover:bg-emerald-700 text-white py-2",
              card: "shadow-md border border-gray-200",
            },
          }}
          routing="hash"
          path="/signup"
          signInUrl="/login"
          afterSignUpUrl="/"
        />

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>© {new Date().getFullYear()} Komunify — Community Empowerment Platform</p>
        </div>
      </motion.div>
    </div>
  );
};

export default UserSignup;
