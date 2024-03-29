import clsx from "clsx";
import { SocialIcon } from "react-social-icons";
import type { Theme } from "types/types";

type SocialsProps = {
  theme: Theme | null;
};

export default function Socials({ theme }: SocialsProps) {
  return (
    <div className="mx-14 flex flex-col gap-5">
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
    </div>
  );
}
