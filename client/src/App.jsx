import AppRouter from "./AppRouter";
import Lenis from "@studio-freight/lenis";
import { useState } from "react";
const lenis = new Lenis();
import Navbar from "./components/Navbar";
import LoginPopup from "./components/LoginPopup";

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      {/* <Navbar setIsPopupOpen={setIsPopupOpen} /> */}
      {isPopupOpen && (
        <LoginPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
      <AppRouter setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />
    </div>
  );
};

export default App;
