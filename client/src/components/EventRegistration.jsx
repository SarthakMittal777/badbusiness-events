import React, { useState } from "react";
import { useParams } from "react-router";
import { server } from "../api";

const RegisterEventForm = () => {
  const { slug } = useParams();
  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendeeType, setAttendeeType] = useState("organization");
  const [typeName, setTypeName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await server.put(`/api/v1/event/register/${slug}`, {
        attendeeName,
        email,
        phone,
        attendeeType,
        typeName,
      });

      if (response.data.success) {
        alert("Registration successful!");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-white flex justify-center items-center p-4">
      <div className="bg-neutral-600/80 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-4">Register for Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="attendeeName">
              Name
            </label>
            <input
              type="text"
              id="attendeeName"
              placeholder="Enter Your Name"
              value={attendeeName}
              onChange={(e) => setAttendeeName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Your Phone No."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="attendeeType">
              Type
            </label>
            <select
              id="attendeeType"
              value={attendeeType}
              onChange={(e) => setAttendeeType(e.target.value)}
              required
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800">
              <option value="institute">Institute</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="typeName">
              Organization/ Institute Name
            </label>
            <input
              type="text"
              id="typeName"
              placeholder="Enter Your Organization/ Institute Name"
              value={typeName}
              onChange={(e) => setTypeName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 mt-6 bg-neutral-200 text-black font-bold rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterEventForm;
