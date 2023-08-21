import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: Props) {
  const [isHidden, setIsHidden] = useState(true);
  function handleClick() {
    setIsHidden(!isHidden);
  }

  return (
    <div
      className={`
      w-4/5 p-2 m-2
    ${
      isHidden
        ? "bg-light-secondary-color text-light-text-color dark:bg-dark-secondary-color dark:text-dark-text-color"
        : "border border-light-text-color dark:border-dark-text-color"
    }`}
    >
      {/* ACCORDION TITLE */}
      <h2
        onClick={handleClick}
        className="font-semibold m-2 cursor-pointer text-center"
      >
        {title}
      </h2>
      {/* ACCORDION DESCRIPTION */}
      <div className={`${isHidden ? "hidden" : ""} p-2`}>{children}</div>
    </div>
  );
}
