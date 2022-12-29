import clsx from "clsx";

import { getPosts } from "~/models/post.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Button from "~/components/reusable_components/Button";
import Card from "~/components/reusable_components/card";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Index() {
  // @ts-ignore
  const { posts } = useLoaderData() as LoaderData;

  return (
    <main
      className={clsx(
        "relative mx-32 mt-24 min-h-screen px-64 dark:bg-gray-700"
      )}
    >
      <h1
        className={clsx(
          "pt-14 text-7xl font-semibold leading-[6rem] text-gray-700",
          "font-medium dark:text-white"
        )}
      >
        Helping people make the world a better place through code
      </h1>
      <div className="mb-24 flex flex-col gap-20 pb-80">
        <h2 className=" text-4xl leading-[4rem] text-gray-800 dark:text-gray-400">
          I'm a Frontend Developer with a passion for helping people
        </h2>
        <Button
          text="Learn more"
          className={clsx(
            "rounded-lg p-4 text-3xl font-medium",
            "dark:bg-amazon dark:text-white dark:hover:bg-yellow-500"
          )}
        />
      </div>
      <h2 className="font-semibold dark:text-white">Recent Posts</h2>
      <div className="flex flex-row pb-24">
        {[...posts]
          .reverse()
          .slice(0, 3)
          .map((post) => (
            <Card key={post.slug} post={post} />
          ))}
      </div>
    </main>
  );
}
