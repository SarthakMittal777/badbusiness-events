import { useEffect, useState } from "react";
import { server } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { EventCard } from "./";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userEvents, setUserEvents] = useState([]);

  const getUserDetails = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
      const response = await server.get(`/api/v1/user/profile`, { headers });
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch user data. Please try again later.");
      console.error("Error fetching user details:", error);
      throw new Error("Error fetching user details");
    }
  };

  const getAttendedEvents = async (userId) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
      const response = await server.get(
        `/api/v1/user/${userId}/events-attended`,
        { headers }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching attended events:", error);
      throw new Error("Error fetching attended events");
    }
  };

  const fetchEventDetails = async (eventId) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
      const response = await server.get(`/api/v1/event/${eventId}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching event details:", error);
      throw new Error("Error fetching event details");
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const userDetails = await getUserDetails(userId);
        setUser(userDetails.user);

        const attendedEventsIds = await getAttendedEvents(userId);

        const eventDetails = await Promise.all(
          attendedEventsIds.map((eventId) => fetchEventDetails(eventId))
        );
        setUserEvents(eventDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [userId, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen py-2 text-black">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-4 text-white">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="mb-2">
          <span className="font-bold text-xl">Username: </span>
          <span className="text-xl">{user.username}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold text-xl">Email: </span>
          <span className="text-xl">{user.email}</span>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-white">Events Attended</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 mt-4">
        {userEvents?.map((event) => (
          <EventCard
            key={event.event._id}
            event={event.event}
            className="text-white"
          />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
