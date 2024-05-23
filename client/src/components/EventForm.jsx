/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { server } from "../api";

function CreateEvent() {
  const navigate = useNavigate();
  const pathLocation = useLocation();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      navigate("/login", { state: { from: pathLocation } });
    }
  }, [accessToken, navigate, pathLocation]);

  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("");
  const [banner, setBanner] = useState("");
  const [type, setType] = useState("virtual");
  const [listedBy, setListedBy] = useState("individual");
  const [hosts, setHosts] = useState([
    { name: "", avatar: "", description: "", profile: "", type: "" },
  ]);
  const [speakers, setSpeakers] = useState([
    { name: "", avatar: "", description: "", profile: "", type: "" },
  ]);
  const [sponsors, setSponsors] = useState([
    { name: "", avatar: "", description: "", profile: "" },
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setIsPopupOpen(true);
    }
  }, []);

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setIsPopupOpen(true);
      return;
    }
    try {
      const response = await server.post(
        "/api/v1/event/create",
        {
          title: eventName,
          description,
          date: startDate,
          time: startTime,
          platform,
          venue: location,
          type,
          sponsor: sponsors,
          hosts,
          speakers,
          banner,
          listedBy,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        alert("Event created successfully");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    }
  };

  const handleHostChange = (index, field, value) => {
    const updatedHosts = [...hosts];
    updatedHosts[index][field] = value;
    setHosts(updatedHosts);
  };

  const handleAddHost = () => {
    setHosts([
      ...hosts,
      { name: "", avatar: "", description: "", profile: "", type: "" },
    ]);
  };

  const handleRemoveHost = (index) => {
    const updatedHosts = hosts.filter((_, i) => i !== index);
    setHosts(updatedHosts);
  };

  const handleSpeakerChange = (index, field, value) => {
    const updatedSpeakers = [...speakers];
    updatedSpeakers[index][field] = value;
    setSpeakers(updatedSpeakers);
  };

  const handleAddSpeaker = () => {
    setSpeakers([
      ...speakers,
      { name: "", avatar: "", description: "", profile: "", type: "" },
    ]);
  };

  const handleRemoveSpeaker = (index) => {
    const updatedSpeakers = speakers.filter((_, i) => i !== index);
    setSpeakers(updatedSpeakers);
  };

  const handleSponsorChange = (index, field, value) => {
    const updatedSponsors = [...sponsors];
    updatedSponsors[index][field] = value;
    setSponsors(updatedSponsors);
  };

  const handleAddSponsor = () => {
    setSponsors([
      ...sponsors,
      { name: "", avatar: "", description: "", profile: "" },
    ]);
  };

  const handleRemoveSponsor = (index) => {
    const updatedSponsors = sponsors.filter((_, i) => i !== index);
    setSponsors(updatedSponsors);
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-white flex justify-center items-center p-4">
      {/* <LoginPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
      <div className="bg-neutral-600 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="mr-4">
              <img
                src="/brand/logo.jpg"
                alt="Event"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Event Name</h1>
              <input
                type="text"
                value={eventName}
                required
                onChange={(e) => setEventName(e.target.value)}
                className="w-full mt-2 px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                placeholder="Event Name"
              />
            </div>
          </div>
        </div>
        <form onSubmit={handleCreateEvent}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Start Date and Time</label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                />
                <input
                  type="time"
                  value={startTime}
                  placeholder="2:00 PM"
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1">End Date and Time</label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  placeholder="4:00 PM"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                />
                <input
                  type="time"
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-1">Event Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
              placeholder="Offline location or virtual link"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
              placeholder="Add Description"
              rows="4"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">Hosts</label>
            {hosts.map((host, index) => (
              <div key={index} className="flex w-full flex-col mb-2">
                <input
                  type="text"
                  value={host.name}
                  onChange={(e) =>
                    handleHostChange(index, "name", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Host Name"
                />
                <input
                  type="text"
                  value={host.avatar}
                  onChange={(e) =>
                    handleHostChange(index, "avatar", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Host Avatar"
                />
                <input
                  type="text"
                  value={host.description}
                  onChange={(e) =>
                    handleHostChange(index, "description", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Host Description"
                />
                <input
                  type="text"
                  value={host.profile}
                  onChange={(e) =>
                    handleHostChange(index, "profile", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Host Profile"
                />
                <input
                  type="text"
                  value={host.type}
                  onChange={(e) =>
                    handleHostChange(index, "type", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Host Type"
                />
                <div className="flex justify-between gap-3 mt-3">
                  <button
                    type="button"
                    onClick={handleAddHost}
                    className="px-3 py-1 w-full bg-white/90 text-black font-semibold rounded-md">
                    Add Host
                  </button>
                  {hosts.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveHost(index)}
                      className="px-3 py-1 w-1/5 bg-red-600 text-white rounded-md">
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <label className="block mb-1">Speakers</label>
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col mb-2">
                <input
                  type="text"
                  value={speaker.name}
                  onChange={(e) =>
                    handleSpeakerChange(index, "name", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Speaker Name"
                />
                <input
                  type="text"
                  value={speaker.avatar}
                  onChange={(e) =>
                    handleSpeakerChange(index, "avatar", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Speaker Avatar"
                />
                <input
                  type="text"
                  value={speaker.description}
                  onChange={(e) =>
                    handleSpeakerChange(index, "description", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Speaker Description"
                />
                <input
                  type="text"
                  value={speaker.profile}
                  onChange={(e) =>
                    handleSpeakerChange(index, "profile", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Speaker Profile"
                />
                <input
                  type="text"
                  value={speaker.type}
                  onChange={(e) =>
                    handleSpeakerChange(index, "type", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Speaker Type"
                />
                <div className="flex justify-between gap-3 mt-3">
                  <button
                    type="button"
                    onClick={handleAddSpeaker}
                    className="px-3 py-1 w-full bg-white/90 text-black font-semibold rounded-md">
                    Add Speaker
                  </button>
                  {speakers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSpeaker(index)}
                      className="px-3 py-1 w-1/5 bg-red-600 text-white rounded-md">
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <label className="block mb-1">Sponsors</label>
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex flex-col mb-2">
                <input
                  type="text"
                  value={sponsor.name}
                  onChange={(e) =>
                    handleSponsorChange(index, "name", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Sponsor Name"
                />
                <input
                  type="text"
                  value={sponsor.avatar}
                  onChange={(e) =>
                    handleSponsorChange(index, "avatar", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Sponsor Avatar"
                />
                <input
                  type="text"
                  value={sponsor.description}
                  onChange={(e) =>
                    handleSponsorChange(index, "description", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Sponsor Description"
                />
                <input
                  type="text"
                  value={sponsor.profile}
                  onChange={(e) =>
                    handleSponsorChange(index, "profile", e.target.value)
                  }
                  className="w-full px-3 py-2 my-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
                  placeholder="Sponsor Profile"
                />
                <div className="flex justify-between gap-3 mt-3">
                  <button
                    type="button"
                    onClick={handleAddSponsor}
                    className="px-3 py-1 w-full bg-white/90 text-black font-semibold rounded-md">
                    Add Sponsor
                  </button>
                  {sponsors.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSponsor(index)}
                      className="px-3 py-1 w-1/5 bg-red-600 text-white rounded-md">
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <label className="block mb-1">Platform</label>
            <input
              type="text"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
              placeholder="Platform"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">Event Banner</label>
            <input
              type="text"
              value={banner}
              onChange={(e) => setBanner(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
              placeholder="Event Banner URL"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1">Event Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800">
              <option value="virtual">Virtual</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-1">Listed By</label>
            <select
              value={listedBy}
              onChange={(e) => setListedBy(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800">
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-3 py-2 mt-6 bg-neutral-200 text-black font-bold rounded-md">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
