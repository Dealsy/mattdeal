import { Link } from "@remix-run/react";
import clsx from "clsx";

import { useLocation } from "@remix-run/react";

export default function Card({ post }: { post: any }) {
  const location = useLocation();

  const words = post.markdown.split(" ").length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <Link
      key={post.slug}
      to={location.pathname === "/" ? `/posts/${post.slug}` : post.slug}
      prefetch="intent"
    >
      <div
        style={{
          backgroundImage: post.image
            ? `url(${post.image})`
            : ' url("/images/placeholder.png")',
          backgroundRepeat: "no-repat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        className={clsx(
          "m-10 flex h-[30rem] w-80 flex-col rounded-lg border-4 border-discord bg-gray-300 opacity-90 hover:border-dropbox dark:border-amazon",
          "relative shadow-xl",
          "hover:scale-125 hover:shadow-2xl dark:hover:border-yellow-500"
        )}
      >
        <div className="bg-gray-600 bg-opacity-70">
          <h3 className="flex  justify-center p-5 text-4xl font-semibold text-white">
            {post.title}
          </h3>
          <div className="flex flex-row gap-16">
            <p className="pl-4 pb-2 text-base font-medium text-white">
              category: {post.category}
            </p>
            <p className="text-base font-medium text-white">
              {readingTime} minute read
            </p>
          </div>
        </div>

        <div
          className={clsx(
            "absolute bottom-[0px] right-0 w-[16] rounded-b-[4px] bg-gray-800 p-6 text-white opacity-90",
            "opacity-80 dark:font-medium"
          )}
        >
          {post.markdown.slice(0, 60)}...
          <p className="mt-5 text-xs">
            Created at: {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
