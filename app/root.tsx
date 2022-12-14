import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { ThemeProvider, useTheme } from "../utils/theme-provider";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import clsx from "clsx";
import Nav from "./components/nav";
import { getEnv } from "./env.server";
import Footer from "./components/footer";
import MobileNav from "./components/mobileNav";
import { useState } from "react";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/material.min.css",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Mattdeal.com.au",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
    ENV: getEnv(),
  });
}

function App() {
  const data = useLoaderData();
  const [theme] = useTheme();
  const [open, setOpen] = useState(false);

  if (!theme) {
    return <div> loading.. </div>;
  }

  return (
    <html lang="en" className={clsx(theme, "h-full")}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gray-50 dark:bg-gray-700">
        <div className="hidden sm:block">
          <Nav />
        </div>
        <div className="md:hidden">
          <MobileNav open={open} setOpen={setOpen} />
        </div>

        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
