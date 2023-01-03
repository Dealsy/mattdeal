import clsx from "clsx";

import { getPosts } from "~/models/post.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Button from "~/components/reusable_components/Button";
import Card from "~/components/reusable_components/card";
import { useRef } from "react";

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

  const cardElement = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    if (cardElement.current) {
      window.scrollTo({
        top: cardElement.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <main
      className={clsx(
        "relative mt-24 min-h-screen dark:bg-gray-700 md:mx-32 md:px-64"
      )}
    >
      <div className="flex flex-col gap-5 p-10">
        <h1
          className={clsx(
            "text-5xl font-semibold leading-[3rem] text-gray-700 md:pt-14 md:text-7xl md:leading-[6rem]",
            "font-medium dark:text-white"
          )}
        >
          Helping people make the world a better place through code
        </h1>
        <div className="mb-24 flex flex-col gap-20 pb-80">
          <h2 className="lead-[3rem] text-3xl text-gray-800 dark:text-gray-400 md:text-4xl md:leading-[4rem]">
            I'm a Frontend Developer with a passion for helping people
          </h2>
          <Button
            onClick={handleClick}
            text="Learn more"
            className={clsx(
              "rounded-lg p-4 text-3xl font-medium",
              "dark:bg-amazon dark:text-white dark:hover:bg-yellow-500"
            )}
          />
        </div>
      </div>
      <h2 className="p-5 font-semibold dark:text-white">Recent Posts</h2>
      <div className="flex flex-col pb-24 md:flex-row" ref={cardElement}>
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
