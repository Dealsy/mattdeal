import { Link } from "@remix-run/react";
import clsx from "clsx";

export default function Site_map() {
  return (
    <div className="mx-14 flex flex-col gap-5">
      <h3 className="text-black dark:text-white">Sitemap</h3>
      <ul
        className={clsx(
          "flex flex-col gap-2",
          "text-gray-400 dark:text-gray-200"
        )}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Blog</Link>
      </ul>
    </div>
  );
}
