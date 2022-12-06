import clsx from "clsx";

export default function Index() {
  return (
    <main
      className={clsx("relative mx-32 mt-24 min-h-screen dark:bg-gray-700")}
    >
      <h1
        className={clsx(
          "text-7xl leading-[6rem] text-gray-800",
          "font-medium dark:text-white"
        )}
      >
        Helping people make the world a better place through code
      </h1>
      <div>
        <h2 className="text-4xl leading-[4rem] text-gray-800 dark:text-gray-400">
          I'm a Frontend Developer with a passion for helping people
        </h2>
      </div>
    </main>
  );
}
