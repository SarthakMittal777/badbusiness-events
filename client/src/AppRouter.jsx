import { Route, Routes } from "react-router-dom";
import { Event, Explore, Home } from "./screens";
import { Footer, Navbar } from "./components";
import ComingSoon from "./components/ComingSoon";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import CreateEvent from "./components/EventForm";

const AppRouter = ({ setIsPopupOpen, isPopupOpen }) => {
  return (
    <>
      <Navbar setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />
      <Routes>
        <Route path="/" element={<Home setIsPopupOpen={setIsPopupOpen} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event/:slug" element={<Event />} />
        <Route path="/courses" element={<ComingSoon />} />
        <Route path="/merchandise" element={<ComingSoon />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-event" element={<CreateEvent />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;
