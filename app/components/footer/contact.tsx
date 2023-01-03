import Input from "../reusable_components/Input";

import clsx from "clsx";

export default function Contact() {
  return (
    <form
      className={clsx(
        "mx-14 flex flex-col justify-center gap-5 pb-10 md:mx-24"
      )}
    >
      <h3 className="text-black dark:text-white">Lets chat today</h3>

      <Input labelName="Name" className="" />
      <Input labelName="Email" className="" />

      <label id="description"> Description </label>
      <textarea
        className={clsx(
          "dark:border-yellow-500 dark:bg-gray-600 dark:focus:ring-yellow-600",
          "border-indigo-500 bg-gray-50 focus:ring-indigo-600",
          "mb-5 rounded-lg border-b-2 p-2",
          "w-[17rem] focus:border-transparent focus:outline-none focus:ring-2"
        )}
        id="Description"
        rows={5}
      ></textarea>
    </form>
  );
}
