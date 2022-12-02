import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, Outlet, useTransition } from "@remix-run/react";
import clsx from "clsx";

import { getPosts } from "~/models/post.server";
import { requireAdminUser } from "~/session.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireAdminUser(request);
  return json({ posts: await getPosts() });
};

export default function PostAdmin() {
  const transition = useTransition();
  const isUploading =
    transition.submission?.formData.get("intent") === "upload";
  // @ts-ignore
  const { posts } = useLoaderData() as LoaderData;
  return (
    <div className="mx-auto max-w-4xl">
      <h1
        className={clsx(
          "my-6 mb-10 border-b-2 text-center text-3xl font-bold",
          "dark:text-white"
        )}
      >
        Blog Admin
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {posts.map((post) => (
              <li className="bg-gray-200 p-2" key={post.slug}>
                <Link
                  to={post.slug}
                  className="text-indigo-500 hover:text-indigo-700 focus:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
