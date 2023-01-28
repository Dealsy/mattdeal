import SiteMap from "../components/footer/site_map";
import Socials from "../components/footer/socials";
import clsx from "clsx";
import { Theme, useTheme } from "utils/theme-provider";
import Button from "./reusable_components/Button";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

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
        "my-10 flex flex-col border-t-2 py-20 md:flex-row md:justify-evenly"
      )}
    >
      <Button
        CenterIcon={themeToggole ? SunIcon : MoonIcon}
        centerStyle="h-14 w-14 m-auto"
        className={clsx(
          "h-24 w-24 rounded-full bg-discord p-2 text-white ",
          "hover:scale-105 hover:bg-dropbox",
          "dark:bg-amazon dark:hover:bg-yellow-500"
        )}
        onClick={toggleTheme}
      />
      <Socials theme={theme} />
      <SiteMap />
    </div>
  );
}
