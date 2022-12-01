import type { LoaderFunction } from "@remix-run/node";
import { marked } from "marked";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Post } from "~/models/post.server";
import { getPost } from "~/models/post.server";

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};

export default function PostSlug() {
  // @ts-ignore
  const { post, html } = useLoaderData() as LoaderData;
  return (
    <main className=" mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-5xl font-semibold dark:text-white">
        {post.title}
      </h1>
      <div
        className="prose prose-xl p-2 dark:prose-invert"
        id="mark"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
