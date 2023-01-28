import clsx from "clsx";

type ButtonProps = {
  text?: string;
  className?: string;
  onClick?: () => void;
  LeftIcon?: any;
  RightIcon?: any;
  rightStyle?: string;
  leftStyle?: string;
  centerStyle?: string;
  CenterIcon?: any;
};

export default function Button({
  text,
  className,
  onClick,
  // eslint-disable-next-line
  LeftIcon,
  // eslint-disable-next-line
  RightIcon,
  rightStyle,
  leftStyle,
  centerStyle,
  CenterIcon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(className, "bg-discord text-white dark:bg-amazon")}
    >
      {LeftIcon && <LeftIcon className={clsx(leftStyle || "mr-2 h-5")} />}
      {CenterIcon && (
        <CenterIcon className={clsx(centerStyle || "m-auto h-5")} />
      )}
      {text}
      {RightIcon && <RightIcon className={clsx(rightStyle || "ml-2 h-4")} />}
    </button>
  );
}
