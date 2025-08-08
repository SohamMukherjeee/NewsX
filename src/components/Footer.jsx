import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Adjust if your homepage route differs

  return (
    <div
      className={`w-full h-[115px] sm:h-[130px] overflow-hidden ${
        isHome ? "bg-[#F1F1F1]" : "bg-white"
      }`}
    >
      <h1
        className="text-center w-full text-7xl sm:text-9xl leading-[180px] sm:leading-[200px] bg-gradient-to-r from-[#9B9B9B]
 to-[#F1F1F1] bg-clip-text text-transparent  font-bold italic"
      >
        NewsX
      </h1>
    </div>
  );
}

export default Footer;
