import { HeroSection } from "../components";

const Home = ({ setIsPopupOpen }) => {
  return (
    <main className="px-4 py-4">
      <HeroSection setIsPopupOpen={setIsPopupOpen} />
    </main>
  );
};

export default Home;
