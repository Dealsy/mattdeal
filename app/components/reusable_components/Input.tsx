import clsx from "clsx";
type InputProps = {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
  labelName?: string;
  id?: string;
  error?: string;
};

export default function Input({
  className,
  onChange,
  value,
  name,
  labelName,
  id,
  error,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{labelName}</label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        aria-label={labelName}
        className={clsx(
          "dark:border-yellow-500 dark:bg-gray-600 dark:focus:ring-yellow-600",
          "border-indigo-500 bg-gray-50 focus:ring-indigo-600",
          "w-[16rem] rounded-lg border-b-2 p-5 md:w-96",
          "focus:border-transparent focus:outline-none focus:ring-2",
          className
        )}
      />
      {error && <span className="text-red-500 ">{error}</span>}
    </div>
  );
}
