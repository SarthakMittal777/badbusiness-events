import { Route, Routes } from "react-router-dom";
import { Event, Explore, Home } from "./screens";
import { Footer, Navbar } from "./components";
import ComingSoon from "./components/ComingSoon";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event/:slug" element={<Event />} />
        <Route path="/courses" element={<ComingSoon />} />
        <Route path="/merchandise" element={<ComingSoon />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;
