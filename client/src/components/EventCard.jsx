import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link
      to={`/event/${event?.slug}`}
      className="rounded-md p-2 bg-white/5 border border-stone-700 hover:border-gray-500 shadow-lg hover:shadow-white/5"
    >
      <div>
        <img
          src={event?.banner}
          alt={event?.title}
          className="w-64 rounded-md aspect-video object-cover"
        />
      </div>
      <p className="py-2 text-left text-gray-200 h-14 line-clamp-2 text-ellipsis w-64">
        {event?.title}
      </p>
      <div className="flex justify-between text-sm w-64 pt-2">
        <span className="py-0.5 rounded-full">
          {new Date(event?.date).toDateString()}
        </span>
        <span className="bg-white/10 px-2 py-0.5 rounded-full">
          {event?.type}
        </span>
      </div>
    </Link>
  );
};

export default EventCard;
