import { Link } from "@remix-run/react";
import clsx from "clsx";

export default function Card({ post }: { post: any }) {
  return (
    <Link key={post.slug} to={post.slug} prefetch="intent">
      <div
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundRepeat: "no-repat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        className={clsx(
          "m-10 flex h-96 w-64 flex-col rounded-lg border-4 border-discord bg-gray-300 opacity-90 hover:border-dropbox dark:border-amazon",
          "relative shadow-xl",
          "hover:scale-125 hover:shadow-2xl dark:hover:border-yellow-500"
        )}
      >
        <div className="bg-gray-600 bg-opacity-70">
          <h3 className="flex justify-center p-5 text-4xl font-semibold text-white">
            {post.title}
          </h3>
          <p
            className={clsx(
              "flex justify-start pl-2",
              "font-medium text-white"
            )}
          >
            category: {post.category}
          </p>
        </div>

        <div
          className={clsx(
            "absolute bottom-[0px] right-0 w-[16] rounded-b-[4px] bg-gray-800 p-6 text-white opacity-90",
            "opacity-80 dark:font-medium"
          )}
        >
          {post.markdown.slice(0, 60)}...
        </div>
      </div>
    </Link>
  );
}
