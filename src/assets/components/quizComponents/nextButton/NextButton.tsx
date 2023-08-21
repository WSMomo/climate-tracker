type Props = {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ disabled, onClick, children }: Props) {
  return (
    <button
      className={`bg-light-secondary-color dark:bg-dark-secondary-color py-1 px-4 ${
        disabled ? "opacity-40" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
