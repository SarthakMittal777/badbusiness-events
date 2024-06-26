import { useEffect, useState } from "react";
import { EventCard } from "./";
import { server } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    server
      .get("/api/v1/event")
      .then((res) => {
        // console.log(res.data);
        const events = res.data.events;
        setEvents(events);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch events");
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-center">
      <ToastContainer />
      <div className="py-4">
        <h2 className="text-3xl font-semibold text-gray-200">
          Explore the&nbsp;
          <span className="text-transparent bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 bg-clip-text">
            Events
          </span>
        </h2>
        <p className="text-lg mt-4">
          Get enlightened with Founders Talks, Podcast, Startup Funding Rounds,
          Become a CEO with us!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          events.map((event) => <EventCard key={event.slug} event={event} />)
        )}
      </div>
    </div>
  );
};

export default AllEvents;
