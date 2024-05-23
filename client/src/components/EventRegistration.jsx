import React, { useState } from "react";
import { useParams } from "react-router";
import { server } from "../api";

const RegisterEventForm = () => {
  const { slug } = useParams();
  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendeeType, setAttendeeType] = useState("individual");
  const [typeName, setTypeName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await server.post(`/api/v1/event/register/${slug}`, {
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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Register for Event</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="attendeeName">
          Name
        </label>
        <input
          type="text"
          id="attendeeName"
          value={attendeeName}
          onChange={(e) => setAttendeeName(e.target.value)}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="phone">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded-lg"
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
          className="w-full border border-gray-300 px-3 py-2 rounded-lg">
          <option value="individual">Individual</option>
          <option value="organization">Organization</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="typeName">
          Type Name
        </label>
        <input
          type="text"
          id="typeName"
          value={typeName}
          onChange={(e) => setTypeName(e.target.value)}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Register
      </button>
    </form>
  );
};

export default RegisterEventForm;
