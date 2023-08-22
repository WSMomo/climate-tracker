import styles from "./slider.module.css";
import ReactSlider from "react-slider";

interface Props {
  minYear: number;
  maxYear: number;
  handleChangeSlider: (value: number[]) => void;
}

function Slider({ minYear, maxYear, handleChangeSlider }: Props) {
  return (
    <div className={styles.container}>
      <ReactSlider
        className={styles.reactSlider}
        thumbClassName={styles.thumb}
        thumbActiveClassName={styles.thumbActive}
        trackClassName={styles.track}
        defaultValue={[minYear, maxYear]}
        min={minYear}
        max={maxYear}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value) => handleChangeSlider(value)}
        pearling
        minDistance={3}
      />
    </div>
  );
}

export default Slider;
