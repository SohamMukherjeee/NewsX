import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import ScrollSec from "./ScrollSec";
import Heading from "./Heading";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <LandingPage />
      <ScrollSec />
      <div className="flex flex-col items-center justify-center py-8 bg-[#F1F1F1] ">
        <Searchbar />
      </div>
      <Heading />
      <Footer />
    </>
  );
}
export default Home;
