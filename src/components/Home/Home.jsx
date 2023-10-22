import PicBanner from "../Banner/PicBanner";
import Footer from "../Footer/Footer";
import Instagram from "../Instagram-fed/Instagram";
import LetestPost from "../Letest-post/LetestPost";
import Slide from "../MainSlide/Slide";
import Navbar from "../Navbar/Navbar";
import Popular from "../Popular-section/Popular";
import RandomPost from "../Random-post/RandomPost";
import TopFooter from "../Top-footer/TopFooter";
import Topbar from "../Topbar/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Slide />
      <PicBanner />
      <LetestPost />
      <Popular />
      <RandomPost />
      <Instagram />
      <TopFooter />
      <Footer />
    </div>
  );
};

export default Home;
