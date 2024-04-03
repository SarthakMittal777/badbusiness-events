import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../api";
import { GoLocation } from "react-icons/go";

const EventDetails = ({ slug }) => {
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // server.get(`/events/${slug}`).then((res) => {
    //   setEvents(res.data);
    setLoading(false);
    // });
  }, []);

  const event = events.find((event) => event.slug === slug);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="w-full md:w-8/12 bg-white/10 mx-auto rounded-md md:p-8">
      {/* <Link to="/explore">Back to Explore</Link> */}
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="">
          <img
            src={event?.banner}
            alt={event?.title}
            className="rounded-md w-full md:w-80 aspect-video object-cover"
          />
          <div className={`flex flex-col py-4 ${!event?.speakers ?? "hidden"}`}>
            <h3 className="text-xl font-semibold">Speakers</h3>
            {event?.speakers?.map((speaker, key) => (
              <a
                href={speaker.profile}
                key={key}
                className="flex items-center gap-2 p-2 hover:bg-white/20 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  className="w-8 h-8 rounded-full bg-center object-cover"
                />
                <div>
                  <h5 className="text-gray-200">{speaker.name}</h5>
                  <p className="text-xs">{speaker.description}</p>
                </div>
              </a>
            ))}
            {event?.hosts?.length === 0 && (
              <div className="text-gray-200">No Speakers</div>
            )}
          </div>
          <div
            className={`flex flex-col py-4 border-t border-white/20 ${
              event?.hosts.length == 0 ?? "hidden"
            }`}
          >
            <h3 className="text-xl font-semibold">Hosts</h3>
            {event?.hosts?.map((host, key) => (
              <a
                href={host.profile}
                key={key}
                className="flex items-center gap-2 p-2 hover:bg-white/20 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={host.avatar}
                  alt={host.name}
                  className="w-8 h-8 rounded-full bg-center object-cover"
                />
                <div>
                  <h5 className="text-gray-200">{host.name}</h5>
                  <p className="text-xs">{host.description}</p>
                </div>
              </a>
            ))}
            {event?.hosts?.length === 0 && (
              <div className="text-gray-200">No Hosts</div>
            )}
          </div>
          <div
            className={`border-t border-white/20 pt-4 ${
              event?.attendees.length == 0 ?? "hidden"
            }`}
          >
            <h3 className="text-xl font-semibold">Attendees</h3>
            <p>
              {event?.attendees != 0 &&
                `${event?.attendees} ${
                  event?.type == "Virtual" ? "Attending" : "Going"
                }`}
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-6xl font-semibold text-gray-200">
            {event?.title}
          </h2>
          <div className="space-y-2">
            <div className="flex justify-center items-center gap-4">
              <div className="text-center">
                <div className="border border-white/30 bg-white/30 rounded-t-md uppercase text-[0.5rem] font-bold w-10 h-4">
                  {monthNames[new Date(event?.date).getDay()].slice(0, 3)}
                </div>
                <div className="w-10 border-x border-b border-white/40 rounded-b-md h-6">
                  {new Date(event?.date).getDate()}
                </div>
              </div>
              <div className="h-12 flex-1">
                <p className="text-gray-200 font-semibold">
                  {weekNames[new Date(event?.date).getDay()]},{" "}
                  {monthNames[new Date(event?.date).getDay()]}{" "}
                  {new Date(event?.date).getDate()}
                </p>
                <p className="text-sm">{event?.time}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="text-center">
                <div className="w-10 border border-white/30 rounded-md h-10 flex justify-center items-center">
                  <GoLocation size={20} />
                </div>
              </div>
              <div className="h-12 flex-1">
                <p className="text-gray-200 font-semibold">{event?.type}</p>
                <p className="text-sm">
                  {event?.type == "Virtual"
                    ? `${event?.platform}`
                    : `${event?.venue}`}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h2 className="text-2xl font-semibold text-gray-200">About</h2>
            <p>{event?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
