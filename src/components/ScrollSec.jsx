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
  const joinSectionRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: "chars" });

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
      y: 0,
      stagger: 0.01,
      ease: "none",
    });

    gsap.to(joinSectionRef.current, {
      opacity: 1,
      delay: 0.3,
      duration: 1,
      ease: "power2.out",
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
      <div
        ref={joinSectionRef}
        className="flex justify-center items-center pt-30 flex-col opacity-0"
      >
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
        <div className="pt-7 w-20 min-h-[48px] relative">
          {/* Background placeholder to prevent white flash */}
          <div className="absolute inset-0 flex -space-x-4 justify-start items-center z-0 pt-7">
            <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
            <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
            <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
          </div>

          {/* Avatars overlaid on top; will fade in */}
          <div className="relative z-10">
            <Avater />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollSec;
