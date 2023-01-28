import clsx from "clsx";

type TextAreaProps = {
  id: string;
  label: string;
  error?: string;
};

export default function TextArea({ id, label, error }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <textarea
        className={clsx(
          "dark:border-yellow-500 dark:bg-gray-600 dark:focus:ring-yellow-600",
          "border-indigo-500 bg-gray-50 focus:ring-indigo-600",
          "rounded-lg border-b-2 p-2",
          "w-[17rem] focus:border-transparent focus:outline-none focus:ring-2 md:w-96"
        )}
        id={id}
        name={id}
        rows={5}
      />
      {error && <span className="text-red-500 ">{error}</span>}
    </div>
  );
}
