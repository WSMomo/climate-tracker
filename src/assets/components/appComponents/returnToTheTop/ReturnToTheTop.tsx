import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

function ReturnToTheTop() {
  function scollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div className="w-full flex justify-end">
      <button onClick={scollToTop} title="Return to the Top">
        <ArrowUpCircleIcon className="w-8 h-8 bg-dark-text-color text-dark-secondary-color rounded-full hover:bg-dark-secondary-color hover:text-dark-text-color" />
      </button>
    </div>
  );
}

export default ReturnToTheTop;
