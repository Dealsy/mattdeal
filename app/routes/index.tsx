import Header from "../components/home/header";
import clsx from "clsx";

import { getPosts } from "~/models/post.server";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Card from "~/components/reusable_components/card";
import { useRef } from "react";
import Mission from "~/components/home/mission";

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
      <Header handleClick={handleClick} />
      <Mission cardElement={cardElement} />

      <div className="flex flex-row justify-between">
        <h2 className="p-5 font-semibold dark:text-white">Recent Posts</h2>
        <Link
          className="mt-6 text-2xl font-medium text-discord underline dark:text-amazon"
          to="/posts"
        >
          All Posts
        </Link>
      </div>
      <div className="flex flex-col pb-24 md:flex-row">
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
