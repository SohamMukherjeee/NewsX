import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiLink } from "react-icons/fi";

function ScrollSec() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#F1F1F1] flex items-center flex-col justify-center px-6 sm:px-10">
      <h1 className="text-lg sm:text-4xl font-bold text-center w-full leading-relaxed sm:leading-snug break-words whitespace-normal bg-gradient-to-r from-black to-[#959AA1] bg-clip-text text-transparent">
        We believe stories don’t just communicate, they connect, inspire, and
        shape culture. At NewsX, we merge storytelling with tech to craft
        emotionally rich, culturally grounded, and creatively fearless
        narratives that are designed to move people and the world forward.
      </h1>
      <div className="flex justify-center items-center pt-30 flex-col">
        <h1 className="text-sm sm:text-2xl font-mono font-bold pb-10 text-center">
          Join readers across the globe who speak up for truth, transparency and
          impact.
        </h1>
        <button
          className="btn btn-neutral w-40 rounded-2xl hover:bg-[#5B636E]"
          onClick={() => navigate("/signpage")}
        >
          <FiLink /> Join the <span className="italic">Voices</span>
        </button>
      </div>
    </div>
  );
}

export default ScrollSec;
