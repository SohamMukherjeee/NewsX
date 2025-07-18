function LoadingScreen() {
  return (
    <>
      <div className="w-full sm:w-96 flex flex-col bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transition hover:shadow-md">
        {/* Image */}
        <div className="h-56 w-full overflow-hidden bg-[#9B9B9B]"></div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-grow p-4">
          <div>
            <h6 className="text-slate-800 text-xl font-semibold mb-2 line-clamp-2 w-full h-4 bg-[#bbc5d4]"></h6>
            <h6 className="text-slate-800 text-xl font-semibold mb-2 line-clamp-2 w-1/2 h-4 bg-[#bbc5d4]"></h6>

            <p className="text-slate-600 text-sm font-light line-clamp-3 w-full h-2 bg-[#5B636E]"></p>
          </div>

          {/* Button */}
          <div className="mt-4">
            <button className="w-full bg-slate-800 text-white text-sm py-2 px-4 rounded-md hover:bg-slate-700 transition-all">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoadingScreen;
