import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PixelPledge from "./page/Home";
import HowItWorks from "./page/HowItWorks";
import Footer from "./components/Footer";
import Search from "./page/Find";
import FollowCampaign from "./page/FollowCampaign";
import About from "./page/About";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PixelPledge />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/search" element={<Search />} />
          <Route path="/follow-campaign" element={<FollowCampaign />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
