type Props = {
  handleClick: () => void;
  children: React.ReactNode;
};

export default function ActionButton({ handleClick, children }: Props) {
  return (
    <button
      className="px-8 py-2 md:hover:opacity-75 m-4 text-light-text-color dark:text-dark-text-color bg-light-secondary-color dark:bg-dark-secondary-color"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
