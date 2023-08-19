import { useState } from "react";

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

function PageInfo({ buttonText, children }: Props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <a
        href="#pageInfo"
        onClick={() => setShow(!show)}
        className={`${
          show
            ? "bg-text-color text-secondary-color"
            : "bg-secondary-color text-text-color"
        } text-center rounded-xl w-11/12 max-w-[900px] min-h-fit p-2 mt-12 mb-12`}
      >
        {buttonText}
      </a>
      {show && (
        <div
          id="pageInfo"
          className="bg-secondary-color rounded-xl w-11/12 max-w-[900px] min-h-fit p-2 text-text-color mb-12 flex flex-col justify-center items-center pt-8 pb-8 "
        >
          {children}
        </div>
      )}
    </>
  );
}

export default PageInfo;
