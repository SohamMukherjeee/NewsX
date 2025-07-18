import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useNavigate } from "react-router-dom";
import Avater from "./Avater";
import { FiLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

function ScrollSec() {
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: "chars" });

    // Prevent layout breaks by forcing chars inline
    splitText.chars.forEach((char) => {
      char.style.display = "inline-block";
    });

    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      y: 0, // No bounce
      stagger: 0.01,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-screen bg-[#F1F1F1] flex items-center flex-col justify-center px-6 sm:px-10">
      <h1
        ref={textRef}
        className="text-lg sm:text-4xl font-bold text-center w-full leading-relaxed sm:leading-snug text-gray-800 break-words whitespace-normal"
      >
        We believe stories don’t just communicate, they connect, inspire, and
        shape culture. At <span className="italic">NewsX</span>, we merge
        storytelling with tech to craft emotionally rich, culturally grounded,
        and creatively fearless narratives that are designed to move people and
        the world forward.
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
        <div className="pt-7 w-25">
          <Avater />
        </div>
      </div>
    </div>
  );
}

export default ScrollSec;
