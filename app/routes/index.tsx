import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative min-h-screen dark:bg-gray-700 sm:flex sm:items-center sm:justify-center">
      <Link to="/posts" className="text-xl text-blue-600 underline">
        Blog Posts
      </Link>
    </main>
  );
}
