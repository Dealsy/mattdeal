import clsx from "clsx";

import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div
      className={clsx(
        "border-indigo-500 bg-indigo-400 text-gray-100",
        "dark:border-yellow-500 dark:bg-gray-800 dark:text-white",
        "mt-10 flex justify-between border-t-2 pt-20"
      )}
    >
      <div className="ml-20 flex flex-col gap-5">
        <h5>Matt Deal </h5>
        <h6 className={clsx("text-gray-400 dark:text-gray-200")}>
          Follow me on these platforms{" "}
        </h6>
        <div className="flex flex-row justify-center">
          <SocialIcon
            url="https://github.com/Dealsy?tab=repositories"
            fgColor={"#000000"}
            bgColor={"#818cf8"}
          />
          <SocialIcon
            url="https://twitter.com/Dealsy01"
            fgColor={"#000000"}
            bgColor={"#818cf8"}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCt54LUGfJBgA2HU0eu_RXyg"
            fgColor={"#000000"}
            bgColor={"#818cf8"}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/matt-deal-038177b5/"
            fgColor={"#000000"}
            bgColor={"#818cf8"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h6>Sitemap</h6>
        <ul
          className={clsx(
            "flex flex-col gap-2",
            "text-gray-400 dark:text-gray-200"
          )}
        >
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Courses</li>
        </ul>
      </div>
      <form className={clsx("mx-24 flex flex-col justify-center pb-32")}>
        <h4 className="pb-5">Lets chat today</h4>
        <input className="h-14 w-96 px-5 pt-5" />
        <input className="h-14 w-96 px-5 pt-5" />
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
