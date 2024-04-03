import { useParams } from "react-router-dom";
import { EventDetails } from "../components";

const Event = () => {
  const { slug } = useParams();

  return (
    <main className="px-4 py-4">
      <EventDetails slug={slug} />
    </main>
  );
};

export default Event;
