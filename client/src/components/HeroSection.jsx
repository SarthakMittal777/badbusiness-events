import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 md:flex-row items-center justify-center min-h-screen my-4 md:w-4/5 mx-auto">
      <div className="flex flex-col gap-6 text-center md:text-left flex-1 md:pl-4">
        <h2 className="text-xl font-semibold">BB Events</h2>
        <p className="text-7xl font-semibold text-gray-100">
          Delightful <br />
          events that <br />
          <span className="text-transparent bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 bg-clip-text">
            scale your <br />
            business
          </span>
        </p>
        <p className="text-2xl md:w-4/6">
          Get enlightened with Founders Talks, Podcast, Startup Funding Rounds,
          Become a CEO with us!
        </p>
        <div className="flex mt-5 justify-evenly md:justify-start md:gap-8">
          <Link
            to="/explore"
            className="flex items-center bg-white shadow-md shadow-gray-400 hover:shadow-gray-300 rounded-md px-6 py-2 text-black font-semibold select-none">
            Explore Events
            <GoArrowUpRight className="-mb-0.5 font-bold" size={20} />
          </Link>
          <Link to="/register-event">
            <button className="bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 text-white font-semibold rounded-md px-6 py-2 select-none">
              Register an Event
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img src="/static/hero-image.png" className="glow-red ml-2" />
      </div>
    </section>
  );
};

export default HeroSection;
