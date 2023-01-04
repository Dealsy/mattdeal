import Card from "../../components/reusable_components/card";
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
    <main className="flex flex-col dark:bg-gray-700 md:p-14">
      {adminUser ? (
        <Link
          to="admin"
          className={clsx(
            "m-auto flex w-32 justify-center rounded-md border-discord bg-discord p-2 text-xl font-medium text-white",
            "hover:scale-110 hover:bg-dropbox dark:hover:bg-yellow-500",
            "dark:border-yellow-500 dark:bg-amazon"
          )}
        >
          Admin
        </Link>
      ) : null}
      <h1 className="mb-10 flex text-5xl font-medium dark:text-white md:m-10 md:mb-0 md:ml-10 md:justify-center">
        All Posts
      </h1>

      <div className="flex flex-col justify-between gap-5 md:flex-row md:px-28">
        <input
          placeholder="Search for a blog"
          type="text"
          className={clsx(
            "border-b-2 border-gray-400 px-2 text-xl placeholder-slate-500 outline-none md:w-96",
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
            className="w-44 rounded-lg border-2 border-gray-800 p-2 md:w-full"
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
      <div className="flex flex-col md:flex-row md:flex-wrap md:p-10">
        {[...combinedFilter].reverse().map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
