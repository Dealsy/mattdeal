import { Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { requireAdminUser } from "~/session.server";
import clsx from "clsx";

export const loader: LoaderFunction = async ({ request }) => {
  await requireAdminUser(request);
  return json({});
};

export default function AdminIndex() {
  return (
    <p>
      <Link
        to="new"
        className={clsx(
          "rounded-lg bg-discord p-4 text-xl font-medium text-white shadow-xl hover:bg-dropbox",
          "dark:bg-yellow-500 dark:hover:bg-yellow-600"
        )}
      >
        Create a New Post
      </Link>
    </p>
  );
}
