import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import clsx from "clsx";
import { useMemo, useState } from "react";

import { getPosts } from "~/models/post.server";
import { useOptionalAdminUser } from "~/utils";
import useDebounce from "../../hooks/useDebounce";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const [search, setSearch] = useState("");
  const [catSearch, setCatSearch] = useState("All categories");

  console.log(catSearch);

  // @ts-ignore
  const { posts } = useLoaderData() as LoaderData;
  const adminUser = useOptionalAdminUser();

  const categories = posts.map((post) => post.category);
  const uniqueCategories = [...new Set(categories)];

  const debouncedSearch = useDebounce(search, 200);
  const termSearch =
    debouncedSearch === ""
      ? posts
      : posts.filter((post: any) =>
          post.title.toString().toLowerCase().includes(search.toLowerCase())
        );

  const selectedValue = (priorityValue: string) => {
    setCatSearch(priorityValue);
  };

  const combinedFilter = useMemo(() => {
    return termSearch.filter((post: any) => {
      if (catSearch === "All categories") {
        return termSearch;
      } else if (post.category === catSearch) {
        return post.category;
      }
    });
  }, [termSearch, catSearch]);

  return (
    <main className="flex flex-col p-14 dark:bg-gray-700">
      {adminUser ? (
        <Link
          to="admin"
          className={clsx(
            "m-auto flex w-32 justify-center rounded-md border-discord bg-discord p-2 text-xl font-medium text-white",
            "hover:scale-110 hover:bg-dropbox dark:hover:bg-yellow-500",
            "dark:border-yellow-500 dark:bg-amazon "
          )}
        >
          Admin
        </Link>
      ) : null}
      <h1 className="m-10 ml-10 flex justify-center text-5xl font-medium dark:text-white">
        All Posts
      </h1>

      <div className="flex flex-row justify-between px-28">
        <input
          placeholder="Search for a blog"
          type="text"
          className={clsx(
            "w-96 border-b-2 border-gray-400 px-2 text-xl placeholder-slate-500 outline-none",
            "dark:bg-gray-700 dark:text-white dark:placeholder-gray-200"
          )}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-col">
          <label
            className="text-lg font-medium dark:text-white"
            htmlFor="select"
          >
            Select a category
          </label>
          <select
            className="rounded-lg border-2 border-gray-800 p-2"
            id="select"
            onChange={(e) => selectedValue(e.target.value)}
          >
            <option value="All categories"> All categories </option>
            {uniqueCategories.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap p-10">
        {combinedFilter.map((post) => (
          <Link key={post.slug} to={post.slug} prefetch="intent">
            <div
              className={clsx(
                "m-10 flex h-96 w-64 flex-col rounded-lg border-4 border-discord hover:border-dropbox dark:border-amazon",
                "relative shadow-xl",
                "hover:scale-125 hover:shadow-2xl dark:hover:border-yellow-500"
              )}
            >
              <h3 className="flex justify-center p-5 text-2xl dark:text-white">
                {post.title}
              </h3>
              <p
                className={clsx(
                  "flex justify-start pl-2 text-gray-500",
                  "dark:text-gray-400"
                )}
              >
                category: {post.category}
              </p>

              <div
                className={clsx(
                  "absolute bottom-[0px] right-0 w-[16] rounded-b-[4px] bg-gray-800 p-6 text-white opacity-80",
                  "opacity-80 dark:font-medium"
                )}
              >
                {post.markdown.slice(0, 60)}...
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
