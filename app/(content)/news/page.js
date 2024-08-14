"use client";

// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch(" http://localhost:3000/news");
      if (!response.ok) {
        setError("Failed to fetch news.");
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>News page</h1>
      <ul className="news-list">{news && <NewsList news={news} />}</ul>
    </>
  );
}
