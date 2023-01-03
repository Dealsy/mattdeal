import clsx from "clsx";

import { SocialIcon } from "react-social-icons";
import { Theme, useTheme } from "utils/theme-provider";
import Button from "./reusable_components/Button";

export default function Footer() {
  const [theme, setTheme] = useTheme();

  const themeToggole = theme === Theme.LIGHT;

  const toggleTheme = () => {
    setTheme((prevTheme: any) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <div
      className={clsx(
        "border-indigo-500 bg-gray-100 text-gray-100",
        "dark:border-yellow-500 dark:bg-gray-800 dark:text-white",
        "mt-10 flex justify-between border-t-2 pt-20"
      )}
    >
      <div className="ml-20 flex flex-col gap-5">
        <h3 className="text-black dark:text-white">Matt Deal </h3>
        <h6 className={clsx("text-gray-400 dark:text-gray-200")}>
          Follow me on these platforms{" "}
        </h6>
        <div className="flex flex-row justify-center gap-5">
          <SocialIcon
            url="https://github.com/Dealsy?tab=repositories"
            fgColor={theme === "dark" ? "#eab308" : "#fff"}
            bgColor={theme === "dark" ? "#000" : "#6366f1"}
          />
          <SocialIcon
            url="https://twitter.com/Dealsy01"
            fgColor={theme === "dark" ? "#eab308" : "#fff"}
            bgColor={theme === "dark" ? "#000" : "#6366f1"}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCt54LUGfJBgA2HU0eu_RXyg"
            fgColor={theme === "dark" ? "#eab308" : "#fff"}
            bgColor={theme === "dark" ? "#000" : "#6366f1"}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/matt-deal-038177b5/"
            fgColor={theme === "dark" ? "#eab308" : "#fff"}
            bgColor={theme === "dark" ? "#000" : "#6366f1"}
          />
        </div>
        <Button
          text={themeToggole ? "Light" : "Dark"}
          className={clsx(
            "mr-[12.5rem] rounded-md bg-discord p-2 text-white ",
            "hover:scale-105 hover:bg-dropbox",
            "dark:bg-amazon dark:hover:bg-yellow-500"
          )}
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-black dark:text-white">Sitemap</h3>
        <ul
          className={clsx(
            "flex flex-col gap-2",
            "text-gray-400 dark:text-gray-200"
          )}
        >
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <form className={clsx("mx-24 flex flex-col justify-center gap-5 pb-10")}>
        <h3 className="text-black dark:text-white">Lets chat today</h3>
        <label id="name"> Name </label>
        <input
          className={clsx(
            "dark:border-yellow-500 dark:bg-gray-600 dark:focus:ring-yellow-600",
            "border-indigo-500 bg-gray-50 focus:ring-indigo-600",
            "mb-5 w-96 rounded-lg border-b-2 p-5",
            "focus:border-transparent focus:outline-none focus:ring-2"
          )}
        />
        <label id="email"> Email </label>
        <input
          className={clsx(
            "dark:border-yellow-500 dark:bg-gray-600 dark:focus:ring-yellow-600",
            "border-indigo-500 bg-gray-50 focus:ring-indigo-600",
            "mb-5 rounded-lg border-b-2 p-5",
            "focus:border-transparent focus:outline-none focus:ring-2"
          )}
        />
        <label id="description"> Description </label>
        <textarea
          className={clsx(
            "dark:border-yellow-500 dark:bg-gray-600 dark:focus:ring-yellow-600",
            "border-indigo-500 bg-gray-50 focus:ring-indigo-600",
            "mb-5 rounded-lg border-b-2 p-2",
            "focus:border-transparent focus:outline-none focus:ring-2"
          )}
          id="Description"
          rows={5}
        ></textarea>
      </form>
    </div>
  );
}
