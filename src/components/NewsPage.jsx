import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewsGrid from "./NewsGrid";
import LoadingScreen from "./LoadingScreen";
import Footer from "./Footer";
const PAGE_SIZE = 6;
const TOTAL_PAGES = 6;

function NewsPage() {
  const { country } = useParams();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); 
      const url = `${baseUrl}/api/news/country?country=${country}&page=${page}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [country, page]);

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <>
      <div>
        <Navbar />
        {loading ? (
          <>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center p-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <LoadingScreen key={index} />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Grid of News Cards */}
            <div className="mt-15 ">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center p-4">
                {articles.map((article, index) => (
                  <NewsGrid key={index} article={article} />
                ))}
              </div>

              {/* Pagination with DaisyUI radio buttons */}
              <div className="flex justify-center my-6 bg-[]">
                <div className="join">
                  {Array.from({ length: TOTAL_PAGES }).map((_, idx) => (
                    <input
                      key={idx}
                      className="join-item btn btn-square"
                      type="radio"
                      name="page-options"
                      aria-label={`${idx + 1}`}
                      checked={page === idx + 1}
                      onChange={() => handlePageChange(idx + 1)}
                    />
                  ))}
                </div>
              </div>

              {/* Optional: Show current page */}
              <div className="text-center text-sm text-slate-500 mb-8  ">
                Page {page} of {TOTAL_PAGES}
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
}
export default NewsPage;
