import type { LoaderFunction } from "@remix-run/node";
import { marked } from "marked";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import hljs from "highlight.js";
import "highlight.js/styles/base16/monokai.css";
import type { Post } from "~/models/post.server";
import { getPost } from "~/models/post.server";

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  // const options = {
  //   highlight: function (code: any, language: any) {
  //     const validLanguage = hljs.getLanguage(language) ? language : "plaintext";

  //     console.log("validLanguage", validLanguage);
  //     return hljs.highlight(validLanguage, code).value;
  //   },
  // };

  marked.setOptions({
    langPrefix: "hljs language-",
    highlight: function (code) {
      return hljs.highlightAuto(code, ["html", "javascript"]).value;
    },
  });

  const html = marked.parse(post.markdown);
  return json<LoaderData>({ post, html });
};

export default function PostSlug() {
  // @ts-ignore
  const { post, html } = useLoaderData() as LoaderData;

  const words = html.split(" ").length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  console.log("readingTime", readingTime);

  return (
    <main className="mx-auto max-w-4xl py-20">
      <h1 className="my-6 border-b-2 text-center text-7xl font-bold dark:text-white">
        {post.title}
      </h1>
      <p className="font-medium text-gray-700 dark:text-white ">
        Read Time: {readingTime} {readingTime === 1 ? "minute" : "minutes"}
      </p>

      <div
        className="prose prose-2xl dark:prose-invert"
        id="mark"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
