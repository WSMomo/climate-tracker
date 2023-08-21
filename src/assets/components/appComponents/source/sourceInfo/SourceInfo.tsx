import Separator from "../../../separator/Separator";
import SourceLink from "../sourceLink/SourceLink";
import styles from "./sourceInfo.module.css";

interface Props {
  children?: React.ReactNode;
}

function SourceInfo({ children }: Props) {
  return (
    <>
      <Separator />

      <div className={styles.container}>
        Sources: <br />
        <SourceLink url="https://global-warming.org/">
          global-warming.org
        </SourceLink>
        {children}
      </div>
    </>
  );
}

export default SourceInfo;
