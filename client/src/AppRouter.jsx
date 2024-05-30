import { Route, Routes } from "react-router-dom";
import { Event, Explore, Home } from "./screens";
import { Footer, Navbar } from "./components";
import ComingSoon from "./components/ComingSoon";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import CreateEvent from "./components/EventForm";
import RegisterEventForm from "./components/EventRegistration";
import Events from "./components/Events";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import UserProfile from "./components/UserProfile";

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
        <Route path="/register/:slug" element={<RegisterEventForm />} />
        <Route path="/event/all" element={<Events />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;
