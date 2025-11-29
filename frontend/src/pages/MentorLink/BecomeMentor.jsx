import React, { useState } from "react";

export default function BecomeMentor() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    expertise: "",
    bio: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Become a Mentor</h1>
      <p className="text-gray-600">
        Share your expertise and support community members on their journey.
      </p>

      <form className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="input"
        />

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="input"
        />

        <input
          name="expertise"
          placeholder="Area of Expertise (e.g., Business, Tech…) "
          value={form.expertise}
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="bio"
          placeholder="Brief Bio"
          value={form.bio}
          onChange={handleChange}
          className="input h-32"
        />

        <button className="btn-primary w-full">Submit Application</button>
      </form>
    </div>
  );
}
