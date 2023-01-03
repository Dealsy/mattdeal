import type { LoaderFunction } from "@remix-run/node";
import { marked } from "marked";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import hljs from "highlight.js";
import "highlight.js/styles/base16/monokai.css";
import type { Post } from "~/models/post.server";
import { getPost } from "~/models/post.server";
import clsx from "clsx";
import { Image } from "remix-image";

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

  return (
    <main className={clsx("py-20 md:mx-auto md:max-w-4xl")}>
      <h1 className="my-6 mx-5 border-b-2 text-center text-5xl font-bold dark:text-white md:text-7xl">
        {post.title}
      </h1>

      <div
        className="prose prose-lg  dark:prose-invert md:w-full md:prose-2xl"
        id="mark"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
