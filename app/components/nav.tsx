import { Form, Link } from "@remix-run/react";
import clsx from "clsx";
import { useOptionalUser } from "~/utils";
import { Theme, useTheme } from "../../utils/theme-provider";
import Button from "./reusable_components/Button";

export default function Nav() {
  const user = useOptionalUser();
  const [theme, setTheme] = useTheme();

  const themeToggole = theme === Theme.LIGHT;

  const toggleTheme = () => {
    setTheme((prevTheme: any) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <nav
      className={clsx(
        "flex flex-row items-center justify-between border-b-2 border-discord",
        "p-6 dark:border-yellow-500 dark:bg-gray-700 dark:text-white"
      )}
    >
      <Link to="/" className="text-2xl font-bold">
        {user ? user.email : "Mattdeal.com.au"}
      </Link>
      <ul className="flex flex-row space-x-4">
        <li>
          <Link to="/posts">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <Button
          text={themeToggole ? "Light" : "Dark"}
          className={clsx(
            "rounded-md bg-discord p-2 text-white",
            "hover:scale-105 hover:bg-dropbox",
            "dark:bg-amazon dark:hover:bg-yellow-500"
          )}
          onClick={toggleTheme}
        />
        {user ? (
          ""
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/join">Sign up</Link>
            </li>
          </>
        )}
        {user ? (
          <Form action="/logout" method="post">
            <button type="submit" className="">
              Logout
            </button>
          </Form>
        ) : null}
      </ul>
    </nav>
  );
}
