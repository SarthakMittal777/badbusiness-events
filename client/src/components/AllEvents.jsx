import { useEffect, useState } from "react";
import { EventCard } from "./";
import { server } from "../api";

const AllEvents = () => {
  const [events, setEvents] = useState([
    {
      slug: "event-1",
      title: "Event 1",
      description: "Description of Event 1",
      date: "2024-04-02",
      time: "12:00",
      type: "Virtual",
      platform: "Zoom",
      venue: "",
      banner: "https://source.unsplash.com/1600x900/?event",
      attendees: 10,
      speakers: [
        {
          name: "John Doe",
          avatar: "https://source.unsplash.com/100x100/?person",
          description: "CEO, XYZ Company",
          profile: "https://linkedin.com/in/",
        },
        {
          name: "John Doe",
          avatar: "https://source.unsplash.com/200x200/?person",
          description: "CEO, XYZ Company",
          profile: "https://linkedin.com/in/",
        },
      ],
      hosts: [
        {
          name: "John Doe",
          avatar: "https://source.unsplash.com/100x100/?person",
          description: "CEO, XYZ Company",
          profile: "https://linkedin.com/in/",
        },
        {
          name: "John Doe",
          avatar: "https://source.unsplash.com/200x200/?person",
          description: "CEO, XYZ Company",
          profile: "https://linkedin.com/in/",
        },
      ],
      sponsors: [
        {
          name: "John Doe",
          avatar: "https://source.unsplash.com/100x100/?person",
          description: "CEO, XYZ Company",
          profile: "https://linkedin.com/in/",
        },
        {
          name: "John Doe",
          avatar: "https://source.unsplash.com/100x300/?person",
          description: "CEO, XYZ Company",
          profile: "https://linkedin.com/in/",
        },
      ],
    },
    {
      slug: "event-2",
      title: "Event 2",
      description: "Description of Event 1",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "SV Polytechnique College, Mumbai",
      banner: "https://source.unsplash.com/1600x900/?business",
    },
    {
      slug: "event-3",
      title: "Event 3",
      description:
        "Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 Description of Event 3 ",
      date: "2024-12-11",
      time: "12:00",
      type: "Virtual",
      platform: "Google Meet",
      venue: "",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-4",
      title: "Event 4",
      description: "Description of Event 4",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "NP College, Delhi",
      banner: "https://source.unsplash.com/1400x900/?event",
    },
    {
      slug: "event-5",
      title: "Event 5",
      description: "Description of Event 5",
      date: "2022-12-12",
      time: "12:00",
      type: "Virtual",
      platform: "Zoom",
      venue: "",
      banner: "https://source.unsplash.com/1600x900/?business",
    },
    {
      slug: "event-6",
      title: "Event 6 Event 6 Event 6 Event 6 Event 6 Event 6 Event 6 Event 6",
      description: "Description of Event 6",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "SV Polytechnique College, Mumbai",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-7",
      title: "Event 7",
      description: "Description of Event 7",
      date: "2022-12-12",
      time: "12:00",
      type: "Virtual",
      platform: "Google Meet",
      venue: "",
      banner: "https://source.unsplash.com/1200x900/?event",
    },
    {
      slug: "event-8",
      title: "Event 8",
      description: "Description of Event 8",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "NP College, Delhi",
      banner: "https://source.unsplash.com/1600x900/?tech",
    },
    {
      slug: "event-9",
      title: "Event 9",
      description: "Description of Event 9",
      date: "2022-12-12",
      time: "12:00",
      type: "Virtual",
      platform: "Zoom",
      venue: "",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-10",
      title: "Event 10",
      description: "Description of Event 10",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "SV Polytechnique College, Mumbai",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-11",
      title: "Event 11",
      description: "Description of Event 11",
      date: "2022-12-12",
      time: "12:00",
      type: "Virtual",
      platform: "Google Meet",
      venue: "",
      banner: "https://source.unsplash.com/1600x900/?startup",
    },
    {
      slug: "event-12",
      title: "Event 12",
      description: "Description of Event 12",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "NP College, Delhi",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-13",
      title: "Event 13",
      description: "Description of Event 13",
      date: "2022-12-12",
      time: "12:00",
      type: "Virtual",
      platform: "Zoom",
      venue: "",
      banner: "https://source.unsplash.com/1600x950/?event",
    },
    {
      slug: "event-14",
      title: "Event 14",
      description: "Description of Event 14",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "SV Polytechnique College, Mumbai",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-15",
      title: "Event 15",
      description: "Description of Event 15",
      date: "2022-12-12",
      time: "12:00",
      type: "Virtual",
      platform: "Google Meet",
      venue: "",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-16",
      title: "Event 16",
      description: "Description of Event 16",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "NP College, Delhi",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-17",
      title: "Event 17",
      description: "Description of Event 17",
      date: "2022-12-12",
      time: "12:00",
      type: "Virtual",
      platform: "Zoom",
      venue: "",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-18",
      title: "Event 18",
      description: "Description of Event 18",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "SV Polytechnique College, Mumbai",
      banner: "https://source.unsplash.com/1600x1000",
    },
    {
      slug: "event-19",
      title: "Event 19",
      description: "Description of Event 19",
      date: "2022-12-12",
      time: "12:00",
      type: "Virtual",
      platform: "Google Meet",
      venue: "",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
    {
      slug: "event-20",
      title: "Event 20",
      description: "Description of Event 20",
      date: "2022-12-12",
      time: "12:00",
      type: "Offline",
      platform: "",
      venue: "NP College, Delhi",
      banner: "https://source.unsplash.com/1600x900/?event",
    },
  ]);

  // const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   server
  //     .get("/events/all")
  //     .then((res) => {
  //       console.log(res.data);
  //       setEvents(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Failed to fetch events");
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="text-center">
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
        {/* {loading && <p>Loading...</p>} */}
        {events?.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
