import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul className="news-list">
        {/* <li>
          <Link href="/news/first-news">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News Item</Link>
        </li> */}
        <NewsList news={DUMMY_NEWS} />
      </ul>
    </>
  );
}
