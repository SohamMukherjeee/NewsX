import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { TfiNewWindow } from "react-icons/tfi";
import { PiArrowBendLeftUpLight } from "react-icons/pi";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#F1F1F1] flex items-center justify-center">
      <div className="w-full h-[95vh] mx-7 bg-[#FFFFFF] rounded-xl shadow-lg flex px-12 py-10 flex-col sm:flex-row">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl text-black font-semibold leading-snug">
            Welcome to <span className="italic font-bold">NewsX.</span>
          </h1>
          <h2 className="pt-6 text-[#9B9B9B] text-md sm:text-lg pb-20">
            Your window to the world. <br />{" "}
            <span className="italic">Simple. Clean. Honest.</span>
          </h2>
          <button
            className="btn btn-neutral w-40 rounded-2xl hover:bg-[#5B636E]"
            onClick={() => navigate("/news")}
          >
            Start Reading <TfiNewWindow />
          </button>
          <div className="flex flex-row pt-3 pl-4 text-[#9B9B9B] italic">
            <PiArrowBendLeftUpLight />
            <h1 className="text-sm">Read the global headlines</h1>
          </div>
        </div>

        {/* Right Section (optional image/animation) */}
        <div className="w-full sm:w-1/2 flex items-center justify-center pt-25 sm:pt-0 pb-0 sm:pb-10">
          <DotLottieReact
            src="https://lottie.host/a40371d6-4076-4cb9-b858-4bae97d92dc4/mQCUviwozi.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
