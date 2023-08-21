import styles from "./nextButton.module.css";
type Props = {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ disabled, onClick, children }: Props) {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
