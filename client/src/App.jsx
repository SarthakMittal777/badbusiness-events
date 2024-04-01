import AppRouter from "./AppRouter";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const App = () => {
  return <AppRouter />;
};

export default App;
