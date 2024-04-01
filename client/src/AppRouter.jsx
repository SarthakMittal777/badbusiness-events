import { Route, Routes } from "react-router-dom";
import { Home } from "./screens";
import { Footer, Navbar } from "./components";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/event/:eid" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;
