import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Linkify from "linkify-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GoLocation } from "react-icons/go";
import { server } from "../api";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    server
      .get(`/api/v1/event/${slug}`)
      .then((res) => {
        setEvent(res.data.event);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        setLoading(false);
      });
  }, [slug]);

  // useEffect(() => {
  //   setLoading(true);
  //   server.post(`/events/`, { slug }).then((res) => {
  //     console.log(res.data);
  //     setEvents(res.data);
  //     setLoading(false);
  //   });
  // }, [slug]);

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

  const linkifyOptions = {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-blue-400",
  };

  return (
    <div className="w-full md:w-8/12 md:bg-white/10 mx-auto rounded-md md:p-8">
      {/* <Link to="/explore">Back to Explore</Link> */}
      {/* {loading && <p>Loading...</p>} */}
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
                rel="noopener noreferrer">
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
              <div className="text-gray-200">Not Revealed</div>
            )}
          </div>
          <div
            className={`flex flex-col py-4 border-t border-white/20 ${
              event?.hosts?.length == 0 ?? "hidden"
            }`}>
            <h3 className="text-xl font-semibold">Hosts</h3>
            {event?.hosts?.map((host, key) => (
              <a
                href={host.profile}
                key={key}
                className="flex items-center gap-2 p-2 hover:bg-white/20 rounded-md"
                target="_blank"
                rel="noopener noreferrer">
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
              <div className="text-gray-200">Not Revealed</div>
            )}
          </div>
          <div
            className={`border-t border-white/20 pt-4 ${
              event?.attendees?.length == 0 ?? "hidden"
            }`}>
            <h3 className="text-xl font-semibold">Attendees</h3>
            <p>
              {event?.attendees != 0 &&
                `${event?.attendees} ${
                  event?.type == "Virtual" ? "Attending" : "Going"
                }`}
              {event?.attendees == 0 && "No Attendees Yet"}
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
                  {monthNames[new Date(event?.date).getDay()]?.slice(0, 3)}
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
            <div className="flex justify-start">
              <Link to={`/register/${slug}`} className="flex justify-start ">
                <button className="px-3 py-1 w-full mt-5 bg-white/90 text-black font-semibold rounded-md">
                  Register Now
                </button>
              </Link>
            </div>
          </div>

          <div className="pt-4">
            <h2 className="text-2xl font-semibold text-gray-200">About</h2>
            <Linkify as="p" options={linkifyOptions}>
              {event?.description}
            </Linkify>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
