import Contact from "../components/footer/contact";
import SiteMap from "../components/footer/site_map";
import Socials from "../components/footer/socials";
import clsx from "clsx";
import { Theme, useTheme } from "utils/theme-provider";

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
        "mt-10 flex flex-col gap-5 border-t-2 pt-20 md:flex-row md:justify-between"
      )}
    >
      <Socials
        theme={theme}
        themeToggole={themeToggole}
        toggleTheme={toggleTheme}
      />
      <SiteMap />
      <Contact />
    </div>
  );
}
