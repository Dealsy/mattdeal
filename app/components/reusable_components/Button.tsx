import clsx from "clsx";

type ButtonProps = {
  text: string;
  className?: string;
  UpperDiveClassName?: string;
  onClick?: () => void;
  LeftIcon?: any;
  RightIcon?: any;
  rightStyle?: string;
  leftStyle?: string;
};

export default function Button({
  text,
  className,
  onClick,
  // eslint-disable-next-line
  UpperDiveClassName,
  // eslint-disable-next-line
  LeftIcon,
  // eslint-disable-next-line
  RightIcon,
  rightStyle,
  leftStyle,
}: ButtonProps) {
  return (
    <div className={clsx(UpperDiveClassName || "flex justify-center")}>
      <button onClick={onClick} className={clsx(className)}>
        {LeftIcon && <LeftIcon className={clsx(leftStyle || "mr-2 h-5")} />}
        {text}
        {RightIcon && <RightIcon className={clsx(rightStyle || "ml-2 h-4")} />}
      </button>
    </div>
  );
}
