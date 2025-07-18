import breaking from "../assets/breaking.jpg";
function NewsGrid({ article }) {
  return (
    <div className="w-full sm:w-96 flex flex-col bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transition hover:shadow-md">
      {/* Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={article.urlToImage || breaking}
          alt="news"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h6 className="text-slate-800 text-xl font-semibold mb-2 line-clamp-2">
            {article.title}
          </h6>
          <p className="text-slate-600 text-sm font-light line-clamp-3">
            {article.description}
          </p>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button
            onClick={() => window.open(article.url, "_blank")}
            className="w-full bg-slate-800 text-white text-sm py-2 px-4 rounded-md hover:bg-slate-700 transition-all"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsGrid;
