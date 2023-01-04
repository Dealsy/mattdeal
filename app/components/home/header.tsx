import clsx from "clsx";
import Button from "../reusable_components/Button";

type HeaderProps = {
  handleClick: () => void;
};

export default function Header({ handleClick }: HeaderProps) {
  return (
    <div className="flex flex-col gap-5 p-10">
      <h1
        className={clsx(
          "text-5xl font-semibold leading-[3rem] text-gray-700 md:pt-14 md:text-7xl md:leading-[6rem]",
          "font-medium dark:text-white"
        )}
      >
        Helping people make the world a better place through code
      </h1>
      <div className="mb-24 flex flex-col gap-20 pb-80">
        <h2 className="lead-[3rem] text-3xl text-gray-800 dark:text-gray-400 md:text-4xl md:leading-[4rem]">
          I'm a Frontend Developer with a passion for helping people
        </h2>
        <Button
          onClick={handleClick}
          text="Learn more"
          className={clsx(
            "rounded-lg p-4 text-3xl font-medium",
            "dark:bg-amazon dark:text-white dark:hover:bg-yellow-500"
          )}
        />
      </div>
    </div>
  );
}
