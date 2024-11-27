import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import homeMobile from "/src/assets/images/home/background-home-mobile.jpg";
import homeTablet from "/src/assets/images/home/background-home-tablet.jpg";
import homeDesktop from "/src/assets/images/home/background-home-desktop.jpg";
import crewMobile from "/src/assets/images/crew/background-crew-mobile.jpg";
import crewTablet from "/src/assets/images/crew/background-crew-tablet.jpg";
import crewDesktop from "/src/assets/images/crew/background-crew-desktop.jpg";
import destinationMobile from "/src/assets/images/destination/background-destination-mobile.jpg";
import destinationTablet from "/src/assets/images/destination/background-destination-tablet.jpg";
import destinationDesktop from "/src/assets/images/destination/background-destination-desktop.jpg";
import technologyMobile from "/src/assets/images/technology/background-technology-mobile.jpg";
import technologyTablet from "/src/assets/images/technology/background-technology-tablet.jpg";
import technologyDesktop from "/src/assets/images/technology/background-technology-desktop.jpg";
import NotFound from "./components/NotFound";

const backgrounds: Record<string, string> = {
  "/": `bg-[url('${homeMobile}')] md:bg-[url('${homeTablet}')] lg:bg-[url('${homeDesktop}')]`,
  "/crew": `bg-[url('${crewMobile}')] md:bg-[url('${crewTablet}')] lg:bg-[url('${crewDesktop}')]`,
  "/destination": `bg-[url('${destinationMobile}')] md:bg-[url('${destinationTablet}')] lg:bg-[url('${destinationDesktop}')]`,
  "/technology": `bg-[url('${technologyMobile}')] md:bg-[url('${technologyTablet}')] lg:bg-[url('${technologyDesktop}')]`,
};

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <main
        className={`grid min-h-screen grid-rows-[auto,1fr] items-center bg-cover bg-center ${backgrounds[pathname]}`}
      >
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
