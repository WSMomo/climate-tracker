import { useState } from "react";

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

function PageInfo({ buttonText, children }: Props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className={`${
          show
            ? "bg-text-color text-secondary-color"
            : "bg-secondary-color text-text-color"
        } rounded-xl w-11/12 max-w-[900px] min-h-fit p-2 mt-12 mb-12`}
        onClick={() => setShow(!show)}
      >
        {buttonText}
      </button>
      {show && (
        <div className="bg-secondary-color rounded-xl w-11/12 max-w-[900px] min-h-fit p-2 text-text-color mb-12 ">
          {children}
        </div>
      )}
    </>
  );
}

export default PageInfo;
