import styles from "./actionButton.module.css";

type Props = {
  handleClick: () => void;
  children: React.ReactNode;
};

export default function ActionButton({ handleClick, children }: Props) {
  return (
    <button className={styles.actionButton} onClick={handleClick}>
      {children}
    </button>
  );
}
