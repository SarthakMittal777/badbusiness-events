import { Route, Routes } from "react-router-dom";
import { Event, Explore, Home } from "./screens";
import { Footer, Navbar } from "./components";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event/:slug" element={<Event />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;
