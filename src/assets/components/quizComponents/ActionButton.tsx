type Props = {
  handleClick: () => void;
  children: React.ReactNode;
};

export default function ActionButton({ handleClick, children }: Props) {
  return (
    <button
      className="border px-8 py-2 md:hover:opacity-75 m-4 text-text-color"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
