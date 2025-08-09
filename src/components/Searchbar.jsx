import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TfiNewWindow } from "react-icons/tfi";
import { PiArrowBendLeftDownLight } from "react-icons/pi";

function Searchbar() {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!country) {
      alert("Please select a country !!");
      return;
    }
    navigate(`/news/${country}`);
    // Example URL for News API
    // const url = `https://newsapi.org/v2/everything?q=${country}&language=en&sortBy=publishedAt&apiKey=${
    //   import.meta.env.VITE_API_URL
    // }`;

    // console.log("Fetching from:", url);
    // You can use fetch or axios to make the actual request here
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mb-15 sm:mb-0">
      <div className="flex flex-row justify-center items-center">
        <span className=" text-2xl mt-1">
          <PiArrowBendLeftDownLight className="text-[#9B9B9B]" />
        </span>
        <h1 className="font-semibold text-md italic pb-5 text-[#9B9B9B]">
          Country Specific News !!
        </h1>
      </div>
      <div
        className="w-4/5 sm:w-1/3 h-15 sm:h-20 bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-0 sm:gap-4 p-4"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
        }}
      >
        <div className="flex gap-x-2 sm:gap-x-30">
          <select
            className="border p-2 rounded-2xl"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="us" className="hover:bg-black/10">
              🇺🇸 United States
            </option>
            <option value="in">🇮🇳 India</option>
            <option value="gb">🇬🇧 United Kingdom</option>
            <option value="au">🇦🇺 Australia</option>
            <option value="ca">🇨🇦 Canada</option>
            {/* Add more countries if needed */}
          </select>

          <button
            onClick={handleSubmit}
            className="btn btn-neutral w-26 rounded-2xl gap-x-2 text-center hover:bg-[#5B636E]"
          >
            Search <TfiNewWindow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
