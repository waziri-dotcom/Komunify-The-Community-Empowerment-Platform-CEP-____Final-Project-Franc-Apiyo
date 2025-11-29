import React, { useState } from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Shield, Zap, Lock, Users } from 'lucide-react';

export default function AdminLogin() {
  const [role, setRole] = useState('admin');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-forest-green-900 to-slate-900 flex items-center justify-center p-4">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-gold" />
            <h1 className="text-4xl font-bold text-white">Komunify</h1>
          </div>
          <p className="text-mint text-sm font-semibold">Admin Governance Panel</p>
          <p className="text-slate-300 text-xs mt-2">Secure Access • Role-Based Control • Community Oversight</p>
        </div>

        {/* Role Selector */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 mb-6 border border-gold border-opacity-20">
          <label className="block text-white text-sm font-semibold mb-4">Select Admin Role</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'admin', label: 'System Admin', icon: Shield },
              { id: 'moderator', label: 'Moderator', icon: Users },
              { id: 'analyst', label: 'Analyst', icon: Zap },
              { id: 'support', label: 'Support Lead', icon: Lock },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setRole(id)}
                className={`p-3 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                  role === id
                    ? 'bg-gold bg-opacity-20 border-gold text-gold'
                    : 'bg-white bg-opacity-5 border-slate-600 text-slate-300 hover:border-mint'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Clerk Sign-In */}
        <div className="bg-white bg-opacity-95 rounded-xl shadow-2xl p-8 mb-6">
          <SignIn
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'w-full shadow-none',
                headerTitle: 'text-2xl font-bold text-forest-green-900',
                headerSubtitle: 'text-slate-600',
                formButtonPrimary:
                  'bg-gradient-to-r from-forest-green-600 to-forest-green-700 hover:from-forest-green-700 hover:to-forest-green-800 text-white font-semibold',
                formFieldInput:
                  'border-2 border-slate-300 focus:border-gold focus:ring-gold rounded-lg',
                footerActionLink: 'text-forest-green-600 hover:text-forest-green-700',
                dividerLine: 'bg-slate-200',
                dividerText: 'text-slate-500',
              },
            }}
            redirectUrl={`/admin/dashboard?role=${role}`}
            routing="virtual"
          />
        </div>

        {/* Footer */}
        <p className="text-center text-slate-400 text-xs mt-6">
          By signing in, you agree to Komunify’s{" "}
          <a href="#" className="text-gold hover:text-gold/80 underline">Privacy Policy</a>{" "}
          &{" "}
          <a href="#" className="text-gold hover:text-gold/80 underline">Terms of Service</a>
        </p>
      </div>
    </div>
  );
}
