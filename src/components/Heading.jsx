import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { RiTeamLine } from "react-icons/ri";
import { IoLogoUsd } from "react-icons/io";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdCurrencyPound } from "react-icons/md";

function Heading() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1] flex justify-center items-center px-4 sm:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 gap-4 w-full max-w-6xl">
        <div className="col-span-1 sm:row-span-2 bg-white rounded-xl flex flex-col items-center justify-center p-4">
          <div className="h-[200px] sm:h-2/3 w-full flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/69f3c06e-428c-44a1-81d7-1f886567fe95/vdQadBXHQI.lottie"
              loop
              autoplay
            />
          </div>
          <div className="h-auto mt-4 text-center">
            <h1 className="text-[#9B9B9B] text-lg sm:text-2xl leading-snug">
              Stay updated with the latest <br className="hidden sm:block" />
              global headlines
            </h1>
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-xl flex flex-col items-center justify-center p-4">
          <div className=" w-full flex flex-row items-center justify-center text-5xl">
            <IoLogoUsd /> <PiCurrencyInrBold />
            <MdCurrencyPound />
          </div>
          <h1 className="text-[#9B9B9B] text-base sm:text-lg text-center">
            Explore country specific News
          </h1>
        </div>

        <div className="col-span-1 bg-white rounded-xl flex flex-col items-center justify-center p-4">
          <RiTeamLine className="text-6xl" />
          <p className="text-center text-[#9B9B9B]  text-base sm:text-lg">
            Join the Voices
          </p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
