import { useNavigate, useLocation } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSign = location.pathname === "/signpage"; // Adjust if your homepage route differs

  return (
    <>
      <div className="w-full pt-4 flex flex-col items-center mb-2">
        <h1 className="text-xl italic text-left font-semibold">NewsX</h1>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a onClick={() => navigate("/")}>Home</a>
            </li>
            <li>
              <a className="underline">{isSign ? `Voice` : `News`}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
